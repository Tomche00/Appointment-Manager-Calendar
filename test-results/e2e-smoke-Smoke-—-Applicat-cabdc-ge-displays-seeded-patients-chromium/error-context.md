# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/smoke.spec.ts >> Smoke — Application Loads >> patients page displays seeded patients
- Location: tests/e2e/smoke.spec.ts:39:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('patient-row').filter({ hasText: 'alice.thornton@test.medical' })
Expected: visible
Error: strict mode violation: getByTestId('patient-row').filter({ hasText: 'alice.thornton@test.medical' }) resolved to 2 elements:
    1) <div data-testid="patient-row" class="rounded-lg border bg-card text-card-foreground cursor-pointer border-border/70 shadow-sm transition-all hover:border-primary/25 hover:shadow-md">…</div> aka getByTestId('patient-row').nth(3)
    2) <tr data-testid="patient-row" class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer border-border/60">…</tr> aka getByRole('row', { name: 'DU Duplicate User Роден јан 1' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('patient-row').filter({ hasText: 'alice.thornton@test.medical' })

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
          - button "Пациенти" [active] [ref=e19] [cursor=pointer]:
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
                - paragraph [ref=e28]: "4"
              - img [ref=e30]
            - generic [ref=e36]:
              - generic [ref=e37]:
                - paragraph [ref=e38]: Вкупно посети
                - paragraph [ref=e39]: "6"
              - img [ref=e41]
            - generic [ref=e44]:
              - generic [ref=e45]:
                - paragraph [ref=e46]: Посети овој месец
                - paragraph [ref=e47]: "1"
              - img [ref=e49]
      - generic [ref=e52]:
        - paragraph [ref=e53]: Самостоен • Флексибилен
        - paragraph [ref=e54]: Податоците се локално зачувани
    - main [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - img [ref=e62]
              - heading "Пациенти" [level=2] [ref=e65]
            - paragraph [ref=e66]: Управувајте со базата на пациенти
          - button "Додај пациент" [ref=e67] [cursor=pointer]:
            - img
            - text: Додај пациент
        - generic [ref=e68]:
          - generic [ref=e70]:
            - img [ref=e72]
            - generic [ref=e77]:
              - generic [ref=e78]: Patients
              - generic [ref=e79]: "4"
          - generic [ref=e81]:
            - img [ref=e83]
            - generic [ref=e85]:
              - generic [ref=e86]: With Visits
              - generic [ref=e87]: "2"
          - generic [ref=e89]:
            - img [ref=e91]
            - generic [ref=e93]:
              - generic [ref=e94]: Appointments
              - generic [ref=e95]: "6"
        - generic [ref=e96]:
          - generic [ref=e98]:
            - generic [ref=e99]:
              - heading "Patient Directory" [level=3] [ref=e100]
              - paragraph [ref=e101]: Browse, search, and open patient records for quick updates.
            - generic [ref=e102]:
              - generic [ref=e103]:
                - img [ref=e104]
                - textbox "Пребарај по име, е-пошта или телефон..." [ref=e107]
              - generic [ref=e108]: 4 shown
          - table [ref=e112]:
            - rowgroup [ref=e113]:
              - row "Patient Contact Last Visit Activity Notes" [ref=e114]:
                - columnheader "Patient" [ref=e115]
                - columnheader "Contact" [ref=e116]
                - columnheader "Last Visit" [ref=e117]
                - columnheader "Activity" [ref=e118]
                - columnheader "Notes" [ref=e119]
            - rowgroup [ref=e120]:
              - row "11 123 123 Нема датум на раѓање tomce86+123@gmail.com +38975301690 мај 26, 2026 09:15 5 термини No notes added" [ref=e121] [cursor=pointer]:
                - cell "11 123 123 Нема датум на раѓање" [ref=e122]:
                  - generic [ref=e123]:
                    - generic [ref=e124]: "11"
                    - generic [ref=e125]:
                      - generic [ref=e126]: 123 123
                      - generic [ref=e127]: Нема датум на раѓање
                - cell "tomce86+123@gmail.com +38975301690" [ref=e128]:
                  - generic [ref=e129]:
                    - generic [ref=e130]:
                      - img [ref=e131]
                      - generic [ref=e134]: tomce86+123@gmail.com
                    - generic [ref=e135]:
                      - img [ref=e136]
                      - generic [ref=e138]: "+38975301690"
                - cell "мај 26, 2026 09:15" [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]: мај 26, 2026
                    - generic [ref=e142]: 09:15
                - cell "5 термини" [ref=e143]:
                  - generic [ref=e144]: 5 термини
                - cell "No notes added" [ref=e145]:
                  - generic [ref=e146]:
                    - paragraph [ref=e147]: No notes added
                    - img [ref=e148]
              - row "BP Backend Patient1785433461603 Роден јан 1, 1991 backend.1785433461603@test.medical 555-1603 јул 27, 2026 10:00 1 термин No notes added" [ref=e151] [cursor=pointer]:
                - cell "BP Backend Patient1785433461603 Роден јан 1, 1991" [ref=e152]:
                  - generic [ref=e153]:
                    - generic [ref=e154]: BP
                    - generic [ref=e155]:
                      - generic [ref=e156]: Backend Patient1785433461603
                      - generic [ref=e157]: Роден јан 1, 1991
                - cell "backend.1785433461603@test.medical 555-1603" [ref=e158]:
                  - generic [ref=e159]:
                    - generic [ref=e160]:
                      - img [ref=e161]
                      - generic [ref=e164]: backend.1785433461603@test.medical
                    - generic [ref=e165]:
                      - img [ref=e166]
                      - generic [ref=e168]: 555-1603
                - cell "јул 27, 2026 10:00" [ref=e169]:
                  - generic [ref=e170]:
                    - generic [ref=e171]: јул 27, 2026
                    - generic [ref=e172]: 10:00
                - cell "1 термин" [ref=e173]:
                  - generic [ref=e174]: 1 термин
                - cell "No notes added" [ref=e175]:
                  - generic [ref=e176]:
                    - paragraph [ref=e177]: No notes added
                    - img [ref=e178]
              - row "CO Carol Osei Роден јул 4, 1990 carol.osei@test.medical 555-0199 No visits yet 0 термини First visit" [ref=e181] [cursor=pointer]:
                - cell "CO Carol Osei Роден јул 4, 1990" [ref=e182]:
                  - generic [ref=e183]:
                    - generic [ref=e184]: CO
                    - generic [ref=e185]:
                      - generic [ref=e186]: Carol Osei
                      - generic [ref=e187]: Роден јул 4, 1990
                - cell "carol.osei@test.medical 555-0199" [ref=e188]:
                  - generic [ref=e189]:
                    - generic [ref=e190]:
                      - img [ref=e191]
                      - generic [ref=e194]: carol.osei@test.medical
                    - generic [ref=e195]:
                      - img [ref=e196]
                      - generic [ref=e198]: 555-0199
                - cell "No visits yet" [ref=e199]
                - cell "0 термини" [ref=e200]:
                  - generic [ref=e201]: 0 термини
                - cell "First visit" [ref=e202]:
                  - generic [ref=e203]:
                    - paragraph [ref=e204]: First visit
                    - img [ref=e205]
              - row "DU Duplicate User Роден јан 1, 2000 alice.thornton@test.medical 555-9999 No visits yet 0 термини No notes added" [ref=e208] [cursor=pointer]:
                - cell "DU Duplicate User Роден јан 1, 2000" [ref=e209]:
                  - generic [ref=e210]:
                    - generic [ref=e211]: DU
                    - generic [ref=e212]:
                      - generic [ref=e213]: Duplicate User
                      - generic [ref=e214]: Роден јан 1, 2000
                - cell "alice.thornton@test.medical 555-9999" [ref=e215]:
                  - generic [ref=e216]:
                    - generic [ref=e217]:
                      - img [ref=e218]
                      - generic [ref=e221]: alice.thornton@test.medical
                    - generic [ref=e222]:
                      - img [ref=e223]
                      - generic [ref=e225]: 555-9999
                - cell "No visits yet" [ref=e226]
                - cell "0 термини" [ref=e227]:
                  - generic [ref=e228]: 0 термини
                - cell "No notes added" [ref=e229]:
                  - generic [ref=e230]:
                    - paragraph [ref=e231]: No notes added
                    - img [ref=e232]
```

# Test source

```ts
  1  | // tests/e2e/smoke.spec.ts
  2  | // Fast sanity checks run across all browsers in CI.
  3  | // Each test is self-contained and completes in < 10 seconds.
  4  | 
  5  | import { test, expect } from '../fixtures/base';
  6  | import { PATIENTS } from '../test-data/seed';
  7  | 
  8  | test.describe('Smoke — Application Loads', () => {
  9  |   test('app renders without console errors', async ({ page }) => {
  10 |     const errors: string[] = [];
  11 |     page.on('pageerror', (err) => errors.push(err.message));
  12 |     page.on('console', (msg) => {
  13 |       if (msg.type() === 'error') errors.push(msg.text());
  14 |     });
  15 | 
  16 |     await page.goto('/');
  17 |     await page.waitForLoadState('networkidle');
  18 | 
  19 |     // Allow expected "no data yet" console warnings, not JS errors
  20 |     const jsErrors = errors.filter(
  21 |       (e) => !e.includes('Warning:') && !e.includes('localStorage'),
  22 |     );
  23 |     expect(jsErrors).toHaveLength(0);
  24 |   });
  25 | 
  26 |   test('all main navigation items are reachable', async ({ pageWithPatients: page }) => {
  27 |     const navItems = [
  28 |       { testId: 'nav-scheduler', pageTestId: 'scheduler-grid' },
  29 |       { testId: 'nav-patients', pageTestId: 'patients-page' },
  30 |       { testId: 'nav-settings', pageTestId: 'settings-page' },
  31 |     ];
  32 | 
  33 |     for (const { testId, pageTestId } of navItems) {
  34 |       await page.getByTestId(testId).click();
  35 |       await expect(page.getByTestId(pageTestId)).toBeVisible();
  36 |     }
  37 |   });
  38 | 
  39 |   test('patients page displays seeded patients', async ({
  40 |     pageWithPatients: page,
  41 |   }) => {
  42 |     await page.getByTestId('nav-patients').click();
  43 |     await expect(
  44 |       page.getByTestId('patient-row').filter({ hasText: PATIENTS.alice.email }),
> 45 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  46 |     await expect(
  47 |       page.getByTestId('patient-row').filter({ hasText: PATIENTS.bob.email }),
  48 |     ).toBeVisible();
  49 |   });
  50 | 
  51 |   test('scheduler grid renders working-hours time slots', async ({
  52 |     pageWithPatients: page,
  53 |   }) => {
  54 |     await page.getByTestId('nav-scheduler').click();
  55 |     await expect(page.getByTestId('scheduler-grid')).toBeVisible();
  56 |     // At least the start-of-day slot should exist
  57 |     await expect(page.getByTestId('time-slot-8:00').first()).toBeVisible();
  58 |   });
  59 | 
  60 |   test('settings page allows saving practice name', async ({
  61 |     pageClean: page,
  62 |   }) => {
  63 |     await page.getByTestId('nav-settings').click();
  64 | 
  65 |     const nameInput = page.getByTestId('practice-name-input');
  66 |     await nameInput.fill('Test Clinic QA');
  67 |     await page.getByTestId('save-settings-btn').click();
  68 | 
  69 |     await expect(page.getByTestId('toast-success')).toBeVisible();
  70 | 
  71 |     // Reload and verify persistence
  72 |     await page.reload();
  73 |     await page.getByTestId('nav-settings').click();
  74 |     await expect(nameInput).toHaveValue('Test Clinic QA');
  75 |   });
  76 | });
  77 | 
```