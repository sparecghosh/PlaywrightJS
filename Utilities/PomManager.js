// AppPages/PomManager.js
import LoginMethods from "../AppPages/Login/LoginMethods";
import HomePage from "../AppPages/HomePage/HomePageLocators";

export default class PomManager {
  constructor(page) {
    this.page = page;
    this.LoginPageMethods = new LoginMethods(page);
    this.HomePageMethods = new HomePage(page);
  }
}
