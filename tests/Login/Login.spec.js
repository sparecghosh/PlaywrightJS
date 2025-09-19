import { test, expect } from '@playwright/test';
import PomManager from '../../Utilities/PomManager';

let pm;

test.describe('Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
    });

    test('Successful Login @smoke', async () => {
        await pm.LoginPageMethods.gotoPage();
        await pm.LoginPageMethods.login('standard_user', 'secret_sauce');
        await pm.LoginPageMethods.Moonch();
        await expect(pm.HomePageMethods.homePageTitle()).toHaveText("Products");
    });

});

