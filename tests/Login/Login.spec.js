import { test, expect } from '@playwright/test';
import { LoginPageMethods } from '../../AppPages/Login/LoginMethods';

test('Successfull Login', async ({ page }) => {

const login = new LoginPageMethods(page);
login.gotoPage();
await login.login('standard_user', 'secret_sauce');

});
