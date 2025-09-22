// AppPages/PomManager.js
import LoginMethods from "../AppPages/Login/LoginMethods";
import HomePageMethods from "../AppPages/HomePage/HomePageMethods.js";
import NavigationHelper from "./NavigationHelper.js";

export default class PomManager {
  constructor(page) {
    this.page = page;
    this.LoginPageMethods = new LoginMethods(page);
    this.HomePageMethods = new HomePageMethods(page);
    this.NavigationHelper = new NavigationHelper(page);
  }
}
