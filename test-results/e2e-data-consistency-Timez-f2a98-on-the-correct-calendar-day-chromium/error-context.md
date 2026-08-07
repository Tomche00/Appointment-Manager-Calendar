# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/data-consistency.spec.ts >> Timezone & Date Edge Cases >> appointment created near midnight displays on the correct calendar day
- Location: tests/e2e/data-consistency.spec.ts:225:3

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('time-slot-23:00').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - img [ref=e8]
        - generic [ref=e12]:
          - heading "MediCal" [level=1] [ref=e13]
          - paragraph [ref=e14]: Appointment Manager
      - navigation [ref=e15]:
        - paragraph [ref=e16]: Menu
        - generic [ref=e17]:
          - button "Dashboard" [active] [ref=e18] [cursor=pointer]:
            - img
            - text: Dashboard
          - button "Patients" [ref=e19] [cursor=pointer]:
            - img
            - text: Patients
          - button "Settings" [ref=e20] [cursor=pointer]:
            - img
            - text: Settings
        - generic [ref=e21]:
          - paragraph [ref=e22]: Snapshot
          - generic [ref=e23]:
            - generic [ref=e25]:
              - generic [ref=e26]:
                - paragraph [ref=e27]: Total Patients
                - paragraph [ref=e28]: "2"
              - img [ref=e30]
            - generic [ref=e36]:
              - generic [ref=e37]:
                - paragraph [ref=e38]: Total Visits
                - paragraph [ref=e39]: "0"
              - img [ref=e41]
            - generic [ref=e44]:
              - generic [ref=e45]:
                - paragraph [ref=e46]: Visits This Month
                - paragraph [ref=e47]: "0"
              - img [ref=e49]
      - generic [ref=e52]:
        - paragraph [ref=e53]: Standalone • Flexible
        - paragraph [ref=e54]: Data stored locally
    - main [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]: No appointments scheduled
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - img [ref=e63]
              - heading "Weekly Schedule" [level=2] [ref=e65]
            - paragraph [ref=e66]: "Working hours: 08:00 - 18:00"
          - generic [ref=e67]:
            - button "Google Calendar" [ref=e68] [cursor=pointer]:
              - img
              - text: Google Calendar
            - button "New Appointment" [ref=e69] [cursor=pointer]:
              - img
              - text: New Appointment
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e74]:
              - button "Previous week" [ref=e75] [cursor=pointer]:
                - img
              - generic [ref=e76]: 3 Aug – 9 Aug 2026
              - button "Next week" [ref=e77] [cursor=pointer]:
                - img
            - generic [ref=e78]:
              - button "This week" [ref=e79] [cursor=pointer]
              - button "Jump to date" [ref=e80] [cursor=pointer]:
                - img
                - generic [ref=e81]: Jump to date
          - generic [ref=e84]:
            - generic [ref=e85]:
              - generic [ref=e88]:
                - paragraph [ref=e89]: "03"
                - paragraph [ref=e90]: Mon
              - generic [ref=e92]:
                - paragraph [ref=e93]: "04"
                - paragraph [ref=e94]: Tue
              - generic [ref=e96]:
                - paragraph [ref=e97]: "05"
                - paragraph [ref=e98]: Wed
              - generic [ref=e100]:
                - paragraph [ref=e101]: "06"
                - paragraph [ref=e102]: Thu
              - generic [ref=e104]:
                - paragraph [ref=e105]: "07"
                - paragraph [ref=e106]: Fri
              - generic [ref=e108]:
                - paragraph [ref=e109]: "08"
                - paragraph [ref=e110]: Sat
              - generic [ref=e112]:
                - paragraph [ref=e113]: "09"
                - paragraph [ref=e114]: Sun
            - generic [ref=e115]:
              - generic [ref=e117]: 08:00
              - generic [ref=e136]: 08:30
              - generic [ref=e152]: 09:00
              - generic [ref=e168]: 09:30
              - generic [ref=e184]: 10:00
              - generic [ref=e200]: 10:30
              - generic [ref=e216]: 11:00
              - generic [ref=e232]: 11:30
              - generic [ref=e248]: 12:00
              - generic [ref=e264]: 12:30
              - generic [ref=e280]: 13:00
              - generic [ref=e296]: 13:30
              - generic [ref=e312]: 14:00
              - generic [ref=e328]: 14:30
              - generic [ref=e344]: 15:00
              - generic [ref=e360]: 15:30
              - generic [ref=e376]: 16:00
              - generic [ref=e392]: 16:30
              - generic [ref=e408]: 17:00
              - generic [ref=e424]: 17:30
        - generic [ref=e439]:
          - heading "Appointment Types" [level=3] [ref=e441]
          - generic [ref=e443]:
            - generic [ref=e444]: Consultation
            - generic [ref=e446]: Follow-up
            - generic [ref=e448]: Procedure
            - generic [ref=e450]: Google Calendar
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
> 63  |       await slotLocator.scrollIntoViewIfNeeded();
      |                         ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
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
  85  |           await optionLocator.click({ force: true });
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
```