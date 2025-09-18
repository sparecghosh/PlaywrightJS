
import { test, expect } from '@playwright/test';

export default class loginPageLocators {

  constructor(page) {
    this.page = page;

    // this.usernameInput = this.page.locator('input[placeholder="Username"]');
    // this.passwordInput = this.page.locator('input[placeholder="Password"]');
    // this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  usernameInput = () => this.page.locator('input[placeholder="Username"]');
  passwordInput = () => this.page.locator('input[placeholder="Password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
};

