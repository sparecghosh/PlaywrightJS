import { loginPageLocators } from '../../AppPages/Login/LoginLocators.js';

export class LoginPageMethods {
  constructor(page) {
    this.page = page;  
    this.locators = new loginPageLocators(page);
  }

  async login(username, password) {
    await this.locators.usernameInput().fill(username);
    await this.locators.passwordInput().fill(password);
    await this.locators.loginButton().click();
  }

  async gotoPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }
}
