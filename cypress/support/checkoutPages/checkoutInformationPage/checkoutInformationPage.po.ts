export class CheckoutInformationPageObject {
    get userFirstInput(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="firstName"]');
    }

    get userLastInput(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="lastName"]');
    }

    get postalCodeInput(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="postalCode"]');
    }

    get continueButton(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="continue"]');
    }
}