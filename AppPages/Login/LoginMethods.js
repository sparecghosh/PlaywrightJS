// AppPages/Login/LoginMethods.js
import loginPageLocators from '../../AppPages/Login/LoginLocators.js';

export default class loginPageMethods {
  constructor(page) {
    this.page = page;  
    this.locators = new loginPageLocators(page);
  }

  async login(username, password) {
  await this.locators.usernameInput().fill(username);
  await this.locators.passwordInput().fill(password);
  await this.locators.loginButton().click();
  }


  async getPageTitle() {
    return this.page.title(); //may be add await if fails
  }

    async Moonch() {
    return this.page.title(); //may be add await if fails
  }

      async Boob() {
    return this.page.title(); //may be add await if fails
  }
}
