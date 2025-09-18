
 import { test, expect } from '@playwright/test';

export class loginPageLocators {

  constructor(page) {
    this.page = page;
  }

  usernameInput = () => this.page.locator('input[placeholder="Username"]');
  passwordInput = () => this.page.locator('input[placeholder="Password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
};

