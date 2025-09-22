import { test, expect } from '../../Utilities/HybridApproach.js';

// Example test style following HybridLogin.spec.js

test.describe('Home Page Tests', () => {
  test('Verify Home Page Loads and Product List', async ({ page, MyContext }) => {
  await MyContext.NavigationHelper.gotoLoginPage();
  await MyContext.LoginPageMethods.login('standard_user', 'secret_sauce');
    await MyContext.HomePageMethods.verifyHomePageLoaded();
    const products = await MyContext.HomePageMethods.getProductNames();
    expect(products.length).toBeGreaterThan(0);
    await MyContext.HomePageMethods.verifyFooterVisible();
  });

  test('Add First Product to Cart', async ({ page, MyContext }) => {
  await MyContext.NavigationHelper.gotoLoginPage();
  await MyContext.LoginPageMethods.login('standard_user', 'secret_sauce');
    await MyContext.HomePageMethods.addFirstProductToCart();
    await MyContext.HomePageMethods.goToCart();
    await expect(page).toHaveURL(/cart.html/);
  });
});
