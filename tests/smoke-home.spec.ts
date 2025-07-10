import { test, expect } from '@playwright/test';

test('@smoke Verifica que la tienda carga y muestra productos', async ({ page }) => {
  await page.goto('https://shop.polymer-project.org/');
  await page.waitForLoadState('networkidle');


  await expect(page.locator('text=SHOP').first()).toBeVisible();


  const mensOuterwearLink = page.getByRole('link', { name: "Men's Outerwear Shop Now" });
  await expect(mensOuterwearLink).toBeVisible();

  const cartLink = page.locator('a[href="/cart"]');
  await expect(cartLink).toBeVisible();
});