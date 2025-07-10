import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["allure-playwright", { outputFolder: "allure-results", detail: true }],
  ],
  use: {
    headless: true,
    actionTimeout: 10_000,
    screenshot: "on", //'only-on-failure',
    trace: "on", //'on-first-retry',
    video: "on", //'retain-on-failure'
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chromium"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "safari",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
