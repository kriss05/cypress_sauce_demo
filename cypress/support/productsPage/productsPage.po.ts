export class ProductsPagePageObject {
    get burgerMenuButton(): Cypress.Chainable<JQuery> {
        return cy.get('#react-burger-menu-btn');
    }

    get inventoryItem(): Cypress.Chainable<JQuery> {
        return cy.get('.inventory_item');
    }

    get shoppingCartBadge(): Cypress.Chainable<JQuery> {
        return cy.get('.shopping_cart_badge');
    }

    get shoppingCartIcon(): Cypress.Chainable<JQuery> {
        return cy.get('.shopping_cart_link');
    }

    get removeFromCartButtons(): Cypress.Chainable<JQuery> {
        return cy.get('[data-test^=remove]')
    }
}