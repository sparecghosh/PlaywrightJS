export default class NavigationHelper {
  constructor(page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async gotoInventoryPage() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
}