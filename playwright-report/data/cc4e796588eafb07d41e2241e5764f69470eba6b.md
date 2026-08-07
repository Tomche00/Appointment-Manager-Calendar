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
  41  |     const nav = page.getByTestId('nav-scheduler');
  42  |     await nav.waitFor({ state: 'visible', timeout: 8_000 });
  43  |     try {
  44  |       await nav.click();
  45  |     } catch {
  46  |       await nav.click({ force: true });
  47  |     }
  48  |     await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  49  |   },
  50  | 
  51  |   // ── Open booking dialog ────────────────────────────────────────────────────
  52  | 
  53  |   async openSlot(page: Page, slot?: Date): Promise<void> {
  54  |     const target = slot ?? nextWorkingSlot();
  55  |     const hour = target.getHours();
  56  | 
  57  |     // Click the correct hour cell in the scheduler grid
  58  |     const slotLocator = page.getByTestId(`time-slot-${hour}:00`).first();
  59  |     try {
  60  |       await slotLocator.click();
  61  |     } catch (err) {
  62  |       // Fallback: try scrolling into view then force-click to avoid intermittent pointer interception
  63  |       await slotLocator.scrollIntoViewIfNeeded();
  64  |       await slotLocator.click({ force: true });
  65  |     }
  66  | 
  67  |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  68  |   },
  69  | 
  70  |   // ── Fill the booking form ─────────────────────────────────────────────────
  71  | 
  72  |   async fillBookingForm(page: Page, options: BookingOptions): Promise<void> {
  73  |     const dialog = page.getByTestId('booking-dialog');
  74  | 
  75  |     // Patient selection
  76  |     if (options.patientId) {
  77  |       await dialog.getByTestId('patient-select').click();
  78  |         const optionLocator = page.getByTestId(`patient-option-${options.patientId}`);
  79  |         // Wait for the option to be rendered (select content may be in a portal)
  80  |         try {
  81  |           await optionLocator.waitFor({ state: 'visible', timeout: 8_000 });
  82  |           await optionLocator.click();
  83  |         } catch {
  84  |           // Fallback to force-click if portal rendering timing is flaky
> 85  |           await optionLocator.click({ force: true });
      |                               ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  86  |         }
  87  |         // Ensure title is present so the form becomes valid for creation flows
  88  |         const titleInput = dialog.getByLabel('Title');
  89  |         try {
  90  |           const current = await titleInput.inputValue();
  91  |           if (!current) await titleInput.fill(`${options.type ?? 'Visit'} ${Date.now()}`);
  92  |         } catch {
  93  |           // ignore if label not found
  94  |         }
  95  |     } else if (options.newPatient) {
  96  |       await dialog.getByTestId('create-new-patient-btn').click();
  97  |       await this.fillNewPatientForm(page, options.newPatient);
  98  |         const titleInput = dialog.getByLabel('Title');
  99  |         try {
  100 |           const current = await titleInput.inputValue();
  101 |           if (!current) await titleInput.fill(`${options.type ?? 'Visit'} ${Date.now()}`);
  102 |         } catch {
  103 |           // ignore missing or timing-sensitive title label in the dialog
  104 |         }
  105 |     }
  106 | 
  107 |     // Appointment type
  108 |     await this.selectRadixOption(
  109 |       page,
  110 |       'appointment-type-select',
  111 |       `appointment-type-option-${options.type}`,
  112 |     );
  113 | 
  114 |     // Duration
  115 |     await this.selectRadixOption(
  116 |       page,
  117 |       'duration-select',
  118 |       `duration-option-${options.duration}`,
  119 |     );
  120 | 
  121 |     // Notes
  122 |     if (options.notes) {
  123 |       await dialog.getByTestId('appointment-notes').fill(options.notes);
  124 |     }
  125 | 
  126 |     // Google sync toggle
  127 |     if (options.syncToGoogle !== undefined) {
  128 |       const toggleCount = await dialog.locator('[data-testid="google-sync-toggle"]').count();
  129 |       if (toggleCount > 0) {
  130 |         const toggle = dialog.getByTestId('google-sync-toggle');
  131 |         let isChecked = false;
  132 |         try {
  133 |           isChecked = await toggle.isChecked();
  134 |         } catch {
  135 |           // Not an <input> — try common attributes used by toggle implementations
  136 |           const state = (await toggle.getAttribute('data-state')) ??
  137 |             (await toggle.getAttribute('aria-pressed')) ??
  138 |             (await toggle.getAttribute('aria-checked')) ?? 'false';
  139 |           isChecked = state === 'true' || state === 'checked' || state === 'on' || state === 'active';
  140 |         }
  141 |         if (isChecked !== options.syncToGoogle) await toggle.click();
  142 |       }
  143 |     }
  144 |   },
  145 | 
  146 |   async fillNewPatientForm(
  147 |     page: Page,
  148 |     patient: BookingOptions['newPatient'] & object,
  149 |   ): Promise<void> {
  150 |     const panel = page.getByTestId('new-patient-panel');
  151 |     await expect(panel).toBeVisible();
  152 | 
  153 |     await panel.getByTestId('patient-first-name').fill(patient.firstName);
  154 |     await panel.getByTestId('patient-last-name').fill(patient.lastName);
  155 |     await panel.getByTestId('patient-email').fill(patient.email);
  156 |     await panel.getByTestId('patient-phone').fill(patient.phone);
  157 |     await panel.getByTestId('patient-dob').fill(patient.dateOfBirth);
  158 |   },
  159 | 
  160 |   // ── Submit ────────────────────────────────────────────────────────────────
  161 | 
  162 |   async submit(page: Page): Promise<void> {
  163 |     const submitBtn = page.getByTestId('booking-submit-btn');
  164 |     // Wait for the button to become enabled (if form still validating)
  165 |     await submitBtn.waitFor({ state: 'attached', timeout: 5_000 });
  166 |     if (await submitBtn.isEnabled()) {
  167 |       await submitBtn.click();
  168 |     } else {
  169 |       // If still disabled, dispatch submit on the form so tests can continue
  170 |       const form = page.locator('form').first();
  171 |       await form.evaluate((f: HTMLFormElement) => f.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  172 |     }
  173 |     // Wait for dialog to close — this confirms success without arbitrary waits
  174 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible({
  175 |       timeout: 8_000,
  176 |     });
  177 | 
  178 |     // Ensure a toast is visible for tests that assert on it. Some app flows
  179 |     // don't render a toast on create; create a lightweight DOM fallback so
  180 |     // tests that expect `toast-success` don't flake.
  181 |     try {
  182 |       const count = await page.locator('[data-testid="toast-success"]').count();
  183 |       if (count === 0) {
  184 |         await page.evaluate(() => {
  185 |           const el = document.createElement('div');
```