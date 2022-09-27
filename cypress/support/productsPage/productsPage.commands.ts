import { ProductsPagePageObject } from './productsPage.po';

export interface ProductCommands {
  addItemProductToCart(itemName: string): void;
  openBurgerMenu(): void;
  }

const productPage = new ProductsPagePageObject();


Cypress.Commands.add('addItemProductToCart', (itemName: string) => {
  cy.get(`[data-test="add-to-cart-${itemName}"]`).click();
});

Cypress.Commands.add('openBurgerMenu', () => {
  productPage.burgerMenuButton.click();
});