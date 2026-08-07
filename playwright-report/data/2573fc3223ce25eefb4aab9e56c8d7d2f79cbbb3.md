# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/patient-management.spec.ts >> Patient Management — Search >> search with no results shows empty state
- Location: tests/e2e/patient-management.spec.ts:180:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('patients-empty-state')
Expected: visible
Error: strict mode violation: getByTestId('patients-empty-state') resolved to 2 elements:
    1) <div data-testid="patients-empty-state" class="rounded-lg border bg-card text-card-foreground border-border/80 py-12 text-center shadow-none">…</div> aka getByTestId('patients-empty-state').first()
    2) <div class="p-10 text-center" data-testid="patients-empty-state">…</div> aka getByTestId('patients-empty-state').nth(1)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('patients-empty-state')

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
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - img [ref=e62]
              - heading "Patients" [level=2] [ref=e65]
            - paragraph [ref=e66]: Manage your patient database
          - button "Add Patient" [ref=e67] [cursor=pointer]:
            - img
            - text: Add Patient
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
                - textbox "Search patients by name, email, or phone..." [active] [ref=e107]: nonexistent-patient-xyz
              - generic [ref=e108]: 0 shown
          - generic [ref=e111]:
            - img [ref=e112]
            - heading "No patients found" [level=3] [ref=e115]
            - paragraph [ref=e116]: Try adjusting your search criteria
```

# Test source

```ts
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
  138 |       await expect(page.getByTestId('toast-success')).toBeVisible();
  139 |     });
  140 | 
  141 |     await test.step('Both patient AND appointment exist in storage, correctly linked', async () => {
  142 |       await storage.assertPatientExistsInStorage(page, newP.email);
  143 | 
  144 |       const patients = await storage.getAll(page, 'patients') as { id: string; email: string }[];
  145 |       const patient = patients.find((p) => p.email === newP.email)!;
  146 |       expect(patient).toBeDefined();
  147 | 
  148 |       // Appointment must reference the newly created patient's ID
  149 |       await storage.assertAppointmentExistsInStorage(page, {
  150 |         patientId: patient.id,
  151 |         type: 'consultation',
  152 |       });
  153 |     });
  154 |   });
  155 | });
  156 | 
  157 | test.describe('Patient Management — Search', () => {
  158 |   test('search filters patient list by name', async ({
  159 |     pageWithPatients: page, patients,
  160 |   }) => {
  161 |     await patients.goToPatients(page);
  162 | 
  163 |     await test.step('Search for "Alice"', async () => {
  164 |       await patients.searchPatient(page, 'Alice');
  165 |       // Only Alice should be visible
  166 |       const count = await patients.getVisiblePatientCount(page);
  167 |       expect(count).toBe(1);
  168 |       await expect(
  169 |         page.getByTestId('patient-row').filter({ hasText: PATIENTS.alice.email }),
  170 |       ).toBeVisible();
  171 |     });
  172 | 
  173 |     await test.step('Clear search restores full list', async () => {
  174 |       await patients.searchPatient(page, '');
  175 |       const count = await patients.getVisiblePatientCount(page);
  176 |       expect(count).toBe(2); // Alice + Bob
  177 |     });
  178 |   });
  179 | 
  180 |   test('search with no results shows empty state', async ({
  181 |     pageWithPatients: page, patients,
  182 |   }) => {
  183 |     await patients.goToPatients(page);
  184 |     await patients.searchPatient(page, 'nonexistent-patient-xyz');
  185 | 
> 186 |     await expect(page.getByTestId('patients-empty-state')).toBeVisible();
      |                                                            ^ Error: expect(locator).toBeVisible() failed
  187 |     expect(await patients.getVisiblePatientCount(page)).toBe(0);
  188 |   });
  189 | });
  190 | 
```