# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/critical-user-flows.spec.ts >> Critical User Flows >> edit appointment updates title, type, duration, notes, and time
- Location: tests/e2e/critical-user-flows.spec.ts:22:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('patient-option-patient-test-001')

```

# Page snapshot

```yaml
- generic:
  - generic:
    - list
    - region "Notifications alt+T"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - img
            - generic:
              - heading [level=1]: MediCal
              - paragraph: Appointment Manager
        - navigation:
          - paragraph: Menu
          - generic:
            - button:
              - img
              - text: Dashboard
            - button:
              - img
              - text: Patients
            - button:
              - img
              - text: Settings
          - generic:
            - paragraph: Snapshot
            - generic:
              - generic:
                - generic:
                  - generic:
                    - paragraph: Total Patients
                    - paragraph: "1"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Total Visits
                    - paragraph: "5"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Visits This Month
                    - paragraph: "0"
                  - generic:
                    - img
        - generic:
          - generic:
            - paragraph: Standalone • Flexible
            - paragraph: Data stored locally
      - main:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - heading [level=2]: Weekly Schedule
                - paragraph: "Working hours: 09:00 - 17:00"
              - generic:
                - button:
                  - img
                  - text: Google Calendar
                - button:
                  - img
                  - text: New Appointment
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - button:
                        - img
                      - generic: 27 Jul – 2 Aug 2026
                      - button:
                        - img
                  - generic:
                    - button: This week
                    - button:
                      - img
                      - generic: Jump to date
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - paragraph: "27"
                            - paragraph: Mon
                        - generic:
                          - generic:
                            - paragraph: "28"
                            - paragraph: Tue
                        - generic:
                          - generic:
                            - paragraph: "29"
                            - paragraph: Wed
                        - generic:
                          - generic:
                            - paragraph: "30"
                            - paragraph: Thu
                        - generic:
                          - generic:
                            - paragraph: "31"
                            - paragraph: Fri
                        - generic:
                          - generic:
                            - paragraph: "01"
                            - paragraph: Sat
                        - generic:
                          - generic:
                            - paragraph: "02"
                            - paragraph: Sun
                      - generic:
                        - generic:
                          - generic: 09:00
                        - generic:
                          - generic: 09:15
                        - generic:
                          - generic: 09:30
                        - generic:
                          - generic: 09:45
                        - generic:
                          - generic: 10:00
                        - generic:
                          - generic: 10:15
                        - generic:
                          - generic: 10:30
                        - generic:
                          - generic: 10:45
                        - generic:
                          - generic: 11:00
                        - generic:
                          - generic: 11:15
                        - generic:
                          - generic: 11:30
                        - generic:
                          - generic: 11:45
                        - generic:
                          - generic: 12:00
                        - generic:
                          - generic: 12:15
                        - generic:
                          - generic: 12:30
                        - generic:
                          - generic: 12:45
                        - generic:
                          - generic: 13:00
                        - generic:
                          - generic: 13:15
                        - generic:
                          - generic: 13:30
                        - generic:
                          - generic: 13:45
                        - generic:
                          - generic: 14:00
                        - generic:
                          - generic: 14:15
                        - generic:
                          - generic: 14:30
                        - generic:
                          - generic: 14:45
                        - generic:
                          - generic: 15:00
                        - generic:
                          - generic: 15:15
                        - generic:
                          - generic: 15:30
                        - generic:
                          - generic: 15:45
                        - generic:
                          - generic: 16:00
                        - generic:
                          - generic: 16:15
                        - generic:
                          - generic: 16:30
                        - generic:
                          - generic: 16:45
            - generic:
              - generic:
                - heading [level=3]: Appointment Types
              - generic:
                - generic:
                  - generic: Consultation
                  - generic: Follow-up
                  - generic: Procedure
                  - generic: Google Calendar
  - dialog:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - img
            - generic:
              - heading [level=2]: Create Appointment
              - paragraph: Book a patient, choose the visit type and duration, and keep the schedule aligned automatically.
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - img
                  - text: Title
                - textbox
              - generic:
                - generic:
                  - img
                  - text: Patient
                - combobox [expanded]:
                  - generic: Select patient
                  - img
                - combobox
          - generic:
            - generic:
              - generic:
                - text: Type
                - combobox:
                  - generic: Consultation
                  - img
                - combobox
              - generic:
                - text: Duration
                - combobox:
                  - generic: Half Hour (30 min)
                  - img
                - combobox
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                    - text: Start
                  - textbox: 2026-07-27T10:00
                - generic:
                  - generic:
                    - img
                    - text: End
                  - textbox: 2026-07-27T10:30
              - generic:
                - generic:
                  - img
                  - text: Notes
                - textbox
        - generic:
          - button: Cancel
          - button [disabled]: Create
    - button:
      - img
      - generic: Close
  - listbox [ref=e2]:
    - option "123 123" [active] [ref=e3]:
      - generic [ref=e5]: 123 123
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
  27  |     await page.getByTestId(optionTestId).click();
  28  |   },
  29  | 
  30  |   // ── Navigate ──────────────────────────────────────────────────────────────
  31  | 
  32  |   async goToScheduler(page: Page): Promise<void> {
  33  |     await page.getByTestId('nav-scheduler').click();
  34  |     await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  35  |   },
  36  | 
  37  |   // ── Open booking dialog ────────────────────────────────────────────────────
  38  | 
  39  |   async openSlot(page: Page, slot?: Date): Promise<void> {
  40  |     const target = slot ?? nextWorkingSlot();
  41  |     const hour = target.getHours();
  42  | 
  43  |     // Click the correct hour cell in the scheduler grid
  44  |     await page
  45  |       .getByTestId(`time-slot-${hour}:00`)
  46  |       .first()
  47  |       .click();
  48  | 
  49  |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  50  |   },
  51  | 
  52  |   // ── Fill the booking form ─────────────────────────────────────────────────
  53  | 
  54  |   async fillBookingForm(page: Page, options: BookingOptions): Promise<void> {
  55  |     const dialog = page.getByTestId('booking-dialog');
  56  | 
  57  |     // Patient selection
  58  |     if (options.patientId) {
  59  |       await dialog.getByTestId('patient-select').click();
  60  |       await page
  61  |         .getByTestId(`patient-option-${options.patientId}`)
> 62  |         .click();
      |          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  63  |     } else if (options.newPatient) {
  64  |       await dialog.getByTestId('create-new-patient-btn').click();
  65  |       await this.fillNewPatientForm(page, options.newPatient);
  66  |     }
  67  | 
  68  |     // Appointment type
  69  |     await this.selectRadixOption(
  70  |       page,
  71  |       'appointment-type-select',
  72  |       `appointment-type-option-${options.type}`,
  73  |     );
  74  | 
  75  |     // Duration
  76  |     await this.selectRadixOption(
  77  |       page,
  78  |       'duration-select',
  79  |       `duration-option-${options.duration}`,
  80  |     );
  81  | 
  82  |     // Notes
  83  |     if (options.notes) {
  84  |       await dialog.getByTestId('appointment-notes').fill(options.notes);
  85  |     }
  86  | 
  87  |     // Google sync toggle
  88  |     if (options.syncToGoogle !== undefined) {
  89  |       const toggle = dialog.getByTestId('google-sync-toggle');
  90  |       const isChecked = await toggle.isChecked();
  91  |       if (isChecked !== options.syncToGoogle) await toggle.click();
  92  |     }
  93  |   },
  94  | 
  95  |   async fillNewPatientForm(
  96  |     page: Page,
  97  |     patient: BookingOptions['newPatient'] & object,
  98  |   ): Promise<void> {
  99  |     const panel = page.getByTestId('new-patient-panel');
  100 |     await expect(panel).toBeVisible();
  101 | 
  102 |     await panel.getByTestId('patient-first-name').fill(patient.firstName);
  103 |     await panel.getByTestId('patient-last-name').fill(patient.lastName);
  104 |     await panel.getByTestId('patient-email').fill(patient.email);
  105 |     await panel.getByTestId('patient-phone').fill(patient.phone);
  106 |     await panel.getByTestId('patient-dob').fill(patient.dateOfBirth);
  107 |   },
  108 | 
  109 |   // ── Submit ────────────────────────────────────────────────────────────────
  110 | 
  111 |   async submit(page: Page): Promise<void> {
  112 |     await page.getByTestId('booking-submit-btn').click();
  113 |     // Wait for dialog to close — this confirms success without arbitrary waits
  114 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible({
  115 |       timeout: 8_000,
  116 |     });
  117 |   },
  118 | 
  119 |   async submitAndExpectError(page: Page, errorTestId: string): Promise<void> {
  120 |     await page.getByTestId('booking-submit-btn').click();
  121 |     await expect(page.getByTestId(errorTestId)).toBeVisible();
  122 |     // Dialog must remain open on validation failure
  123 |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  124 |   },
  125 | 
  126 |   // ── Full booking flow (convenience) ──────────────────────────────────────
  127 | 
  128 |   async book(page: Page, options: BookingOptions): Promise<void> {
  129 |     await this.openSlot(page, options.slotDate);
  130 |     await this.fillBookingForm(page, options);
  131 |     await this.submit(page);
  132 |     // Toast confirmation
  133 |     await expect(page.getByTestId('toast-success')).toBeVisible();
  134 |   },
  135 | 
  136 |   // ── Status change ─────────────────────────────────────────────────────────
  137 | 
  138 |   async changeStatus(
  139 |     page: Page,
  140 |     appointmentTarget: string | Locator,
  141 |     newStatus: 'scheduled' | 'completed' | 'cancelled' | 'no-show',
  142 |   ): Promise<void> {
  143 |     if (typeof appointmentTarget === 'string') {
  144 |       await page.getByTestId(appointmentTarget).click();
  145 |     } else {
  146 |       await appointmentTarget.click();
  147 |     }
  148 | 
  149 |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  150 |     await this.selectRadixOption(
  151 |       page,
  152 |       'appointment-status-select',
  153 |       `appointment-status-option-${newStatus}`,
  154 |     );
  155 |     await page.getByTestId('booking-submit-btn').click();
  156 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  157 |   },
  158 | };
  159 | 
```