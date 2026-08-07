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
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('patient-row').filter({ hasText: 'carol.osei@test.medical' })

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
                - paragraph [ref=e28]: "0"
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
              - generic [ref=e79]: "0"
          - generic [ref=e81]:
            - img [ref=e83]
            - generic [ref=e85]:
              - generic [ref=e86]: With Visits
              - generic [ref=e87]: "0"
          - generic [ref=e89]:
            - img [ref=e91]
            - generic [ref=e93]:
              - generic [ref=e94]: Appointments
              - generic [ref=e95]: "0"
        - generic [ref=e96]:
          - generic [ref=e98]:
            - generic [ref=e99]:
              - heading "Patient Directory" [level=3] [ref=e100]
              - paragraph [ref=e101]: Browse, search, and open patient records for quick updates.
            - generic [ref=e102]:
              - generic [ref=e103]:
                - img [ref=e104]
                - textbox "Пребарај по име, е-пошта или телефон..." [ref=e107]
              - generic [ref=e108]: 0 shown
          - generic [ref=e111]:
            - img [ref=e112]
            - heading "Сè уште нема пациенти" [level=3] [ref=e115]
            - paragraph [ref=e116]: Започнете со додавање на прв пациент
            - button "Додајте го првиот пациент" [ref=e117] [cursor=pointer]:
              - img
              - text: Додајте го првиот пациент
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