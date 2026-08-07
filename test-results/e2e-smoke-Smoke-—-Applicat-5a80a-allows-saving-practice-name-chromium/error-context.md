# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/smoke.spec.ts >> Smoke — Application Loads >> settings page allows saving practice name
- Location: tests/e2e/smoke.spec.ts:60:3

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByTestId('practice-name-input')
Expected: "Test Clinic QA"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByTestId('practice-name-input')
    9 × locator resolved to <input value="" id="practiceName" placeholder="Clinic name" data-testid="practice-name-input" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm max-w-xl"/>
      - unexpected value ""

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
  45 |     ).toBeVisible();
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
> 74 |     await expect(nameInput).toHaveValue('Test Clinic QA');
     |                             ^ Error: expect(locator).toHaveValue(expected) failed
  75 |   });
  76 | });
  77 | 
```