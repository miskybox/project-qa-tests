import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async fillBillingInfo(user: any) {
    await this.page.getByRole('textbox', { name: 'Email Account Information' }).fill(user.email);
    await this.page.getByRole('textbox', { name: 'Phone Number Account Information' }).fill(user.phone);
    await this.page.getByRole('textbox', { name: 'Address Shipping Address' }).fill(user.address);
    await this.page.getByRole('textbox', { name: 'City Shipping Address' }).fill(user.city);
    await this.page.getByRole('textbox', { name: 'State/Province Shipping Address' }).fill(user.state);
    await this.page.getByRole('textbox', { name: 'Zip/Postal Code Shipping Address' }).fill(user.zip);
  }

  async fillShippingInfo(user: any) {
    const checkbox = this.page.getByRole('checkbox', { name: 'Use different billing address' });
    if (await checkbox.isVisible()) {
      await checkbox.check();
      
      await this.page.waitForTimeout(1000);
      
     await this.page.getByRole('textbox', { name: 'Address Billing Address' }).fill(user.address);
    await this.page.getByRole('textbox', { name: 'City Billing Address' }).fill(user.city);
    await this.page.getByRole('textbox', { name: 'State/Province Billing Address' }).fill(user.state);
    await this.page.getByRole('textbox', { name: 'Zip/Postal Code Billing Address' }).fill(user.zip);
    }
  }

  async fillPaymentInfo(user: any) {
    await this.page.getByRole('textbox', { name: 'Cardholder Name' }).fill(user.cardName);
    await this.page.getByRole('textbox', { name: 'Card Number' }).fill(user.cardNumber);
    await this.page.getByRole('combobox', { name: 'Expiry month' }).selectOption(user.expMonth);
    await this.page.getByRole('combobox', { name: 'Expiry year' }).selectOption(user.expYear);
    await this.page.getByRole('textbox', { name: 'CVV' }).fill(user.cvv);
  }

  async placeOrder() {
    const btn = this.page.getByRole('button', { name: 'Place Order' });
    await btn.click();
    await this.page.waitForTimeout(3000);
  }

  async verifyOrderConfirmation() {
    const confirmation = this.page.locator('text=/Thank you|Confirmation|Order placed/');
    return confirmation.isVisible();
  }
}