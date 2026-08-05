# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/appointment-booking.spec.ts >> Appointment Booking — Validation >> cannot book outside working hours
- Location: tests/e2e/appointment-booking.spec.ts:96:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByTestId('nav-scheduler')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: "[plugin:vite:react-swc] × Expression expected ╭─[/home/tomche/Appointment-Manager-Calendar/src/components/dashboard/WeeklyScheduler.tsx:580:1] 577 │ const endHourLocal = parseInt(settings.endTime?.split(':')[0] ?? '18'); 578 │ const isWithinHours = Number.isFinite(hourFromLabel) && hourFromLabel >= startHourLocal && hourFromLabel < endHourLocal; 579 │ const isEnabled = Boolean(start && end && onClick && isWorkingDay(start) && isWithinHours); 580 │ *** End Patch · ── 581 │ // Debugging: log slot calculation values during tests to help 582 │ // diagnose flaky working-hours detection. 583 │ try { ╰──── × Expression expected ╭─[/home/tomche/Appointment-Manager-Calendar/src/components/dashboard/WeeklyScheduler.tsx:580:1] 577 │ const endHourLocal = parseInt(settings.endTime?.split(':')[0] ?? '18'); 578 │ const isWithinHours = Number.isFinite(hourFromLabel) && hourFromLabel >= startHourLocal && hourFromLabel < endHourLocal; 579 │ const isEnabled = Boolean(start && end && onClick && isWorkingDay(start) && isWithinHours); 580 │ *** End Patch · ─ 581 │ // Debugging: log slot calculation values during tests to help 582 │ // diagnose flaky working-hours detection. 583 │ try { ╰──── × Expected '</', got 'ident' ╭─[/home/tomche/Appointment-Manager-Calendar/src/components/dashboard/WeeklyScheduler.tsx:580:1] 577 │ const endHourLocal = parseInt(settings.endTime?.split(':')[0] ?? '18'); 578 │ const isWithinHours = Number.isFinite(hourFromLabel) && hourFromLabel >= startHourLocal && hourFromLabel < endHourLocal; 579 │ const isEnabled = Boolean(start && end && onClick && isWorkingDay(start) && isWithinHours); 580 │ *** End Patch · ───── 581 │ // Debugging: log slot calculation values during tests to help 582 │ // diagnose flaky working-hours detection. 583 │ try { ╰──── Caused by: Syntax Error"
  - generic [ref=e5]: /home/tomche/Appointment-Manager-Calendar/src/components/dashboard/WeeklyScheduler.tsx
  - generic [ref=e6]:
    - text: Click outside, press Esc key, or fix the code to dismiss.
    - text: You can also disable this overlay by setting
    - code [ref=e7]: server.hmr.overlay
    - text: to
    - code [ref=e8]: "false"
    - text: in
    - code [ref=e9]: vite.config.ts
    - text: .
```

# Test source

```ts
  1   | // tests/e2e/appointment-booking.spec.ts
  2   | // Critical path: booking an appointment end-to-end.
  3   | // Also covers: validation, out-of-hours, storage consistency.
  4   | 
  5   | import { test, expect } from '../fixtures/base';
  6   | import { PATIENTS, APPOINTMENTS, nextWorkingSlot, WORKING_HOURS } from '../test-data/seed';
  7   | 
  8   | test.describe('Appointment Booking — Core Flow', () => {
  9   |   test('books a consultation with an existing patient and persists to storage', async ({
  10  |     pageWithPatients: page, booking, storage,
  11  |   }) => {
  12  |     await test.step('Navigate to scheduler', async () => {
  13  |       await booking.goToScheduler(page);
  14  |     });
  15  | 
  16  |     await test.step('Open a time slot and fill form', async () => {
  17  |       await booking.openSlot(page, nextWorkingSlot(1, 10));
  18  |       await booking.fillBookingForm(page, {
  19  |         patientId: PATIENTS.alice.id,
  20  |         type: APPOINTMENTS.consultation.type,
  21  |         duration: APPOINTMENTS.consultation.duration,
  22  |         notes: APPOINTMENTS.consultation.notes,
  23  |         syncToGoogle: false,
  24  |       });
  25  |     });
  26  | 
  27  |     await test.step('Submit and confirm toast', async () => {
  28  |       await booking.submit(page);
  29  |       await expect(page.getByTestId('toast-success')).toBeVisible();
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
> 100 |       await page.getByTestId('nav-scheduler').click();
      |                                               ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
  130 |         expect(disabled).toBe(true);
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
```