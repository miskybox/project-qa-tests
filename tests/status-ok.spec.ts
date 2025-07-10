import { test, expect } from "@playwright/test";

test("Verificar status HTTP 200 y guardar log manual", async ({
  page,
}, testInfo) => {
  const response = await page.goto("https://shop.polymer-project.org/");
  expect(response?.status()).toBe(200);

  const log = `Status recibido: ${response?.status()} en https://shop.polymer-project.org/`;

  await testInfo.attach("status-log.txt", {
    body: log,
    contentType: "text/plain",
  });
});
