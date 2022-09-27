// @ts-check
import { ProductsPagePageObject } from "../support/productsPage";
import { CheckoutCartPageObject } from "../support/cartPage";

const productPage = new ProductsPagePageObject();
const checkoutCart = new CheckoutCartPageObject();


describe('When the user is on the product page', () => {
  before(() => {
    cy.fixture('user').then((user) => {
      cy.visit('/');
      cy.userLogin(user.name, user.password);
    });
    productPage.burgerMenuButton.should('be.visible');
    productPage.inventoryItem.should('have.length', 6);
  });

  it('user can be able add prduct to cart', () => {
    cy.addItemProductToCart('sauce-labs-backpack');

    productPage.shoppingCartBadge
      .should('be.visible')
      .and('have.text', '1');
    productPage.removeFromCartButtons.should('have.length', 1);
    productPage.shoppingCartIcon.click();
    cy.url().should('include', '/cart.html')

    checkoutCart.cartItem.contains('Sauce Labs Backpack').should('be.visible');
  });

  after(() => {
    cy.logOut();
  });
});