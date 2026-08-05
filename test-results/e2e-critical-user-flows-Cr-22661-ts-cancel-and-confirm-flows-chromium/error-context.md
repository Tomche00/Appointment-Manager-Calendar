# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/critical-user-flows.spec.ts >> Critical User Flows >> delete appointment supports cancel and confirm flows
- Location: tests/e2e/critical-user-flows.spec.ts:74:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('cancel-delete-btn')
    - locator resolved to <button type="button" data-testid="cancel-delete-btn" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-2 s…>Cancel</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-state="open" aria-hidden="true" data-aria-hidden="true" class="fixed inset-0 z-[2000] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div> intercepts pointer events
  18 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div data-state="open" aria-hidden="true" data-aria-hidden="true" class="fixed inset-0 z-[2000] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div> intercepts pointer events
  - retrying click action
    - waiting 500ms

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
              - paragraph: Менаџер за термини
        - navigation:
          - paragraph: Мени
          - generic:
            - button:
              - img
              - text: Контролна табла
            - button:
              - img
              - text: Пациенти
            - button:
              - img
              - text: Поставки
          - generic:
            - paragraph: Преглед
            - generic:
              - generic:
                - generic:
                  - generic:
                    - paragraph: Вкупно пациенти
                    - paragraph: "2"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Вкупно посети
                    - paragraph: "1"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Посети овој месец
                    - paragraph: "1"
                  - generic:
                    - img
        - generic:
          - generic:
            - paragraph: Самостоен • Флексибилен
            - paragraph: Податоците се локално зачувани
      - main:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - heading [level=2]: Неделен распоред
                - paragraph: "Работно време: 07:00 - 16:00"
              - generic:
                - button:
                  - img
                  - text: Google Календар
                - button:
                  - img
                  - text: Нов термин
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - button:
                        - img
                      - generic: 3 авг – 9 авг 2026
                      - button:
                        - img
                  - generic:
                    - button: Оваа недела
                    - button:
                      - img
                      - generic: Оди на датум
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - paragraph: "03"
                            - paragraph: Mon
                        - generic:
                          - generic:
                            - paragraph: "04"
                            - paragraph: Tue
                        - generic:
                          - generic:
                            - paragraph: "05"
                            - paragraph: Wed
                        - generic:
                          - generic:
                            - paragraph: "06"
                            - paragraph: Thu
                        - generic:
                          - generic:
                            - paragraph: "07"
                            - paragraph: Fri
                        - generic:
                          - generic:
                            - paragraph: "08"
                            - paragraph: Sat
                        - generic:
                          - generic:
                            - paragraph: "09"
                            - paragraph: Sun
                      - generic:
                        - generic:
                          - generic: 07:00
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - generic: Alice Thornton
                                    - img
                                  - generic: consultation 1785965902636
                        - generic:
                          - generic: 08:00
                        - generic:
                          - generic: 09:00
                        - generic:
                          - generic: 10:00
                        - generic:
                          - generic: 11:00
                        - generic:
                          - generic: 12:00
                        - generic:
                          - generic: 13:00
                        - generic:
                          - generic: 14:00
                        - generic:
                          - generic: 15:00
            - generic:
              - generic:
                - heading [level=3]: Appointment Types
              - generic:
                - generic:
                  - generic: Консултација
                  - generic: Контрола
                  - generic: Процедура
                  - generic: Google Календар
  - generic: Saved
  - dialog:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - img
            - generic:
              - heading [level=2]: Edit Appointment
              - paragraph: Book a patient, choose the visit type and duration, and keep the schedule aligned automatically.
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - img
                  - text: Title
                - textbox: consultation 1785965902636
              - generic:
                - generic:
                  - img
                  - text: Patient
                - combobox:
                  - generic: Alice Thornton
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
              - text: Status
              - combobox:
                - generic: Scheduled
                - img
              - combobox
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                    - text: Start
                  - textbox: 2026-08-03T09:00
                - generic:
                  - generic:
                    - img
                    - text: End
                  - textbox: 2026-08-03T09:30
              - generic:
                - generic:
                  - img
                  - text: Notes
                - textbox
        - generic:
          - button: Delete
          - button: Cancel
          - button: Save
    - button:
      - img
      - generic: Close
  - alertdialog "Delete appointment?" [ref=e3]:
    - generic [ref=e4]:
      - heading "Delete appointment?" [level=2] [ref=e5]
      - paragraph [ref=e6]: This action cannot be undone. The appointment will be removed from the schedule.
    - generic [ref=e7]:
      - button "Cancel" [active] [ref=e8] [cursor=pointer]
      - button "Delete" [ref=e9] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/base';
  2   | import { storageHelper } from '../utils/storageHelper';
  3   | import { bookingHelper } from '../utils/bookingHelper';
  4   | import { patientHelper } from '../utils/patientHelper';
  5   | import { PATIENTS, nextWorkingSlot } from '../test-data/seed';
  6   | 
  7   | function toDateTimeLocal(date: Date) {
  8   |   const pad = (value: number) => value.toString().padStart(2, '0');
  9   |   return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  10  | }
  11  | 
  12  | async function backendIsAvailable() {
  13  |   try {
  14  |     const response = await fetch('http://127.0.0.1:3000/api/health');
  15  |     return response.ok;
  16  |   } catch {
  17  |     return false;
  18  |   }
  19  | }
  20  | 
  21  | test.describe('Critical User Flows', () => {
  22  |   test('edit appointment updates title, type, duration, notes, and time', async ({
  23  |     pageWithPatients: page,
  24  |   }) => {
  25  |     const originalSlot = nextWorkingSlot(2, 10);
  26  |     const editedStart = nextWorkingSlot(2, 12);
  27  | 
  28  |     await bookingHelper.goToScheduler(page);
  29  |     await bookingHelper.book(page, {
  30  |       patientId: PATIENTS.alice.id,
  31  |       type: 'consultation',
  32  |       duration: 30,
  33  |       notes: 'Original booking note',
  34  |       slotDate: originalSlot,
  35  |     });
  36  | 
  37  |     await page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }).first().click();
  38  |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  39  | 
  40  |     await page.getByLabel('Title').fill('Edited follow-up visit');
  41  |     await bookingHelper.selectRadixOption(
  42  |       page,
  43  |       'appointment-type-select',
  44  |       'appointment-type-option-follow-up',
  45  |     );
  46  |     await bookingHelper.selectRadixOption(
  47  |       page,
  48  |       'duration-select',
  49  |       'duration-option-60',
  50  |     );
  51  |     await page.getByTestId('appointment-start-input').fill(toDateTimeLocal(editedStart));
  52  |     await page.getByTestId('appointment-notes').fill('Updated note after edit');
  53  |     await page.getByTestId('booking-submit-btn').click();
  54  |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  55  | 
  56  |     const appointments = await storageHelper.getAll(page, 'appointments') as Array<{
  57  |       title: string;
  58  |       type: string;
  59  |       duration: number;
  60  |       notes: string;
  61  |       startTime: string;
  62  |       patientId: string;
  63  |     }>;
  64  |     const edited = appointments.find((appointment) => appointment.patientId === PATIENTS.alice.id);
  65  | 
  66  |     expect(edited).toBeDefined();
  67  |     expect(edited?.title).toBe('Edited follow-up visit');
  68  |     expect(edited?.type).toBe('follow-up');
  69  |     expect(edited?.duration).toBe(60);
  70  |     expect(edited?.notes).toBe('Updated note after edit');
  71  |     expect(new Date(edited!.startTime).getHours()).toBe(12);
  72  |   });
  73  | 
  74  |   test('delete appointment supports cancel and confirm flows', async ({
  75  |     pageWithPatients: page,
  76  |   }) => {
  77  |     await bookingHelper.goToScheduler(page);
  78  |     await bookingHelper.book(page, {
  79  |       patientId: PATIENTS.alice.id,
  80  |       type: 'consultation',
  81  |       duration: 30,
  82  |       slotDate: nextWorkingSlot(2, 9),
  83  |     });
  84  | 
  85  |     const countBeforeDelete = await storageHelper.count(page, 'appointments');
  86  |     const appointmentBlock = page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }).first();
  87  | 
  88  |     await appointmentBlock.click();
  89  |     await page.getByTestId('delete-appointment-btn').click();
  90  |     await expect(page.getByTestId('delete-appointment-confirm-dialog')).toBeVisible();
> 91  |     await page.getByTestId('cancel-delete-btn').click();
      |                                                 ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  92  |     await expect(page.getByTestId('delete-appointment-confirm-dialog')).not.toBeVisible();
  93  |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  94  |     expect(await storageHelper.count(page, 'appointments')).toBe(countBeforeDelete);
  95  | 
  96  |     await page.getByTestId('delete-appointment-btn').click();
  97  |     await page.getByTestId('confirm-delete-btn').click();
  98  |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  99  |     await expect(appointmentBlock).not.toBeVisible();
  100 |     expect(await storageHelper.count(page, 'appointments')).toBe(countBeforeDelete - 1);
  101 |   });
  102 | 
  103 |   test('working day settings disable and re-enable weekend booking cells', async ({
  104 |     pageClean: page,
  105 |   }) => {
  106 |     await page.getByTestId('nav-settings').click();
  107 | 
  108 |     const saturdayToggle = page.getByTestId('working-day-toggle-sat');
  109 |     const sundayToggle = page.getByTestId('working-day-toggle-sun');
  110 | 
  111 |     if ((await saturdayToggle.getAttribute('data-selected')) === 'true') {
  112 |       await saturdayToggle.click();
  113 |     }
  114 |     if ((await sundayToggle.getAttribute('data-selected')) === 'true') {
  115 |       await sundayToggle.click();
  116 |     }
  117 | 
  118 |     await page.getByTestId('save-settings-btn').click();
  119 |     await expect(page.getByTestId('toast-success')).toBeVisible();
  120 | 
  121 |     await page.getByTestId('nav-scheduler').click();
  122 | 
  123 |     const saturdaySlot = page.locator('[data-slot-day="6"][data-slot-time="10:00"]').first();
  124 |     const sundaySlot = page.locator('[data-slot-day="0"][data-slot-time="10:00"]').first();
  125 | 
  126 |     await expect(saturdaySlot).toHaveAttribute('data-working-day', 'false');
  127 |     await expect(sundaySlot).toHaveAttribute('data-working-day', 'false');
  128 | 
  129 |     await saturdaySlot.click();
  130 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  131 | 
  132 |     await page.getByTestId('nav-settings').click();
  133 |     await saturdayToggle.click();
  134 |     await page.getByTestId('save-settings-btn').click();
  135 |     await expect(page.getByTestId('toast-success')).toBeVisible();
  136 |     await page.getByTestId('nav-scheduler').click();
  137 | 
  138 |     await expect(saturdaySlot).toHaveAttribute('data-working-day', 'true');
  139 |   });
  140 | 
  141 |   test('backend API reflects create, edit, and delete when backend is available', async ({
  142 |     page,
  143 |   }) => {
  144 |     test.skip(!(await backendIsAvailable()), 'Backend server is not available on port 3000.');
  145 | 
  146 |     const uniqueId = Date.now().toString();
  147 |     const createPatientResponse = await fetch('http://127.0.0.1:3000/api/patients', {
  148 |       method: 'POST',
  149 |       headers: { 'Content-Type': 'application/json' },
  150 |       body: JSON.stringify({
  151 |         firstName: 'Backend',
  152 |         lastName: `Patient${uniqueId}`,
  153 |         email: `backend.${uniqueId}@test.medical`,
  154 |         phone: `555-${uniqueId.slice(-4)}`,
  155 |         dateOfBirth: '1991-01-01',
  156 |         address: '',
  157 |         emergencyContact: '',
  158 |         notes: '',
  159 |       }),
  160 |     });
  161 |     expect(createPatientResponse.ok).toBe(true);
  162 |     const patient = await createPatientResponse.json() as { id: string };
  163 | 
  164 |     await page.goto('/');
  165 |     await bookingHelper.goToScheduler(page);
  166 |     await bookingHelper.openSlot(page, nextWorkingSlot(3, 10));
  167 |     await bookingHelper.fillBookingForm(page, {
  168 |       patientId: patient.id,
  169 |       type: 'consultation',
  170 |       duration: 30,
  171 |       notes: 'Persisted through backend',
  172 |     });
  173 |     await page.getByLabel('Title').fill(`Backend appointment ${uniqueId}`);
  174 |     await bookingHelper.submit(page);
  175 | 
  176 |     const createdAppointmentsResponse = await fetch('http://127.0.0.1:3000/api/appointments');
  177 |     const createdAppointments = await createdAppointmentsResponse.json() as Array<{
  178 |       id: string;
  179 |       patientId: string;
  180 |       title: string;
  181 |       notes: string;
  182 |     }>;
  183 |     const created = createdAppointments.find((appointment) => appointment.patientId === patient.id);
  184 |     expect(created).toBeDefined();
  185 | 
  186 |     await page.getByTestId('appointment-block').filter({ hasText: 'Backend Patient' }).first().click();
  187 |     await page.getByTestId('appointment-notes').fill('Edited through backend path');
  188 |     await page.getByTestId('booking-submit-btn').click();
  189 | 
  190 |     const editedAppointmentsResponse = await fetch('http://127.0.0.1:3000/api/appointments');
  191 |     const editedAppointments = await editedAppointmentsResponse.json() as Array<{
```