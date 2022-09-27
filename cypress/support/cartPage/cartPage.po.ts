export class CheckoutCartPageObject {
    get cartItem(): Cypress.Chainable<JQuery> {
        return cy.get('.cart_item');
    }

    get checkoutButton(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="checkout"]');
    }
}