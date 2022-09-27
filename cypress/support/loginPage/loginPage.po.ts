export class LoginPagePageObject {
    get userNameInput(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="username"]');
    }

    get userPasswordInput(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="password"]');
    }

    get loginButton(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="login-button"]');
    }
}