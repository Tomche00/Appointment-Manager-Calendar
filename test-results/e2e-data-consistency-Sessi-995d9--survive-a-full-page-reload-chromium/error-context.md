# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/data-consistency.spec.ts >> Session Persistence After Reload >> appointments survive a full page reload
- Location: tests/e2e/data-consistency.spec.ts:112:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 0
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
  32  | 
  33  |   test('appointment details shown in dialog match storage record', async ({
  34  |     pageWithPatients: page, booking, storage,
  35  |   }) => {
  36  |     const slot = nextWorkingSlot(1, 10);
  37  | 
  38  |     await booking.goToScheduler(page);
  39  |     await booking.book(page, {
  40  |       patientId: PATIENTS.alice.id,
  41  |       type: 'procedure',
  42  |       duration: 120,
  43  |       notes: 'Detailed consistency check note',
  44  |       slotDate: slot,
  45  |     });
  46  | 
  47  |     // Open the appointment detail dialog
  48  |     await page
  49  |       .getByTestId('appointment-block')
  50  |       .filter({ hasText: PATIENTS.alice.firstName })
  51  |       .click();
  52  | 
  53  |     await expect(page.getByTestId('appointment-detail-dialog')).toBeVisible();
  54  | 
  55  |     // Read what the UI shows
  56  |     const uiType = await page.getByTestId('detail-type').textContent();
  57  |     const uiDuration = await page.getByTestId('detail-duration').textContent();
  58  |     const uiNotes = await page.getByTestId('detail-notes').textContent();
  59  |     const uiPatient = await page.getByTestId('detail-patient-name').textContent();
  60  | 
  61  |     // Read what storage has
  62  |     const stored = await storage.getAll(page, 'appointments') as {
  63  |       type: string;
  64  |       duration: number;
  65  |       notes: string;
  66  |       patientId: string;
  67  |     }[];
  68  |     const record = stored[stored.length - 1];
  69  | 
  70  |     expect(uiType?.toLowerCase()).toContain(record.type);
  71  |     expect(uiDuration).toContain(String(record.duration));
  72  |     expect(uiNotes).toContain(record.notes);
  73  |     expect(uiPatient?.toLowerCase()).toContain(PATIENTS.alice.firstName.toLowerCase());
  74  |   });
  75  | 
  76  |   test('deleting an appointment removes it from both UI and storage', async ({
  77  |     pageWithPatients: page, booking, storage,
  78  |   }) => {
  79  |     await booking.goToScheduler(page);
  80  |     await booking.book(page, {
  81  |       patientId: PATIENTS.alice.id,
  82  |       type: 'consultation',
  83  |       duration: 30,
  84  |       slotDate: nextWorkingSlot(1, 10),
  85  |     });
  86  | 
  87  |     const countBefore = await storage.count(page, 'appointments');
  88  | 
  89  |     // Open detail dialog and delete
  90  |     await page
  91  |       .getByTestId('appointment-block')
  92  |       .filter({ hasText: PATIENTS.alice.firstName })
  93  |       .click();
  94  | 
  95  |     await page.getByTestId('delete-appointment-btn').click();
  96  |     await page.getByTestId('confirm-delete-btn').click(); // confirmation modal
  97  | 
  98  |     await test.step('Appointment block is removed from UI', async () => {
  99  |       await expect(
  100 |         page.getByTestId('appointment-block').filter({ hasText: PATIENTS.alice.firstName }),
  101 |       ).not.toBeVisible();
  102 |     });
  103 | 
  104 |     await test.step('Storage count decremented by 1', async () => {
  105 |       const countAfter = await storage.count(page, 'appointments');
  106 |       expect(countAfter).toBe(countBefore - 1);
  107 |     });
  108 |   });
  109 | });
  110 | 
  111 | test.describe('Session Persistence After Reload', () => {
  112 |   test('appointments survive a full page reload', async ({
  113 |     pageWithPatients: page, booking, storage,
  114 |   }) => {
  115 |     await booking.goToScheduler(page);
  116 |     await booking.book(page, {
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
> 132 |       expect(countAfterReload).toBe(countBeforeReload);
      |                                ^ Error: expect(received).toBe(expected) // Object.is equality
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
  217 |       ).toBeVisible({ timeout: 5_000 });
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
```