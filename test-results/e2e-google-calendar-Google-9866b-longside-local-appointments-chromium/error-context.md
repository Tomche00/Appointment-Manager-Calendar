# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/google-calendar.spec.ts >> Google Calendar — Happy Path >> syncing displays Google Calendar events alongside local appointments
- Location: tests/e2e/google-calendar.spec.ts:16:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('gcal-event-block').filter({ hasText: 'External Meeting' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('gcal-event-block').filter({ hasText: 'External Meeting' })

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
          - button "Контролна табла" [ref=e18] [cursor=pointer]:
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
            - button "Google Календар" [active] [ref=e68] [cursor=pointer]:
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
        - generic [ref=e264]:
          - heading "Интеграција со Google Календар Не е поврзано" [level=3] [ref=e266]:
            - img [ref=e267]
            - text: Интеграција со Google Календар
            - generic [ref=e269]:
              - img [ref=e270]
              - text: Не е поврзано
          - generic [ref=e275]:
            - generic [ref=e276]:
              - heading "Инструкции за поставување:" [level=4] [ref=e277]
              - list [ref=e278]:
                - listitem [ref=e279]:
                  - text: Одете на
                  - link "Google Cloud Console" [ref=e280] [cursor=pointer]:
                    - /url: https://console.cloud.google.com/
                    - text: Google Cloud Console
                    - img [ref=e281]
                - listitem [ref=e285]: Креирајте нов проект или изберете постоечки
                - listitem [ref=e286]: Овозможете го Google Calendar API
                - listitem [ref=e287]: Креирајте OAuth 2.0 акредитиви
                - listitem [ref=e288]: Додајте http://localhost:3000/api/google/callback како redirect URI
                - listitem [ref=e289]: Копирајте го Client ID и Client Secret подолу
            - generic [ref=e290]:
              - generic [ref=e291]:
                - text: Google Client ID
                - textbox "Google Client ID" [ref=e292]:
                  - /placeholder: xxx.apps.googleusercontent.com
              - generic [ref=e293]:
                - text: Google Client Secret
                - textbox "Google Client Secret" [ref=e294]:
                  - /placeholder: GOCSPX-xxx
            - button "Поврзи со Google Календар" [ref=e295] [cursor=pointer]
        - generic [ref=e296]: Не успеа синхронизацијата со Google Календар
        - generic [ref=e297]:
          - heading "Appointment Types" [level=3] [ref=e299]
          - generic [ref=e301]:
            - generic [ref=e302]: Консултација
            - generic [ref=e304]: Контрола
            - generic [ref=e306]: Процедура
            - generic [ref=e308]: Google Календар
```

# Test source

```ts
  1   | // tests/e2e/google-calendar.spec.ts
  2   | // Tests Google Calendar integration with mocked backend responses.
  3   | // All external HTTP is intercepted — no real Google API calls.
  4   | 
  5   | import { test, expect } from '../fixtures/base';
  6   | import { storageHelper } from '../utils/storageHelper';
  7   | import { bookingHelper } from '../utils/bookingHelper';
  8   | import { apiMockHelper } from '../utils/apiMockHelper';
  9   | import {
  10  |   PATIENTS,
  11  |   MOCK_GOOGLE_CALENDAR_RESPONSE,
  12  |   nextWorkingSlot,
  13  | } from '../test-data/seed';
  14  | 
  15  | test.describe('Google Calendar — Happy Path', () => {
  16  |   test('syncing displays Google Calendar events alongside local appointments', async ({
  17  |     pageWithGoogleMock: page,
  18  |   }) => {
  19  |     await test.step('Navigate to scheduler', async () => {
  20  |       await page.getByTestId('nav-scheduler').click();
  21  |       await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  22  |     });
  23  | 
  24  |     await test.step('Trigger Google Calendar sync', async () => {
  25  |       await page.getByTestId('sync-google-btn').click();
  26  |     });
  27  | 
  28  |     await test.step('Google Calendar event block appears in scheduler', async () => {
  29  |       const gcalEvent = MOCK_GOOGLE_CALENDAR_RESPONSE.items[0];
  30  |       const block = page
  31  |         .getByTestId('gcal-event-block')
  32  |         .filter({ hasText: gcalEvent.summary });
> 33  |       await expect(block).toBeVisible({ timeout: 5_000 });
      |                           ^ Error: expect(locator).toBeVisible() failed
  34  |     });
  35  | 
  36  |     await test.step('Google event block has correct visual differentiation', async () => {
  37  |       // Google events must be visually distinct (data-source="google" attribute)
  38  |       await expect(
  39  |         page.getByTestId('gcal-event-block').first(),
  40  |       ).toHaveAttribute('data-source', 'google');
  41  |     });
  42  |   });
  43  | 
  44  |   test('booking with "Sync to Google Calendar" sends POST to backend', async ({
  45  |     pageWithGoogleMock: page,
  46  |   }) => {
  47  |     const captured = apiMockHelper.interceptRequests(
  48  |       page,
  49  |       'http://localhost:3001/api/calendar/events',
  50  |     );
  51  | 
  52  |     await bookingHelper.goToScheduler(page);
  53  |     await bookingHelper.book(page, {
  54  |       patientId: PATIENTS.alice.id,
  55  |       type: 'consultation',
  56  |       duration: 30,
  57  |       syncToGoogle: true,
  58  |       slotDate: nextWorkingSlot(1, 11),
  59  |     });
  60  | 
  61  |     await test.step('Exactly one POST was made to the calendar API', async () => {
  62  |       const posts = captured.filter((r) => r.method === 'POST');
  63  |       expect(posts).toHaveLength(1);
  64  |     });
  65  | 
  66  |     await test.step('POST body contains expected appointment fields', async () => {
  67  |       const post = captured.find((r) => r.method === 'POST')!;
  68  |       const body = post.body as Record<string, unknown>;
  69  |       expect(body).toHaveProperty('summary');
  70  |       expect(body).toHaveProperty('start');
  71  |       expect(body).toHaveProperty('end');
  72  |     });
  73  |   });
  74  | 
  75  |   test('booking WITHOUT sync toggle does NOT call backend', async ({
  76  |     pageWithGoogleMock: page,
  77  |   }) => {
  78  |     const captured = apiMockHelper.interceptRequests(
  79  |       page,
  80  |       'http://localhost:3001/api/calendar/events',
  81  |     );
  82  | 
  83  |     await bookingHelper.goToScheduler(page);
  84  |     await bookingHelper.book(page, {
  85  |       patientId: PATIENTS.alice.id,
  86  |       type: 'consultation',
  87  |       duration: 30,
  88  |       syncToGoogle: false,
  89  |       slotDate: nextWorkingSlot(1, 15),
  90  |     });
  91  | 
  92  |     const posts = captured.filter((r) => r.method === 'POST');
  93  |     expect(posts).toHaveLength(0);
  94  |   });
  95  | });
  96  | 
  97  | test.describe('Google Calendar — Failure Scenarios', () => {
  98  |   test('backend 500 error shows error toast but still saves appointment locally', async ({
  99  |     pageWithGoogleError: page, storage,
  100 |   }) => {
  101 |     const countBefore = await storage.count(page, 'appointments');
  102 | 
  103 |     await test.step('Book with Google sync enabled (backend will fail)', async () => {
  104 |       await bookingHelper.goToScheduler(page);
  105 |       await bookingHelper.openSlot(page, nextWorkingSlot(1, 9));
  106 |       await bookingHelper.fillBookingForm(page, {
  107 |         patientId: PATIENTS.alice.id,
  108 |         type: 'consultation',
  109 |         duration: 30,
  110 |         syncToGoogle: true,
  111 |       });
  112 |       await page.getByTestId('booking-submit-btn').click();
  113 |     });
  114 | 
  115 |     await test.step('Error toast explains Google sync failure', async () => {
  116 |       // Must tell the user that *sync* failed — not that the booking failed
  117 |       await expect(page.getByTestId('toast-error')).toBeVisible();
  118 |       await expect(
  119 |         page.getByText(/google.*sync.*failed|calendar.*error/i),
  120 |       ).toBeVisible();
  121 |     });
  122 | 
  123 |     await test.step('Appointment is still saved locally despite sync failure', async () => {
  124 |       const countAfter = await storage.count(page, 'appointments');
  125 |       expect(countAfter).toBe(countBefore + 1); // local save succeeded
  126 |     });
  127 |   });
  128 | 
  129 |   test('401 Unauthorized triggers re-authentication prompt', async ({
  130 |     browser,
  131 |   }) => {
  132 |     const ctx = await browser.newContext();
  133 |     const page = await ctx.newPage();
```