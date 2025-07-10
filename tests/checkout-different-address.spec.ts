import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import user from '../fixtures/userData.json';

test('@regression @shippingDiff E2E con dirección de envío diferente', async ({ page }, testInfo) => {
  const home = new HomePage(page);
  const checkout = new CheckoutPage(page);

  await home.goto();
  await home.goToProductDetail();
  await home.addProductToCart();
  await home.goToCheckout();

  await checkout.fillBillingInfo(user.billingUser);
  await checkout.fillShippingInfo(user.shippingUser);
  await checkout.fillPaymentInfo(user.billingUser);
  await checkout.placeOrder();

  await expect(page).toHaveURL(/confirmation|success|order/, { timeout: 10000 });

  await testInfo.attach('shipping-different-log.txt', {
    body: 'Pedido realizado con dirección de envío distinta.',
    contentType: 'text/plain',
  });
});