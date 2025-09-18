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
        //await expect(page.getByText("Products")).toBeVisible();
    });

});

test.afterEach(async ({ page }) => {
    page.close();
    page.context().browser().close();
    page.context().close(); 
    })