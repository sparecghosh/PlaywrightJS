import { test, expect } from '../../Utilities/BasePage';

test('Login Tests', async ({ LoginPage, HomePageMethods }) => {

    await LoginPage.gotoPage();
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(HomePageMethods.homePageTitle()).toBeVisible();
});

