const {
  clickElement,
  typeText,
} = require('../utils/actions');
const { baseURL, envName } = require('../utils/env');
const { log } = require('../utils/logger');
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#loginEmail');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('.btn');
    this.viewIcon=page.locator('#togglePassword');
  }



  async goto() {
  log(`Navigating to login page on ${envName} environment`);
  await this.page.goto(`${baseURL}`);
}


 async verifyLoginFunctionalityForAdmin(username, password) {
    log('Successfully entered valid email id by admin');
    await typeText(this.page, this.usernameInput, username);
    log('Successfully entered valid password by admin');
    await typeText(this.page, this.passwordInput, password);
    log('Successfully clicked login button by admin');
    await clickElement(this.page, this.loginButton);
  }

  async verifyLoginFunctionalityForTeacher(username, password) {
    log('Successfully entered valid email id by teacher');
    await typeText(this.page, this.usernameInput, username);
    log('Successfully entered valid password by teacher');
    await typeText(this.page, this.passwordInput, password);
    log('Successfully clicked login button by teacher');
    await clickElement(this.page, this.loginButton);
  }

  async verifyLoginFunctionalityForStudent(username, password) {
    log('Successfully entered valid email id by student');
    await typeText(this.page, this.usernameInput, username);
    log('Successfully entered valid password by student');
    await typeText(this.page, this.passwordInput, password);
    log('Successfully clicked login button by student');
    await clickElement(this.page, this.loginButton);
  }

  async verifyViewButton(password) {
    await typeText(this.page, this.passwordInput,password)
    log('Successfully clicked view button');
    await clickElement(this.page, this.viewIcon);
  }
}

module.exports = { LoginPage };