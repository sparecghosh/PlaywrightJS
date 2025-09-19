export default class HomePageLocators {

  constructor(page) {
    this.page = page;
  };

  homePageTitle = () => this.page.locator('[data-test="title"]');
  //homePageTitle = () => this.page.getByTitle('Products') ;
};