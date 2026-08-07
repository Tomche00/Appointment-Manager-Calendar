# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/critical-user-flows.spec.ts >> Critical User Flows >> editing an appointment into an overlapping time range is rejected
- Location: tests/e2e/critical-user-flows.spec.ts:207:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('toast-error')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('toast-error')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - button "Dashboard" [ref=e18] [cursor=pointer]:
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
                  - paragraph [ref=e39]: "2"
                - img [ref=e41]
              - generic [ref=e44]:
                - generic [ref=e45]:
                  - paragraph [ref=e46]: Visits This Month
                  - paragraph [ref=e47]: "2"
                - img [ref=e49]
        - generic [ref=e52]:
          - paragraph [ref=e53]: Standalone • Flexible
          - paragraph [ref=e54]: Data stored locally
      - main [ref=e55]:
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]:
              - generic [ref=e60]:
                - img [ref=e62]
                - heading "Weekly Schedule" [level=2] [ref=e64]
              - paragraph [ref=e65]: "Working hours: 08:00 - 18:00"
            - generic [ref=e66]:
              - button "Google Calendar" [ref=e67] [cursor=pointer]:
                - img
                - text: Google Calendar
              - button "New Appointment" [ref=e68] [cursor=pointer]:
                - img
                - text: New Appointment
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e73]:
                - button "Previous week" [ref=e74] [cursor=pointer]:
                  - img
                - generic [ref=e75]: 3 Aug – 9 Aug 2026
                - button "Next week" [ref=e76] [cursor=pointer]:
                  - img
              - generic [ref=e77]:
                - button "This week" [ref=e78] [cursor=pointer]
                - button "Jump to date" [ref=e79] [cursor=pointer]:
                  - img
                  - generic [ref=e80]: Jump to date
            - generic [ref=e83]:
              - generic [ref=e84]:
                - generic [ref=e87]:
                  - paragraph [ref=e88]: "03"
                  - paragraph [ref=e89]: Mon
                - generic [ref=e91]:
                  - paragraph [ref=e92]: "04"
                  - paragraph [ref=e93]: Tue
                - generic [ref=e95]:
                  - paragraph [ref=e96]: "05"
                  - paragraph [ref=e97]: Wed
                - generic [ref=e99]:
                  - paragraph [ref=e100]: "06"
                  - paragraph [ref=e101]: Thu
                - generic [ref=e103]:
                  - paragraph [ref=e104]: "07"
                  - paragraph [ref=e105]: Fri
                - generic [ref=e107]:
                  - paragraph [ref=e108]: "08"
                  - paragraph [ref=e109]: Sat
                - generic [ref=e111]:
                  - paragraph [ref=e112]: "09"
                  - paragraph [ref=e113]: Sun
              - generic [ref=e114]:
                - generic [ref=e116]: 08:00
                - generic "Bob Nguyen" [ref=e120] [cursor=pointer]:
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - generic [ref=e123]: Bob Nguyen
                      - img [ref=e124]
                    - generic [ref=e131]: procedure 1786090242085
                - generic [ref=e149]: 08:30
                - generic [ref=e165]: 09:00
                - generic [ref=e181]: 09:30
                - generic [ref=e197]: 10:00
                - generic [ref=e213]: 10:30
                - generic [ref=e229]: 11:00
                - generic [ref=e245]: 11:30
                - generic [ref=e261]: 12:00
                - generic [ref=e277]: 12:30
                - generic [ref=e293]: 13:00
                - generic [ref=e309]: 13:30
                - generic [ref=e325]: 14:00
                - generic [ref=e341]: 14:30
                - generic [ref=e357]: 15:00
                - generic [ref=e373]: 15:30
                - generic [ref=e389]: 16:00
                - generic [ref=e405]: 16:30
                - generic [ref=e421]: 17:00
                - generic [ref=e437]: 17:30
          - generic [ref=e452]:
            - heading "Appointment Types" [level=3] [ref=e454]
            - generic [ref=e456]:
              - generic [ref=e457]: Consultation
              - generic [ref=e459]: Follow-up
              - generic [ref=e461]: Procedure
              - generic [ref=e463]: Google Calendar
  - generic [ref=e465]: Saved
```

# Test source

```ts
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
  196 |     expect(edited?.notes).toBe('Edited through backend path');
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
> 240 |     await expect(page.getByTestId('toast-error')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
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
  297 | 
  298 |     await patientHelper.goToPatients(page);
  299 |     await page.getByTestId('patient-row').filter({ hasText: PATIENTS.alice.email }).click();
  300 |     await expect(page.getByTestId('patient-form-dialog')).toBeVisible();
  301 |     await page.getByTestId('patient-first-name').fill('Alicia');
  302 |     await page.getByTestId('patient-form-submit').click();
  303 |     await expect(page.getByTestId('patient-form-dialog')).not.toBeVisible();
  304 | 
  305 |     await bookingHelper.goToScheduler(page);
  306 |     await expect(
  307 |       page.getByTestId('appointment-block').filter({ hasText: 'Alicia Thornton' }).first(),
  308 |     ).toBeVisible();
  309 |   });
  310 | 
  311 |   test('closing an unsaved edit dialog discards changes and keeps stored data unchanged', async ({
  312 |     pageWithPatients: page,
  313 |   }) => {
  314 |     await bookingHelper.goToScheduler(page);
  315 |     await bookingHelper.book(page, {
  316 |       patientId: PATIENTS.alice.id,
  317 |       type: 'consultation',
  318 |       duration: 30,
  319 |       notes: 'Stable persisted note',
  320 |       slotDate: nextWorkingSlot(2, 15),
  321 |     });
  322 | 
  323 |     const before = await storageHelper.getAll(page, 'appointments') as Array<{
  324 |       id: string;
  325 |       patientId: string;
  326 |       title: string;
  327 |       notes: string;
  328 |     }>;
  329 |     const appointment = before.find((item) => item.patientId === PATIENTS.alice.id);
  330 | 
  331 |     await page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }).first().click();
  332 |     await page.getByLabel('Title').fill('Unsaved edit title');
  333 |     await page.getByTestId('appointment-notes').fill('Unsaved edit note');
  334 |     await page.getByRole('button', { name: 'Cancel' }).click();
  335 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  336 | 
  337 |     await page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }).first().click();
  338 |     await expect(page.getByLabel('Title')).not.toHaveValue('Unsaved edit title');
  339 |     await expect(page.getByTestId('appointment-notes')).not.toHaveValue('Unsaved edit note');
  340 | 
```