# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/data-consistency.spec.ts >> LocalStorage Failure Scenarios >> QuotaExceededError during booking shows user-friendly error
- Location: tests/e2e/data-consistency.spec.ts:198:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('toast-error').or(getByText(/storage.*full|unable.*save/i))
Expected: visible
Error: strict mode violation: getByTestId('toast-error').or(getByText(/storage.*full|unable.*save/i)) resolved to 2 elements:
    1) <li tabindex="0" data-state="open" data-testid="toast-error" data-swipe-direction="right" data-radix-collection-item="" class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-i…>…</li> aka getByTestId('toast-error')
    2) <div class="text-sm opacity-90">Unable to save because browser storage is full or…</div> aka getByText('Unable to save because')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('toast-error').or(getByText(/storage.*full|unable.*save/i))

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - list:
      - listitem [ref=e1]:
        - generic [ref=e2]:
          - generic [ref=e3]: Error
          - generic [ref=e4]: Unable to save because browser storage is full or unavailable.
        - button [ref=e5] [cursor=pointer]:
          - img [ref=e6]
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
                    - paragraph: "0"
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
            - generic: No appointments scheduled
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                  - heading [level=2]: Weekly Schedule
                - paragraph: "Working hours: 08:00 - 18:00"
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
                      - generic: 3 Aug – 9 Aug 2026
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
                          - generic: 08:00
                        - generic:
                          - generic: 08:30
                        - generic:
                          - generic: 09:00
                        - generic:
                          - generic: 09:30
                        - generic:
                          - generic: 10:00
                        - generic:
                          - generic: 10:30
                        - generic:
                          - generic: 11:00
                        - generic:
                          - generic: 11:30
                        - generic:
                          - generic: 12:00
                        - generic:
                          - generic: 12:30
                        - generic:
                          - generic: 13:00
                        - generic:
                          - generic: 13:30
                        - generic:
                          - generic: 14:00
                        - generic:
                          - generic: 14:30
                        - generic:
                          - generic: 15:00
                        - generic:
                          - generic: 15:30
                        - generic:
                          - generic: 16:00
                        - generic:
                          - generic: 16:30
                        - generic:
                          - generic: 17:00
                        - generic:
                          - generic: 17:30
            - generic:
              - generic:
                - heading [level=3]: Appointment Types
              - generic:
                - generic:
                  - generic: Consultation
                  - generic: Follow-up
                  - generic: Procedure
                  - generic: Google Calendar
  - dialog "Create Appointment" [ref=e10]:
    - generic [ref=e11]:
      - generic [ref=e14]:
        - img [ref=e16]
        - generic [ref=e19]:
          - heading "Create Appointment" [level=2] [ref=e20]
          - paragraph [ref=e21]: Book a patient, choose the visit type and duration, and keep the schedule aligned automatically.
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]:
                - img [ref=e28]
                - text: Title
              - textbox "Title" [ref=e31]: consultation 1786090264810
            - generic [ref=e32]:
              - generic [ref=e33]:
                - img [ref=e34]
                - text: Patient
              - combobox "Patient" [ref=e37] [cursor=pointer]:
                - generic: Alice Thornton
                - img [ref=e38]
              - combobox [ref=e40]
              - button "Add new patient" [ref=e41] [cursor=pointer]
          - generic [ref=e43]:
            - generic [ref=e44]:
              - text: Type
              - combobox "Type" [ref=e45] [cursor=pointer]:
                - generic: Consultation
                - img [ref=e46]
              - combobox [ref=e48]
            - generic [ref=e49]:
              - text: Duration
              - combobox "Duration" [ref=e50] [cursor=pointer]:
                - generic: Half Hour (30 min)
                - img [ref=e51]
              - combobox [ref=e53]
          - generic [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]:
                  - img [ref=e59]
                  - text: Start
                - textbox "Start" [ref=e61]: 2026-08-03T10:00
              - generic [ref=e62]:
                - generic [ref=e63]:
                  - img [ref=e64]
                  - text: End
                - textbox "End" [ref=e67]: 2026-08-03T10:30
            - generic [ref=e68]:
              - generic [ref=e69]:
                - img [ref=e70]
                - text: Notes
              - textbox "Notes" [ref=e73]
          - generic [ref=e75]:
            - checkbox "Sync to Google Calendar" [ref=e76]
            - generic [ref=e77]: Sync to Google Calendar
        - generic [ref=e78]:
          - button "Cancel" [ref=e79] [cursor=pointer]
          - button "Create" [ref=e80] [cursor=pointer]
    - button "Close" [ref=e81] [cursor=pointer]:
      - img [ref=e82]
      - generic [ref=e85]: Close
  - status: Notification ErrorUnable to save because browser storage is full or unavailable.
```

# Test source

```ts
  117 |       patientId: PATIENTS.alice.id,
  118 |       type: 'consultation',
  119 |       duration: 30,
  120 |       slotDate: nextWorkingSlot(1, 10),
  121 |     });
  122 | 
  123 |     const countBeforeReload = await storage.count(page, 'appointments');
  124 | 
  125 |     await test.step('Reload the page', async () => {
  126 |       await page.reload();
  127 |       await page.waitForLoadState('networkidle');
  128 |     });
  129 | 
  130 |     await test.step('Storage count unchanged after reload', async () => {
  131 |       const countAfterReload = await storage.count(page, 'appointments');
  132 |       expect(countAfterReload).toBe(countBeforeReload);
  133 |     });
  134 | 
  135 |     await test.step('Appointment block visible in scheduler after reload', async () => {
  136 |       await page.getByTestId('nav-scheduler').click();
  137 |       await expect(
  138 |         page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }),
  139 |       ).toBeVisible();
  140 |     });
  141 |   });
  142 | 
  143 |   test('patients survive a full page reload', async ({
  144 |     pageWithPatients: page,
  145 |   }) => {
  146 |     await page.reload();
  147 |     await page.waitForLoadState('networkidle');
  148 | 
  149 |     await page.getByTestId('nav-patients').click();
  150 | 
  151 |     const rows = page.getByTestId('patient-row');
  152 |     await expect(rows).toHaveCount(2); // Alice + Bob still present
  153 |   });
  154 | });
  155 | 
  156 | test.describe('LocalStorage Failure Scenarios', () => {
  157 |   test('corrupted appointments storage shows error state instead of crashing', async ({
  158 |     browser,
  159 |   }) => {
  160 |     const ctx = await browser.newContext();
  161 |     const page = await ctx.newPage();
  162 | 
  163 |     try {
  164 |       await page.goto('/');
  165 | 
  166 |       await test.step('Corrupt the appointments key', async () => {
  167 |         await storageHelper.corrupt(page, 'appointments');
  168 |       });
  169 | 
  170 |       await test.step('Reload — app should handle corruption gracefully', async () => {
  171 |         await page.reload();
  172 |         await page.waitForLoadState('networkidle');
  173 |       });
  174 | 
  175 |       await test.step('App renders without white-screening or JS exception', async () => {
  176 |         // No uncaught errors in the page
  177 |         const errors: string[] = [];
  178 |         page.on('pageerror', (err) => errors.push(err.message));
  179 | 
  180 |         await page.getByTestId('nav-scheduler').click();
  181 |         // If the scheduler loads (even empty), the app handled corruption gracefully
  182 |         await expect(page.getByTestId('scheduler-grid')).toBeVisible({ timeout: 5_000 });
  183 | 
  184 |         // Acceptable: error banner. Unacceptable: crash or blank page.
  185 |         expect(errors.filter((e) => e.includes('Cannot read'))).toHaveLength(0);
  186 |       });
  187 | 
  188 |       await test.step('Error banner or empty state shown (not silent)', async () => {
  189 |         const hasBanner = await page.getByTestId('storage-error-banner').isVisible();
  190 |         const hasEmptyState = await page.getByTestId('scheduler-empty-state').isVisible();
  191 |         expect(hasBanner || hasEmptyState).toBe(true);
  192 |       });
  193 |     } finally {
  194 |       await ctx.close();
  195 |     }
  196 |   });
  197 | 
  198 |   test('QuotaExceededError during booking shows user-friendly error', async ({
  199 |     pageWithPatients: page, booking,
  200 |   }) => {
  201 |     await booking.goToScheduler(page);
  202 |     await booking.openSlot(page, nextWorkingSlot(1, 10));
  203 |     await booking.fillBookingForm(page, {
  204 |       patientId: PATIENTS.alice.id,
  205 |       type: 'consultation',
  206 |       duration: 30,
  207 |     });
  208 | 
  209 |     await test.step('Simulate storage quota exceeded', async () => {
  210 |       await storageHelper.simulateQuotaExceeded(page);
  211 |     });
  212 | 
  213 |     await test.step('Submit fails with a storage error message (not a generic crash)', async () => {
  214 |       await page.getByTestId('booking-submit-btn').click();
  215 |       await expect(
  216 |         page.getByTestId('toast-error').or(page.getByText(/storage.*full|unable.*save/i)),
> 217 |       ).toBeVisible({ timeout: 5_000 });
      |         ^ Error: expect(locator).toBeVisible() failed
  218 |       // Dialog remains open — user can copy their data
  219 |       await expect(page.getByTestId('booking-dialog')).toBeVisible();
  220 |     });
  221 |   });
  222 | });
  223 | 
  224 | test.describe('Timezone & Date Edge Cases', () => {
  225 |   test('appointment created near midnight displays on the correct calendar day', async ({
  226 |     pageWithPatients: page, booking, storage,
  227 |   }) => {
  228 |     // Use 23:30 slot on a working day
  229 |     const lateSlot = nextWorkingSlot(1, 23, 30);
  230 | 
  231 |     await booking.goToScheduler(page);
  232 |     await booking.book(page, {
  233 |       patientId: PATIENTS.alice.id,
  234 |       type: 'consultation',
  235 |       duration: 30,
  236 |       slotDate: lateSlot,
  237 |     });
  238 | 
  239 |     const appointments = await storage.getAll(page, 'appointments') as {
  240 |       startTime: string;
  241 |       endTime: string;
  242 |     }[];
  243 | 
  244 |     const appt = appointments[appointments.length - 1];
  245 |     const startDate = new Date(appt.startTime);
  246 |     const endDate = new Date(appt.endTime);
  247 | 
  248 |     // Duration of 30 min starting at 23:30 ends at 00:00 next day — handle correctly
  249 |     expect(startDate.getHours()).toBe(23);
  250 |     expect(startDate.getMinutes()).toBe(30);
  251 |     // End time must be correctly calculated (not negative duration)
  252 |     expect(endDate.getTime()).toBeGreaterThan(startDate.getTime());
  253 |   });
  254 | 
  255 |   test('appointment time stored in ISO 8601 format', async ({
  256 |     pageWithPatients: page, booking, storage,
  257 |   }) => {
  258 |     await booking.goToScheduler(page);
  259 |     await booking.book(page, {
  260 |       patientId: PATIENTS.alice.id,
  261 |       type: 'consultation',
  262 |       duration: 30,
  263 |       slotDate: nextWorkingSlot(1, 10),
  264 |     });
  265 | 
  266 |     const appointments = await storage.getAll(page, 'appointments') as { startTime: string }[];
  267 |     const { startTime } = appointments[appointments.length - 1];
  268 | 
  269 |     // ISO 8601: "2025-03-10T10:00:00.000Z" or with offset
  270 |     expect(startTime).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  271 |   });
  272 | });
  273 | 
```