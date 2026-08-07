# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/critical-user-flows.spec.ts >> Critical User Flows >> settings persistence keeps locale, hours, slot interval, and working days after reload
- Location: tests/e2e/critical-user-flows.spec.ts:252:3

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByTestId('settings-start-time-input')
Expected: "07:00"
Received: "08:00"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByTestId('settings-start-time-input')
    9 × locator resolved to <input type="time" value="08:00" id="startTime" data-testid="settings-start-time-input" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
      - unexpected value "08:00"

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
          - button "Dashboard" [ref=e18] [cursor=pointer]:
            - img
            - text: Dashboard
          - button "Patients" [ref=e19] [cursor=pointer]:
            - img
            - text: Patients
          - button "Settings" [active] [ref=e20] [cursor=pointer]:
            - img
            - text: Settings
        - generic [ref=e21]:
          - paragraph [ref=e22]: Snapshot
          - generic [ref=e23]:
            - generic [ref=e25]:
              - generic [ref=e26]:
                - paragraph [ref=e27]: Total Patients
                - paragraph [ref=e28]: "0"
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
        - generic [ref=e58]:
          - generic [ref=e59]:
            - img [ref=e61]
            - heading "Settings" [level=2] [ref=e64]
          - paragraph [ref=e65]: Configure your appointment system
        - generic [ref=e66]:
          - tablist [ref=e67]:
            - tab "General Settings" [selected] [ref=e68] [cursor=pointer]:
              - img [ref=e69]
              - text: General Settings
            - tab "Integration" [ref=e72] [cursor=pointer]:
              - img [ref=e73]
              - text: Integration
            - tab "Data Management" [ref=e75] [cursor=pointer]:
              - img [ref=e76]
              - text: Data Management
            - tab "API Health" [ref=e80] [cursor=pointer]:
              - img [ref=e81]
              - text: API Health
          - tabpanel "General Settings" [ref=e83]:
            - generic [ref=e84]:
              - heading "Language" [level=3] [ref=e86]:
                - img [ref=e87]
                - text: Language
              - generic [ref=e90]:
                - text: Language
                - combobox [ref=e91] [cursor=pointer]:
                  - generic: English
                  - img [ref=e92]
                - paragraph [ref=e94]: Interface language (saved with your settings).
            - generic [ref=e95]:
              - heading "Working Hours" [level=3] [ref=e97]:
                - img [ref=e98]
                - text: Working Hours
              - generic [ref=e101]:
                - generic [ref=e102]:
                  - text: settings.practiceName
                  - textbox "settings.practiceName" [ref=e103]:
                    - /placeholder: Clinic name
                - generic [ref=e104]:
                  - generic [ref=e105]:
                    - text: Start Time
                    - textbox "Start Time" [ref=e106]: 08:00
                  - generic [ref=e107]:
                    - text: End Time
                    - textbox "End Time" [ref=e108]: 18:00
                - generic [ref=e109]:
                  - generic [ref=e110]:
                    - text: Break Time (minutes)
                    - spinbutton "Break Time (minutes)" [ref=e111]: "10"
                  - generic [ref=e112]:
                    - text: Time Slot Interval
                    - combobox [ref=e113] [cursor=pointer]:
                      - generic: 30 minutes
                      - img [ref=e114]
            - generic [ref=e116]:
              - heading "Working Days" [level=3] [ref=e118]:
                - img [ref=e119]
                - text: Working Days
              - generic [ref=e122]:
                - generic [ref=e124] [cursor=pointer]: Sun
                - generic [ref=e126] [cursor=pointer]: Mon
                - generic [ref=e128] [cursor=pointer]: Tue
                - generic [ref=e130] [cursor=pointer]: Wed
                - generic [ref=e132] [cursor=pointer]: Thu
                - generic [ref=e134] [cursor=pointer]: Fri
                - generic [ref=e136] [cursor=pointer]: Sat
            - generic [ref=e137]:
              - heading "Appointment Duration Types" [level=3] [ref=e139]
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - generic [ref=e142]:
                    - generic [ref=e143]: Half Hour
                    - generic [ref=e144]: 30 minutes
                  - generic [ref=e145]: 30min
                - generic [ref=e146]:
                  - generic [ref=e147]:
                    - generic [ref=e148]: Full Hour
                    - generic [ref=e149]: 60 minutes
                  - generic [ref=e150]: 60min
                - generic [ref=e151]:
                  - generic [ref=e152]:
                    - generic [ref=e153]: Double Hour
                    - generic [ref=e154]: 120 minutes
                  - generic [ref=e155]: 120min
          - button "Save Settings" [ref=e156] [cursor=pointer]:
            - img
            - text: Save Settings
```

# Test source

```ts
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
> 277 |     await expect(page.getByTestId('settings-start-time-input')).toHaveValue('07:00');
      |                                                                 ^ Error: expect(locator).toHaveValue(expected) failed
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
  341 |     const after = await storageHelper.getAll(page, 'appointments') as Array<{
  342 |       id: string;
  343 |       title: string;
  344 |       notes: string;
  345 |     }>;
  346 |     const afterRecord = after.find((item) => item.id === appointment?.id);
  347 |     expect(afterRecord?.title).toBe(appointment?.title);
  348 |     expect(afterRecord?.notes).toBe(appointment?.notes);
  349 |   });
  350 | });
  351 | 
```