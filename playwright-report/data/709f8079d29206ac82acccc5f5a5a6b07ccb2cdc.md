# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/patient-management.spec.ts >> Patient Management — Standalone Creation >> creates a new patient and verifies in UI and LocalStorage
- Location: tests/e2e/patient-management.spec.ts:9:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('patient-row').filter({ hasText: 'carol.osei@test.medical' })
Expected: visible
Error: strict mode violation: getByTestId('patient-row').filter({ hasText: 'carol.osei@test.medical' }) resolved to 2 elements:
    1) <div data-testid="patient-row" class="rounded-lg border bg-card text-card-foreground cursor-pointer border-border/70 shadow-sm transition-all hover:border-primary/25 hover:shadow-md">…</div> aka getByTestId('patient-row').nth(2)
    2) <tr data-testid="patient-row" class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer border-border/60">…</tr> aka getByRole('row', { name: 'CO Carol Osei Роден јул 4,' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('patient-row').filter({ hasText: 'carol.osei@test.medical' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - region "Notifications (F8)":
      - list [ref=e4]:
        - listitem [ref=e5]:
          - generic [ref=e6]:
            - generic [ref=e7]: Пациентот е креиран
            - generic [ref=e8]: Carol Osei е додаден во системот
          - button [ref=e9] [cursor=pointer]:
            - img [ref=e10]
    - region "Notifications alt+T"
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e17]:
          - img [ref=e19]
          - generic [ref=e23]:
            - heading "MediCal" [level=1] [ref=e24]
            - paragraph [ref=e25]: Менаџер за термини
        - navigation [ref=e26]:
          - paragraph [ref=e27]: Мени
          - generic [ref=e28]:
            - button "Контролна табла" [ref=e29] [cursor=pointer]:
              - img
              - text: Контролна табла
            - button "Пациенти" [ref=e30] [cursor=pointer]:
              - img
              - text: Пациенти
            - button "Поставки" [ref=e31] [cursor=pointer]:
              - img
              - text: Поставки
          - generic [ref=e32]:
            - paragraph [ref=e33]: Преглед
            - generic [ref=e34]:
              - generic [ref=e36]:
                - generic [ref=e37]:
                  - paragraph [ref=e38]: Вкупно пациенти
                  - paragraph [ref=e39]: "3"
                - img [ref=e41]
              - generic [ref=e47]:
                - generic [ref=e48]:
                  - paragraph [ref=e49]: Вкупно посети
                  - paragraph [ref=e50]: "6"
                - img [ref=e52]
              - generic [ref=e55]:
                - generic [ref=e56]:
                  - paragraph [ref=e57]: Посети овој месец
                  - paragraph [ref=e58]: "1"
                - img [ref=e60]
        - generic [ref=e63]:
          - paragraph [ref=e64]: Самостоен • Флексибилен
          - paragraph [ref=e65]: Податоците се локално зачувани
      - main [ref=e66]:
        - generic [ref=e68]:
          - generic [ref=e69]:
            - generic [ref=e70]:
              - generic [ref=e71]:
                - img [ref=e73]
                - heading "Пациенти" [level=2] [ref=e76]
              - paragraph [ref=e77]: Управувајте со базата на пациенти
            - button "Додај пациент" [ref=e78] [cursor=pointer]:
              - img
              - text: Додај пациент
          - generic [ref=e79]:
            - generic [ref=e81]:
              - img [ref=e83]
              - generic [ref=e88]:
                - generic [ref=e89]: Patients
                - generic [ref=e90]: "3"
            - generic [ref=e92]:
              - img [ref=e94]
              - generic [ref=e96]:
                - generic [ref=e97]: With Visits
                - generic [ref=e98]: "2"
            - generic [ref=e100]:
              - img [ref=e102]
              - generic [ref=e104]:
                - generic [ref=e105]: Appointments
                - generic [ref=e106]: "6"
          - generic [ref=e107]:
            - generic [ref=e109]:
              - generic [ref=e110]:
                - heading "Patient Directory" [level=3] [ref=e111]
                - paragraph [ref=e112]: Browse, search, and open patient records for quick updates.
              - generic [ref=e113]:
                - generic [ref=e114]:
                  - img [ref=e115]
                  - textbox "Пребарај по име, е-пошта или телефон..." [ref=e118]
                - generic [ref=e119]: 3 shown
            - table [ref=e123]:
              - rowgroup [ref=e124]:
                - row "Patient Contact Last Visit Activity Notes" [ref=e125]:
                  - columnheader "Patient" [ref=e126]
                  - columnheader "Contact" [ref=e127]
                  - columnheader "Last Visit" [ref=e128]
                  - columnheader "Activity" [ref=e129]
                  - columnheader "Notes" [ref=e130]
              - rowgroup [ref=e131]:
                - row "11 123 123 Нема датум на раѓање tomce86+123@gmail.com +38975301690 мај 26, 2026 09:15 5 термини No notes added" [ref=e132] [cursor=pointer]:
                  - cell "11 123 123 Нема датум на раѓање" [ref=e133]:
                    - generic [ref=e134]:
                      - generic [ref=e135]: "11"
                      - generic [ref=e136]:
                        - generic [ref=e137]: 123 123
                        - generic [ref=e138]: Нема датум на раѓање
                  - cell "tomce86+123@gmail.com +38975301690" [ref=e139]:
                    - generic [ref=e140]:
                      - generic [ref=e141]:
                        - img [ref=e142]
                        - generic [ref=e145]: tomce86+123@gmail.com
                      - generic [ref=e146]:
                        - img [ref=e147]
                        - generic [ref=e149]: "+38975301690"
                  - cell "мај 26, 2026 09:15" [ref=e150]:
                    - generic [ref=e151]:
                      - generic [ref=e152]: мај 26, 2026
                      - generic [ref=e153]: 09:15
                  - cell "5 термини" [ref=e154]:
                    - generic [ref=e155]: 5 термини
                  - cell "No notes added" [ref=e156]:
                    - generic [ref=e157]:
                      - paragraph [ref=e158]: No notes added
                      - img [ref=e159]
                - row "BP Backend Patient1785433461603 Роден јан 1, 1991 backend.1785433461603@test.medical 555-1603 јул 27, 2026 10:00 1 термин No notes added" [ref=e162] [cursor=pointer]:
                  - cell "BP Backend Patient1785433461603 Роден јан 1, 1991" [ref=e163]:
                    - generic [ref=e164]:
                      - generic [ref=e165]: BP
                      - generic [ref=e166]:
                        - generic [ref=e167]: Backend Patient1785433461603
                        - generic [ref=e168]: Роден јан 1, 1991
                  - cell "backend.1785433461603@test.medical 555-1603" [ref=e169]:
                    - generic [ref=e170]:
                      - generic [ref=e171]:
                        - img [ref=e172]
                        - generic [ref=e175]: backend.1785433461603@test.medical
                      - generic [ref=e176]:
                        - img [ref=e177]
                        - generic [ref=e179]: 555-1603
                  - cell "јул 27, 2026 10:00" [ref=e180]:
                    - generic [ref=e181]:
                      - generic [ref=e182]: јул 27, 2026
                      - generic [ref=e183]: 10:00
                  - cell "1 термин" [ref=e184]:
                    - generic [ref=e185]: 1 термин
                  - cell "No notes added" [ref=e186]:
                    - generic [ref=e187]:
                      - paragraph [ref=e188]: No notes added
                      - img [ref=e189]
                - row "CO Carol Osei Роден јул 4, 1990 carol.osei@test.medical 555-0199 No visits yet 0 термини First visit" [ref=e192] [cursor=pointer]:
                  - cell "CO Carol Osei Роден јул 4, 1990" [ref=e193]:
                    - generic [ref=e194]:
                      - generic [ref=e195]: CO
                      - generic [ref=e196]:
                        - generic [ref=e197]: Carol Osei
                        - generic [ref=e198]: Роден јул 4, 1990
                  - cell "carol.osei@test.medical 555-0199" [ref=e199]:
                    - generic [ref=e200]:
                      - generic [ref=e201]:
                        - img [ref=e202]
                        - generic [ref=e205]: carol.osei@test.medical
                      - generic [ref=e206]:
                        - img [ref=e207]
                        - generic [ref=e209]: 555-0199
                  - cell "No visits yet" [ref=e210]
                  - cell "0 термини" [ref=e211]:
                    - generic [ref=e212]: 0 термини
                  - cell "First visit" [ref=e213]:
                    - generic [ref=e214]:
                      - paragraph [ref=e215]: First visit
                      - img [ref=e216]
  - status [ref=e219]: Notification Пациентот е креиранCarol Osei е додаден во системот
```

# Test source

```ts
  1   | // tests/e2e/patient-management.spec.ts
  2   | // Tests patient creation both standalone and inline during booking.
  3   | // Also covers: search, profile view, data persistence.
  4   | 
  5   | import { test, expect } from '../fixtures/base';
  6   | import { PATIENTS } from '../test-data/seed';
  7   | 
  8   | test.describe('Patient Management — Standalone Creation', () => {
  9   |   test('creates a new patient and verifies in UI and LocalStorage', async ({
  10  |     pageClean: page, patients, storage,
  11  |   }) => {
  12  |     const newP = PATIENTS.newPatient;
  13  | 
  14  |     await test.step('Navigate to Patients page', async () => {
  15  |       await patients.goToPatients(page);
  16  |     });
  17  | 
  18  |     await test.step('Open create dialog and fill all fields', async () => {
  19  |       await patients.openCreateDialog(page);
  20  |       await patients.fillForm(page, {
  21  |         firstName: newP.firstName,
  22  |         lastName: newP.lastName,
  23  |         email: newP.email,
  24  |         phone: newP.phone,
  25  |         dateOfBirth: newP.dateOfBirth,
  26  |         address: newP.address,
  27  |         emergencyContact: newP.emergencyContact,
  28  |         notes: newP.notes,
  29  |       });
  30  |     });
  31  | 
  32  |     await test.step('Submit and confirm patient appears in list', async () => {
  33  |       await patients.submitForm(page);
  34  |       await expect(page.getByTestId('toast-success')).toBeVisible();
  35  | 
  36  |       const row = page.getByTestId('patient-row').filter({ hasText: newP.email });
> 37  |       await expect(row).toBeVisible();
      |                         ^ Error: expect(locator).toBeVisible() failed
  38  |     });
  39  | 
  40  |     await test.step('Verify patient stored in LocalStorage with all fields', async () => {
  41  |       await storage.assertPatientExistsInStorage(page, newP.email);
  42  | 
  43  |       const stored = await storage.getAll(page, 'patients') as Record<string, string>[];
  44  |       const patient = stored.find((p) => p.email === newP.email);
  45  | 
  46  |       expect(patient?.firstName).toBe(newP.firstName);
  47  |       expect(patient?.lastName).toBe(newP.lastName);
  48  |       expect(patient?.phone).toBe(newP.phone);
  49  |       expect(patient?.address).toBe(newP.address);
  50  |     });
  51  |   });
  52  | 
  53  |   test('cannot create patient with duplicate email', async ({
  54  |     pageWithPatients: page, patients,
  55  |   }) => {
  56  |     await patients.goToPatients(page);
  57  |     await patients.openCreateDialog(page);
  58  | 
  59  |     // Try to register Alice's email again
  60  |     await patients.fillForm(page, {
  61  |       firstName: 'Duplicate',
  62  |       lastName: 'User',
  63  |       email: PATIENTS.alice.email, // already exists
  64  |       phone: '555-9999',
  65  |       dateOfBirth: '2000-01-01',
  66  |     });
  67  | 
  68  |     await page.getByTestId('patient-form-submit').click();
  69  |     await expect(page.getByTestId('error-email-duplicate')).toBeVisible();
  70  |     await expect(page.getByTestId('patient-form-dialog')).toBeVisible(); // stays open
  71  |   });
  72  | 
  73  |   test('required fields prevent submission when empty', async ({
  74  |     pageClean: page, patients,
  75  |   }) => {
  76  |     await patients.goToPatients(page);
  77  |     await patients.openCreateDialog(page);
  78  | 
  79  |     // Submit completely empty form
  80  |     await page.getByTestId('patient-form-submit').click();
  81  | 
  82  |     await expect(page.getByTestId('error-first-name-required')).toBeVisible();
  83  |     await expect(page.getByTestId('error-last-name-required')).toBeVisible();
  84  |     await expect(page.getByTestId('error-email-required')).toBeVisible();
  85  |     await expect(page.getByTestId('error-phone-required')).toBeVisible();
  86  |   });
  87  | 
  88  |   test('patient email format is validated', async ({
  89  |     pageClean: page, patients,
  90  |   }) => {
  91  |     await patients.goToPatients(page);
  92  |     await patients.openCreateDialog(page);
  93  | 
  94  |     await patients.fillForm(page, {
  95  |       firstName: 'Test',
  96  |       lastName: 'User',
  97  |       email: 'not-an-email', // invalid
  98  |       phone: '555-1234',
  99  |       dateOfBirth: '1990-01-01',
  100 |     });
  101 | 
  102 |     await page.getByTestId('patient-form-submit').click();
  103 |     await expect(page.getByTestId('error-email-invalid')).toBeVisible();
  104 |   });
  105 | });
  106 | 
  107 | test.describe('Patient Management — Inline Creation During Booking', () => {
  108 |   test('creates a new patient inline during booking and appointment is linked correctly', async ({
  109 |     pageClean: page, booking, storage,
  110 |   }) => {
  111 |     const newP = PATIENTS.newPatient;
  112 | 
  113 |     await booking.goToScheduler(page);
  114 |     await booking.openSlot(page);
  115 | 
  116 |     await test.step('Switch to new-patient form inside booking dialog', async () => {
  117 |       await page.getByTestId('create-new-patient-btn').click();
  118 |       await expect(page.getByTestId('new-patient-panel')).toBeVisible();
  119 |     });
  120 | 
  121 |     await test.step('Fill new patient details', async () => {
  122 |       await booking.fillNewPatientForm(page, {
  123 |         firstName: newP.firstName,
  124 |         lastName: newP.lastName,
  125 |         email: newP.email,
  126 |         phone: newP.phone,
  127 |         dateOfBirth: newP.dateOfBirth,
  128 |       });
  129 |     });
  130 | 
  131 |     await test.step('Complete rest of booking form', async () => {
  132 |       await page.getByTestId('appointment-type-select').selectOption('consultation');
  133 |       await page.getByTestId('duration-select').selectOption('30');
  134 |     });
  135 | 
  136 |     await test.step('Submit booking', async () => {
  137 |       await booking.submit(page);
```