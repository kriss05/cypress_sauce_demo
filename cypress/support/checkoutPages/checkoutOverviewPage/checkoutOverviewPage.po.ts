export class CheckoutOverviewPageObject {
    get cartItem(): Cypress.Chainable<JQuery> {
        return cy.get('.cart_item');
    }

    get quantityItem(): Cypress.Chainable<JQuery> {
        return cy.get('.cart_quantity');
    }

    get productPrice(): Cypress.Chainable<JQuery> {
        return cy.get('.inventory_item_price');
    }

    get productTotalPrice(): Cypress.Chainable<JQuery> {
        return cy.get('.summary_subtotal_label');
    }

    get productTaxPrice(): Cypress.Chainable<JQuery> {
        return cy.get('.summary_tax_label');
    }

    get productTaxTotalPrice(): Cypress.Chainable<JQuery> {
        return cy.get('.summary_total_label');
    }

    get paymentInformation(): Cypress.Chainable<JQuery> {
        return cy.get('.summary_value_label');
    }

    get shippingInformation(): Cypress.Chainable<JQuery> {
        return cy.get('.summary_value_label');
    }

    get finishButton(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test="finish"]');
    }
}