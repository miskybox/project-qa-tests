import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
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
    name: 'form-validation',
    grep: /@form/,
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
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});
