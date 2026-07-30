# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/critical-user-flows.spec.ts >> Critical User Flows >> backend API reflects create, edit, and delete when backend is available
- Location: tests/e2e/critical-user-flows.spec.ts:141:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Edited through backend path"
Received: "Persisted through backend"
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
                    - paragraph: "2"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Total Visits
                    - paragraph: "6"
                  - generic:
                    - img
              - generic:
                - generic:
                  - generic:
                    - paragraph: Visits This Month
                    - paragraph: "1"
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
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - generic: Backend Patient1785433461603
                                    - img
                                  - generic: Backend appointment 1785433461603
                                  - generic: Persisted through backend
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
  - dialog "Create Appointment" [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e6]:
        - img [ref=e8]
        - generic [ref=e11]:
          - heading "Create Appointment" [level=2] [ref=e12]
          - paragraph [ref=e13]: Book a patient, choose the visit type and duration, and keep the schedule aligned automatically.
      - generic [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]:
                - img [ref=e20]
                - text: Title
              - textbox "Title" [ref=e23]: Backend appointment 1785433461603
            - generic [ref=e24]:
              - generic [ref=e25]:
                - img [ref=e26]
                - text: Patient
              - combobox "Patient" [ref=e29] [cursor=pointer]:
                - generic: Backend Patient1785433461603
                - img [ref=e30]
              - combobox [ref=e32]
          - generic [ref=e34]:
            - generic [ref=e35]:
              - text: Type
              - combobox "Type" [ref=e36] [cursor=pointer]:
                - generic: Consultation
                - img [ref=e37]
              - combobox [ref=e39]
            - generic [ref=e40]:
              - text: Duration
              - combobox "Duration" [ref=e41] [cursor=pointer]:
                - generic: Half Hour (30 min)
                - img [ref=e42]
              - combobox [ref=e44]
          - generic [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - generic [ref=e49]:
                  - img [ref=e50]
                  - text: Start
                - textbox "Start" [ref=e52]: 2026-07-27T10:00
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - img [ref=e55]
                  - text: End
                - textbox "End" [ref=e58]: 2026-07-27T10:30
            - generic [ref=e59]:
              - generic [ref=e60]:
                - img [ref=e61]
                - text: Notes
              - textbox "Notes" [ref=e64]: Edited through backend path
        - generic [ref=e65]:
          - button "Cancel" [ref=e66] [cursor=pointer]
          - button "Create" [active] [ref=e67] [cursor=pointer]
    - button "Close" [ref=e68] [cursor=pointer]:
      - img [ref=e69]
      - generic [ref=e72]: Close
```

# Test source

```ts
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
  192 |       id: string;
  193 |       notes: string;
  194 |     }>;
  195 |     const edited = editedAppointments.find((appointment) => appointment.id === created?.id);
> 196 |     expect(edited?.notes).toBe('Edited through backend path');
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  197 | 
  198 |     await page.getByTestId('appointment-block').filter({ hasText: 'Backend Patient' }).first().click();
  199 |     await page.getByTestId('delete-appointment-btn').click();
  200 |     await page.getByTestId('confirm-delete-btn').click();
  201 | 
  202 |     const afterDeleteResponse = await fetch('http://127.0.0.1:3000/api/appointments');
  203 |     const afterDelete = await afterDeleteResponse.json() as Array<{ id: string }>;
  204 |     expect(afterDelete.some((appointment) => appointment.id === created?.id)).toBe(false);
  205 |   });
  206 | 
  207 |   test('editing an appointment into an overlapping time range is rejected', async ({
  208 |     pageWithPatients: page,
  209 |   }) => {
  210 |     await bookingHelper.goToScheduler(page);
  211 |     await bookingHelper.book(page, {
  212 |       patientId: PATIENTS.alice.id,
  213 |       type: 'consultation',
  214 |       duration: 30,
  215 |       slotDate: nextWorkingSlot(2, 10),
  216 |     });
  217 |     await bookingHelper.book(page, {
  218 |       patientId: PATIENTS.bob.id,
  219 |       type: 'procedure',
  220 |       duration: 60,
  221 |       slotDate: nextWorkingSlot(2, 11),
  222 |     });
  223 | 
  224 |     const before = await storageHelper.getAll(page, 'appointments') as Array<{
  225 |       id: string;
  226 |       patientId: string;
  227 |       startTime: string;
  228 |     }>;
  229 |     const aliceBefore = before.find((appointment) => appointment.patientId === PATIENTS.alice.id);
  230 | 
  231 |     await page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }).first().click();
  232 |     await bookingHelper.selectRadixOption(
  233 |       page,
  234 |       'duration-select',
  235 |       'duration-option-60',
  236 |     );
  237 |     await page.getByTestId('appointment-start-input').fill(toDateTimeLocal(nextWorkingSlot(2, 10, 30)));
  238 |     await page.getByTestId('booking-submit-btn').click();
  239 | 
  240 |     await expect(page.getByTestId('toast-error')).toBeVisible();
  241 |     await expect(page.getByText(/overlaps an existing appointment/i)).toBeVisible();
  242 |     await expect(page.getByTestId('booking-dialog')).toBeVisible();
  243 | 
  244 |     const after = await storageHelper.getAll(page, 'appointments') as Array<{
  245 |       id: string;
  246 |       startTime: string;
  247 |     }>;
  248 |     const aliceAfter = after.find((appointment) => appointment.id === aliceBefore?.id);
  249 |     expect(aliceAfter?.startTime).toBe(aliceBefore?.startTime);
  250 |   });
  251 | 
  252 |   test('settings persistence keeps locale, hours, slot interval, and working days after reload', async ({
  253 |     pageClean: page,
  254 |   }) => {
  255 |     await page.getByTestId('nav-settings').click();
  256 | 
  257 |     await bookingHelper.selectRadixOption(page, 'settings-locale-select', 'settings-locale-option-mk');
  258 |     await page.getByTestId('settings-start-time-input').fill('07:00');
  259 |     await page.getByTestId('settings-end-time-input').fill('16:00');
  260 |     await bookingHelper.selectRadixOption(
  261 |       page,
  262 |       'settings-slot-interval-select',
  263 |       'settings-slot-interval-option-60',
  264 |     );
  265 | 
  266 |     const saturdayToggle = page.getByTestId('working-day-toggle-sat');
  267 |     if ((await saturdayToggle.getAttribute('data-selected')) !== 'true') {
  268 |       await saturdayToggle.click();
  269 |     }
  270 | 
  271 |     await page.getByTestId('save-settings-btn').click();
  272 |     await expect(page.getByTestId('toast-success')).toBeVisible();
  273 | 
  274 |     await page.reload();
  275 |     await page.getByTestId('nav-settings').click();
  276 | 
  277 |     await expect(page.getByTestId('settings-start-time-input')).toHaveValue('07:00');
  278 |     await expect(page.getByTestId('settings-end-time-input')).toHaveValue('16:00');
  279 |     await expect(saturdayToggle).toHaveAttribute('data-selected', 'true');
  280 |     await expect(page.getByText('Поставки')).toBeVisible();
  281 | 
  282 |     await page.getByTestId('nav-scheduler').click();
  283 |     await expect(page.getByText('Неделен распоред')).toBeVisible();
  284 |     await expect(page.getByTestId('time-slot-7:00').first()).toBeVisible();
  285 |   });
  286 | 
  287 |   test('editing a patient updates linked appointment display name', async ({
  288 |     pageWithPatients: page,
  289 |   }) => {
  290 |     await bookingHelper.goToScheduler(page);
  291 |     await bookingHelper.book(page, {
  292 |       patientId: PATIENTS.alice.id,
  293 |       type: 'consultation',
  294 |       duration: 30,
  295 |       slotDate: nextWorkingSlot(2, 13),
  296 |     });
```