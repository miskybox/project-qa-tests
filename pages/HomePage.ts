import { Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('https://shop.polymer-project.org/');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('shop-app', { state: 'visible' });
  }

  async goToProductDetail() {
    await this.page.goto(
      'https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip'
    );
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('shop-detail', { state: 'visible' });
  }

  async addProductToCart() {
    const addToCartButton = this.page.locator('button[aria-label="Add this item to cart"]');
    await addToCartButton.waitFor({ state: 'visible' });
    await addToCartButton.click();

    const viewCartButton = this.page.locator('a#viewCartAnchor');
    await viewCartButton.waitFor({ state: 'visible' });
    await viewCartButton.click();
  }

async goToCheckout() {
  await this.page.goto('https://shop.polymer-project.org/cart');

  const checkoutButton = this.page.getByRole('link', { name: 'Checkout' });
  await checkoutButton.waitFor({ state: 'visible' });
  await checkoutButton.click();
  await this.page.waitForLoadState('networkidle');
}


}