import { LoginPagePageObject } from './loginPage.po';

export interface LoginCommands {
    userLogin(userName: string,  password: string): void;
  }

const loginPage = new LoginPagePageObject();


Cypress.Commands.add('userLogin', (userName: string, password: string) => {
    loginPage.userNameInput.type(userName);
    loginPage.userPasswordInput.type(password);
    loginPage.loginButton.click();
    Cypress.Cookies.defaults({
      preserve: 'session-username',
    })
});