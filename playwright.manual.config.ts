import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'line',
  use: {
    baseURL: process.env.BASE_URL ?? 'http://127.0.0.1:8081',
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /e2e\/.+\.spec\.ts/,
    },
    {
      name: 'concurrency',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /e2e\/concurrency\.spec\.ts/,
      fullyParallel: false,
    },
  ],
});
