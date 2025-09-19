export default class loginPageLocators {

  constructor(page) {
    this.page = page;
  }

  usernameInput = () => this.page.getByPlaceholder('Username');
  passwordInput = () => this.page.getByPlaceholder('Password');
  loginButton = () => this.page.getByRole('button', { name: 'Login' });

};

