import { test, expect } from '@playwright/test';

test('@smoke Verifica que la tienda carga y muestra productos', async ({ page }) => {
  await page.goto('https://shop.polymer-project.org/');

  await expect(page.locator('shop-home')).toBeVisible();

 
  const mensOuterwearLink = page.getByRole('link', { name: "Men's Outerwear Shop Now" });
  await expect(mensOuterwearLink).toBeVisible();
});
