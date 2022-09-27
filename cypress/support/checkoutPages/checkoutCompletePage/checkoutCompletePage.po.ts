export class CheckoutCompletePageObject {
    get successfulCheckoutPageHeader(): Cypress.Chainable<JQuery> {
        return cy.get('.complete-header');
    }

    get backHomeButton(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="back-to-products"]');
    }
}