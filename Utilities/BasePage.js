import { test as base, expect as baseExpect } from '@playwright/test';
import loginPageMathods from '../AppPages/Login/LoginMethods.js';
import HomePageMethods from '../AppPages/HomePage/HomePageLocators.js';

export const test = base.extend({
  LoginPage: async ({ page }, use) => {
    const LoginPageMethods = new loginPageMathods(page);
    await use(LoginPageMethods);
  },

  HomePageMethods : async({ page}, use) => {
    const homePageMethods = new HomePageMethods(page);
    await use(homePageMethods);
  }
});

// Re-export expect so you can use same expect in tests
export const expect = baseExpect;
