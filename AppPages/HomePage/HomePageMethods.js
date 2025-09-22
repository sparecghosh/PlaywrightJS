import HomePageLocators from './HomePageLocators.js';

export default class HomePageMethods {
  constructor(page) {
    this.page = page;
    this.locators = new HomePageLocators(page);
  }

  async verifyHomePageLoaded() {
    await this.locators.pageTitle().waitFor();
  }

  async openMenu() {
    await this.locators.menuButton().click();
  }

  async sortProducts(optionText) {
    await this.locators.sortDropdown().selectOption({ label: optionText });
  }

  async getProductNames() {
    return await this.locators.productNames().allTextContents();
  }

  async addFirstProductToCart() {
    await this.locators.addToCartButtons().first().click();
  }

  async goToCart() {
    await this.locators.cartIcon().click();
  }

  async verifyFooterVisible() {
    await this.locators.footer().waitFor();
  }

  async clickSocialLink(name) {
    if (name === 'Twitter') await this.locators.twitterLink().click();
    if (name === 'Facebook') await this.locators.facebookLink().click();
    if (name === 'LinkedIn') await this.locators.linkedinLink().click();
  }
}
