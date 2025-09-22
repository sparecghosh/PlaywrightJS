export default class HomePageLocators {

  constructor(page) {
    this.page = page;
  };

  // Page title
  pageTitle = () => this.page.getByText('Swag Labs');

  // Menu button
  menuButton = () => this.page.getByRole('button', { name: 'Open Menu' });

  // Product sort dropdown
  sortDropdown = () => this.page.getByRole('combobox');

  // Product cards
  productCards = () => this.page.locator('.inventory_item');

  // Product names
  productNames = () => this.page.locator('.inventory_item_name');

  // Add to cart buttons
  addToCartButtons = () => this.page.getByRole('button', { name: /Add to cart/ });

  // Shopping cart link/icon
  cartIcon = () => this.page.locator('.shopping_cart_link');

  // Footer
  footer = () => this.page.getByText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

  // Social media links
  twitterLink = () => this.page.getByRole('link', { name: 'Twitter' });
  facebookLink = () => this.page.getByRole('link', { name: 'Facebook' });
  linkedinLink = () => this.page.getByRole('link', { name: 'LinkedIn' });
};