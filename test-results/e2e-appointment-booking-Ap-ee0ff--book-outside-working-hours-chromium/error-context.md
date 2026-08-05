# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/appointment-booking.spec.ts >> Appointment Booking — Validation >> cannot book outside working hours
- Location: tests/e2e/appointment-booking.spec.ts:96:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
          - paragraph [ref=e14]: Менаџер за термини
      - navigation [ref=e15]:
        - paragraph [ref=e16]: Мени
        - generic [ref=e17]:
          - button "Контролна табла" [active] [ref=e18] [cursor=pointer]:
            - img
            - text: Контролна табла
          - button "Пациенти" [ref=e19] [cursor=pointer]:
            - img
            - text: Пациенти
          - button "Поставки" [ref=e20] [cursor=pointer]:
            - img
            - text: Поставки
        - generic [ref=e21]:
          - paragraph [ref=e22]: Преглед
          - generic [ref=e23]:
            - generic [ref=e25]:
              - generic [ref=e26]:
                - paragraph [ref=e27]: Вкупно пациенти
                - paragraph [ref=e28]: "2"
              - img [ref=e30]
            - generic [ref=e36]:
              - generic [ref=e37]:
                - paragraph [ref=e38]: Вкупно посети
                - paragraph [ref=e39]: "0"
              - img [ref=e41]
            - generic [ref=e44]:
              - generic [ref=e45]:
                - paragraph [ref=e46]: Посети овој месец
                - paragraph [ref=e47]: "0"
              - img [ref=e49]
      - generic [ref=e52]:
        - paragraph [ref=e53]: Самостоен • Флексибилен
        - paragraph [ref=e54]: Податоците се локално зачувани
    - main [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]: Нема закажани термини
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - img [ref=e63]
              - heading "Неделен распоред" [level=2] [ref=e65]
            - paragraph [ref=e66]: "Работно време: 07:00 - 16:00"
          - generic [ref=e67]:
            - button "Google Календар" [ref=e68] [cursor=pointer]:
              - img
              - text: Google Календар
            - button "Нов термин" [ref=e69] [cursor=pointer]:
              - img
              - text: Нов термин
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e74]:
              - button "Претходна недела" [ref=e75] [cursor=pointer]:
                - img
              - generic [ref=e76]: 3 авг – 9 авг 2026
              - button "Следна недела" [ref=e77] [cursor=pointer]:
                - img
            - generic [ref=e78]:
              - button "Оваа недела" [ref=e79] [cursor=pointer]
              - button "Оди на датум" [ref=e80] [cursor=pointer]:
                - img
                - generic [ref=e81]: Оди на датум
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
              - generic [ref=e117]: 07:00
              - generic [ref=e136]: 08:00
              - generic [ref=e152]: 09:00
              - generic [ref=e168]: 10:00
              - generic [ref=e184]: 11:00
              - generic [ref=e200]: 12:00
              - generic [ref=e216]: 13:00
              - generic [ref=e232]: 14:00
              - generic [ref=e248]: 15:00
        - generic [ref=e263]:
          - heading "Appointment Types" [level=3] [ref=e265]
          - generic [ref=e267]:
            - generic [ref=e268]: Консултација
            - generic [ref=e270]: Контрола
            - generic [ref=e272]: Процедура
            - generic [ref=e274]: Google Календар
```

# Test source

```ts
  30  |     });
  31  | 
  32  |     await test.step('Verify appointment appears in scheduler UI', async () => {
  33  |       const slot = page.getByTestId('appointment-block').filter({
  34  |         hasText: `${PATIENTS.alice.firstName} ${PATIENTS.alice.lastName}`,
  35  |       });
  36  |       await expect(slot).toBeVisible();
  37  |     });
  38  | 
  39  |     await test.step('Verify appointment persisted to LocalStorage', async () => {
  40  |       await storage.assertAppointmentExistsInStorage(page, {
  41  |         patientId: PATIENTS.alice.id,
  42  |         type: APPOINTMENTS.consultation.type,
  43  |       });
  44  |     });
  45  |   });
  46  | 
  47  |   test('appointment count in LocalStorage increments by exactly 1 after booking', async ({
  48  |     pageWithPatients: page, booking, storage,
  49  |   }) => {
  50  |     const countBefore = await storage.count(page, 'appointments');
  51  | 
  52  |     await booking.goToScheduler(page);
  53  |     await booking.book(page, {
  54  |       patientId: PATIENTS.alice.id,
  55  |       type: 'consultation',
  56  |       duration: 30,
  57  |     });
  58  | 
  59  |     const countAfter = await storage.count(page, 'appointments');
  60  |     expect(countAfter).toBe(countBefore + 1);
  61  |   });
  62  | });
  63  | 
  64  | test.describe('Appointment Booking — Validation', () => {
  65  |   test('submit with no patient selected shows validation error', async ({
  66  |     pageWithPatients: page, booking,
  67  |   }) => {
  68  |     await booking.goToScheduler(page);
  69  |     await booking.openSlot(page);
  70  | 
  71  |     await test.step('Submit empty form', async () => {
  72  |       await booking.submitAndExpectError(page, 'error-patient-required');
  73  |     });
  74  | 
  75  |     await test.step('Dialog stays open — no partial save', async () => {
  76  |       await expect(page.getByTestId('booking-dialog')).toBeVisible();
  77  |     });
  78  |   });
  79  | 
  80  |   test('submit with invalid notes length shows character-limit error', async ({
  81  |     pageWithPatients: page, booking,
  82  |   }) => {
  83  |     await booking.goToScheduler(page);
  84  |     await booking.openSlot(page);
  85  | 
  86  |     await booking.fillBookingForm(page, {
  87  |       patientId: PATIENTS.alice.id,
  88  |       type: 'consultation',
  89  |       duration: 30,
  90  |       notes: 'x'.repeat(1001), // exceeds reasonable 1000-char limit
  91  |     });
  92  | 
  93  |     await booking.submitAndExpectError(page, 'error-notes-too-long');
  94  |   });
  95  | 
  96  |   test('cannot book outside working hours', async ({
  97  |     pageWithPatients: page,
  98  |   }) => {
  99  |     await test.step('Navigate to scheduler', async () => {
  100 |       await page.getByTestId('nav-scheduler').click();
  101 |     });
  102 | 
  103 |     await test.step('Attempt to click a slot before working hours start', async () => {
  104 |       const earlyLabel = `${WORKING_HOURS.start - 1}:00`;
  105 |       // Log all slots with this time to help diagnose why some appear enabled.
  106 |       const allSlots = page.locator(`[data-slot-time="${earlyLabel}"]`);
  107 |       const total = await allSlots.count();
  108 |       for (let i = 0; i < total; i++) {
  109 |         const s = allSlots.nth(i);
  110 |         const day = await s.getAttribute('data-slot-day');
  111 |         const dataWorking = await s.getAttribute('data-working-day');
  112 |         const aria = await s.getAttribute('aria-disabled');
  113 |         const cls = (await s.getAttribute('class')) || '';
  114 |         // eslint-disable-next-line no-console
  115 |         console.log('slot-inspect', { index: i, day, dataWorking, aria, cls });
  116 |       }
  117 | 
  118 |       const earlySlot = page.getByTestId(`time-slot-${earlyLabel}`);
  119 | 
  120 |       // If rendered, it should be disabled; if not rendered, it shouldn't be clickable
  121 |       const isVisible = await earlySlot.isVisible();
  122 |       if (isVisible) {
  123 |         // Accept several possible indicators that a slot is disabled: explicit
  124 |         // `aria-disabled`, `data-working-day="false"`, or a disabled CSS
  125 |         // class. This makes the test resilient to implementation changes.
  126 |         const aria = await earlySlot.getAttribute('aria-disabled');
  127 |         const dataWorking = await earlySlot.getAttribute('data-working-day');
  128 |         const cls = (await earlySlot.getAttribute('class')) || '';
  129 |         const disabled = aria === 'true' || dataWorking === 'false' || cls.includes('cursor-not-allowed');
> 130 |         expect(disabled).toBe(true);
      |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  131 |       } else {
  132 |         // Slot not rendered at all = correct behaviour
  133 |         expect(isVisible).toBe(false);
  134 |       }
  135 |     });
  136 |   });
  137 | });
  138 | 
  139 | test.describe('Appointment Booking — Status Lifecycle', () => {
  140 |   // Seed one appointment, then cycle through all statuses
  141 |   test('appointment transitions: scheduled → completed → cancelled → no-show', async ({
  142 |     pageWithPatients: page, booking, storage,
  143 |   }) => {
  144 |     // Arrange: book appointment first
  145 |     await booking.goToScheduler(page);
  146 |     await booking.book(page, {
  147 |       patientId: PATIENTS.alice.id,
  148 |       type: 'consultation',
  149 |       duration: 30,
  150 |     });
  151 | 
  152 |     const statuses = ['completed', 'cancelled', 'no-show', 'scheduled'] as const;
  153 | 
  154 |     for (const status of statuses) {
  155 |       await test.step(`Set status to "${status}"`, async () => {
  156 |         const appointmentBlock = page
  157 |           .getByTestId('appointment-block')
  158 |           .filter({ hasText: PATIENTS.alice.firstName })
  159 |           .first();
  160 | 
  161 |         await booking.changeStatus(page, appointmentBlock, status);
  162 | 
  163 |         // Verify CSS class reflects the new status (colour coding)
  164 |         await expect(appointmentBlock).toHaveAttribute('data-status', status);
  165 | 
  166 |         // Cross-check with storage
  167 |         const appointments = await storage.getAll(page, 'appointments') as { status: string }[];
  168 |         const latest = appointments[appointments.length - 1];
  169 |         expect(latest.status).toBe(status);
  170 |       });
  171 |     }
  172 |   });
  173 | });
  174 | 
  175 | test.describe('Appointment Booking — Refresh Resilience', () => {
  176 |   test('booking dialog dismissed on page refresh — no orphaned appointment', async ({
  177 |     pageWithPatients: page, booking, storage,
  178 |   }) => {
  179 |     const countBefore = await storage.count(page, 'appointments');
  180 | 
  181 |     await booking.goToScheduler(page);
  182 |     await booking.openSlot(page);
  183 | 
  184 |     await test.step('Partially fill form (do NOT submit)', async () => {
  185 |       await booking.fillBookingForm(page, {
  186 |         patientId: PATIENTS.alice.id,
  187 |         type: 'consultation',
  188 |         duration: 30,
  189 |       });
  190 |     });
  191 | 
  192 |     await test.step('Refresh before submitting', async () => {
  193 |       await page.reload();
  194 |       await page.waitForLoadState('networkidle');
  195 |     });
  196 | 
  197 |     await test.step('Dialog is gone, storage count unchanged', async () => {
  198 |       await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  199 |       const countAfter = await storage.count(page, 'appointments');
  200 |       expect(countAfter).toBe(countBefore);
  201 |     });
  202 |   });
  203 | });
  204 | 
```