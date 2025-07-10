import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  projects: [
  {
    name: 'status',
    grep: /@status/,
  },
  {
    name: 'smoke',
    grep: /@smoke/,
  },
  {
    name: 'regression',
    grep: /@regression/,
  },
  {
    name: 'shipping-same',
    grep: /@shippingSame/,
  },
  {
    name: 'shipping-diff',
    grep: /@shippingDiff/,
  }
],

  use: {
    headless: true,
    actionTimeout: 10_000,
    screenshot: 'only-on-failure', 
    video: 'on-first-retry',
    trace: 'retain-on-failure',
  }
});
