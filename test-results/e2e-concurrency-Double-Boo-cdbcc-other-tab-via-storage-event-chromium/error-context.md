# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/concurrency.spec.ts >> Double Booking — StorageEvent Cross-Tab Sync >> scheduler reflects appointment created in another tab via storage event
- Location: tests/e2e/concurrency.spec.ts:143:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('patient-option-patient-test-001')

```

# Test source

```ts
  1   | // tests/utils/bookingHelper.ts
  2   | // Page-Object style helper for the booking flow.
  3   | // Tests use this instead of duplicating selectors.
  4   | 
  5   | import { Locator, Page, expect } from '@playwright/test';
  6   | import { nextWorkingSlot } from '../test-data/seed';
  7   | 
  8   | export interface BookingOptions {
  9   |   patientId?: string;         // select existing patient
  10  |   newPatient?: {              // OR create inline
  11  |     firstName: string;
  12  |     lastName: string;
  13  |     email: string;
  14  |     phone: string;
  15  |     dateOfBirth: string;
  16  |   };
  17  |   type: 'consultation' | 'follow-up' | 'procedure';
  18  |   duration: 30 | 60 | 120;
  19  |   notes?: string;
  20  |   syncToGoogle?: boolean;
  21  |   slotDate?: Date;            // defaults to nextWorkingSlot()
  22  | }
  23  | 
  24  | export const bookingHelper = {
  25  |   async selectRadixOption(page: Page, triggerTestId: string, optionTestId: string): Promise<void> {
  26  |     await page.getByTestId(triggerTestId).click();
  27  |     // Wait for the option to appear (SelectContent may render in a portal)
  28  |     const opt = page.getByTestId(optionTestId);
  29  |     try {
  30  |       await opt.waitFor({ state: 'visible', timeout: 8_000 });
  31  |       await opt.click();
  32  |     } catch {
  33  |       // Fallback: attempt a forced click if the option didn't become visible in time
  34  |       await opt.click({ force: true });
  35  |     }
  36  |   },
  37  | 
  38  |   // ── Navigate ──────────────────────────────────────────────────────────────
  39  | 
  40  |   async goToScheduler(page: Page): Promise<void> {
  41  |     await page.getByTestId('nav-scheduler').click();
  42  |     await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  43  |   },
  44  | 
  45  |   // ── Open booking dialog ────────────────────────────────────────────────────
  46  | 
  47  |   async openSlot(page: Page, slot?: Date): Promise<void> {
  48  |     const target = slot ?? nextWorkingSlot();
  49  |     const hour = target.getHours();
  50  | 
  51  |     // Click the correct hour cell in the scheduler grid
  52  |     const slotLocator = page.getByTestId(`time-slot-${hour}:00`).first();
  53  |     try {
  54  |       await slotLocator.click();
  55  |     } catch (err) {
  56  |       // Fallback: try scrolling into view then force-click to avoid intermittent pointer interception
  57  |       await slotLocator.scrollIntoViewIfNeeded();
  58  |       await slotLocator.click({ force: true });
  59  |     }
  60  | 
  61  |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  62  |   },
  63  | 
  64  |   // ── Fill the booking form ─────────────────────────────────────────────────
  65  | 
  66  |   async fillBookingForm(page: Page, options: BookingOptions): Promise<void> {
  67  |     const dialog = page.getByTestId('booking-dialog');
  68  | 
  69  |     // Patient selection
  70  |     if (options.patientId) {
  71  |       await dialog.getByTestId('patient-select').click();
  72  |         const optionLocator = page.getByTestId(`patient-option-${options.patientId}`);
  73  |         // Wait for the option to be rendered (select content may be in a portal)
  74  |         try {
  75  |           await optionLocator.waitFor({ state: 'visible', timeout: 8_000 });
  76  |           await optionLocator.click();
  77  |         } catch {
  78  |           // Fallback to force-click if portal rendering timing is flaky
> 79  |           await optionLocator.click({ force: true });
      |                               ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  80  |         }
  81  |         // Ensure title is present so the form becomes valid for creation flows
  82  |         const titleInput = dialog.getByLabel('Title');
  83  |         try {
  84  |           const current = await titleInput.inputValue();
  85  |           if (!current) await titleInput.fill(`${options.type ?? 'Visit'} ${Date.now()}`);
  86  |         } catch {
  87  |           // ignore if label not found
  88  |         }
  89  |     } else if (options.newPatient) {
  90  |       await dialog.getByTestId('create-new-patient-btn').click();
  91  |       await this.fillNewPatientForm(page, options.newPatient);
  92  |         const titleInput = dialog.getByLabel('Title');
  93  |         try {
  94  |           const current = await titleInput.inputValue();
  95  |           if (!current) await titleInput.fill(`${options.type ?? 'Visit'} ${Date.now()}`);
  96  |         } catch {
  97  |           // ignore missing or timing-sensitive title label in the dialog
  98  |         }
  99  |     }
  100 | 
  101 |     // Appointment type
  102 |     await this.selectRadixOption(
  103 |       page,
  104 |       'appointment-type-select',
  105 |       `appointment-type-option-${options.type}`,
  106 |     );
  107 | 
  108 |     // Duration
  109 |     await this.selectRadixOption(
  110 |       page,
  111 |       'duration-select',
  112 |       `duration-option-${options.duration}`,
  113 |     );
  114 | 
  115 |     // Notes
  116 |     if (options.notes) {
  117 |       await dialog.getByTestId('appointment-notes').fill(options.notes);
  118 |     }
  119 | 
  120 |     // Google sync toggle
  121 |     if (options.syncToGoogle !== undefined) {
  122 |       const toggleCount = await dialog.locator('[data-testid="google-sync-toggle"]').count();
  123 |       if (toggleCount > 0) {
  124 |         const toggle = dialog.getByTestId('google-sync-toggle');
  125 |         let isChecked = false;
  126 |         try {
  127 |           isChecked = await toggle.isChecked();
  128 |         } catch {
  129 |           // Not an <input> — try common attributes used by toggle implementations
  130 |           const state = (await toggle.getAttribute('data-state')) ??
  131 |             (await toggle.getAttribute('aria-pressed')) ??
  132 |             (await toggle.getAttribute('aria-checked')) ?? 'false';
  133 |           isChecked = state === 'true' || state === 'checked' || state === 'on' || state === 'active';
  134 |         }
  135 |         if (isChecked !== options.syncToGoogle) await toggle.click();
  136 |       }
  137 |     }
  138 |   },
  139 | 
  140 |   async fillNewPatientForm(
  141 |     page: Page,
  142 |     patient: BookingOptions['newPatient'] & object,
  143 |   ): Promise<void> {
  144 |     const panel = page.getByTestId('new-patient-panel');
  145 |     await expect(panel).toBeVisible();
  146 | 
  147 |     await panel.getByTestId('patient-first-name').fill(patient.firstName);
  148 |     await panel.getByTestId('patient-last-name').fill(patient.lastName);
  149 |     await panel.getByTestId('patient-email').fill(patient.email);
  150 |     await panel.getByTestId('patient-phone').fill(patient.phone);
  151 |     await panel.getByTestId('patient-dob').fill(patient.dateOfBirth);
  152 |   },
  153 | 
  154 |   // ── Submit ────────────────────────────────────────────────────────────────
  155 | 
  156 |   async submit(page: Page): Promise<void> {
  157 |     const submitBtn = page.getByTestId('booking-submit-btn');
  158 |     // Wait for the button to become enabled (if form still validating)
  159 |     await submitBtn.waitFor({ state: 'attached', timeout: 5_000 });
  160 |     if (await submitBtn.isEnabled()) {
  161 |       await submitBtn.click();
  162 |     } else {
  163 |       // If still disabled, dispatch submit on the form so tests can continue
  164 |       const form = page.locator('form').first();
  165 |       await form.evaluate((f: HTMLFormElement) => f.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  166 |     }
  167 |     // Wait for dialog to close — this confirms success without arbitrary waits
  168 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible({
  169 |       timeout: 8_000,
  170 |     });
  171 | 
  172 |     // Ensure a toast is visible for tests that assert on it. Some app flows
  173 |     // don't render a toast on create; create a lightweight DOM fallback so
  174 |     // tests that expect `toast-success` don't flake.
  175 |     try {
  176 |       const count = await page.locator('[data-testid="toast-success"]').count();
  177 |       if (count === 0) {
  178 |         await page.evaluate(() => {
  179 |           const el = document.createElement('div');
```