# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/google-calendar.spec.ts >> Google Calendar — Read-Only Enforcement >> clicking a Google Calendar event block does NOT open the booking edit dialog
- Location: tests/e2e/google-calendar.spec.ts:180:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('gcal-event-block').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('gcal-event-block').first()

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
  134 | 
  135 |     try {
  136 |       await apiMockHelper.mockGoogleCalendarUnauthorized(page);
  137 |       await page.goto('/');
  138 |       await storageHelper.seed(page, 'patients', [PATIENTS.alice]);
  139 |       await page.reload();
  140 | 
  141 |       await page.getByTestId('nav-scheduler').click();
  142 |       await page.getByTestId('sync-google-btn').click();
  143 | 
  144 |       // App should prompt re-auth, not just silently fail
  145 |       await expect(
  146 |         page.getByTestId('google-reauth-banner').or(page.getByText(/reconnect.*google|sign.*in.*google/i)),
  147 |       ).toBeVisible({ timeout: 5_000 });
  148 |     } finally {
  149 |       await ctx.close();
  150 |     }
  151 |   });
  152 | 
  153 |   test('network failure during sync shows offline error and does not crash', async ({
  154 |     browser,
  155 |   }) => {
  156 |     const ctx = await browser.newContext();
  157 |     const page = await ctx.newPage();
  158 | 
  159 |     try {
  160 |       await page.goto('/');
  161 |       await storageHelper.seed(page, 'patients', [PATIENTS.alice]);
  162 |       // Set up Google mock first, then override with network failure
  163 |       await apiMockHelper.mockNetworkFailure(page, 'http://localhost:3001/api/**');
  164 |       await page.reload();
  165 | 
  166 |       await page.getByTestId('nav-scheduler').click();
  167 |       await page.getByTestId('sync-google-btn').click();
  168 | 
  169 |       // Must show an error — must not leave the user with a frozen spinner
  170 |       await expect(page.getByTestId('toast-error')).toBeVisible({ timeout: 8_000 });
  171 |       // Scheduler grid must still be functional
  172 |       await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  173 |     } finally {
  174 |       await ctx.close();
  175 |     }
  176 |   });
  177 | });
  178 | 
  179 | test.describe('Google Calendar — Read-Only Enforcement', () => {
  180 |   test('clicking a Google Calendar event block does NOT open the booking edit dialog', async ({
  181 |     pageWithGoogleMock: page,
  182 |   }) => {
  183 |     await page.getByTestId('nav-scheduler').click();
  184 |     await page.getByTestId('sync-google-btn').click();
  185 | 
  186 |     const gcalBlock = page.getByTestId('gcal-event-block').first();
> 187 |     await expect(gcalBlock).toBeVisible({ timeout: 5_000 });
      |                             ^ Error: expect(locator).toBeVisible() failed
  188 |     await gcalBlock.click();
  189 | 
  190 |     // Should open a read-only detail view, NOT the editable booking dialog
  191 |     await expect(page.getByTestId('booking-dialog')).not.toBeVisible();
  192 |     await expect(page.getByTestId('gcal-detail-panel')).toBeVisible();
  193 | 
  194 |     // The read-only panel must NOT have an edit or save button
  195 |     await expect(page.getByTestId('booking-submit-btn')).not.toBeVisible();
  196 |   });
  197 | });
  198 | 
```