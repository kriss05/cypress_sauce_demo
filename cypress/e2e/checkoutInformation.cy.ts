// @ts-check
import { ProductsPagePageObject } from "../support/productsPage";
import { CheckoutCartPageObject } from "../support/cartPage";
import { CheckoutInformationPageObject } from "../support/checkoutPages/checkoutInformationPage";

const productPage = new ProductsPagePageObject();
const checkoutCart = new CheckoutCartPageObject();
const checkoutInformation = new CheckoutInformationPageObject();


describe('When the user is on the checkout information page', () => {
    before(() => {
        cy.fixture('user').then((user) => {
            cy.visit('/');
            cy.userLogin(user.name, user.password);
        });
        productPage.burgerMenuButton.should('be.visible');
        productPage.inventoryItem.should('have.length', 6);
        cy.addItemProductToCart('sauce-labs-backpack');
        productPage.removeFromCartButtons.should('have.length', 1);
        productPage.shoppingCartIcon.click();
        cy.url().should('include', '/cart.html');
        checkoutCart.checkoutButton.click();
        cy.url().should('include', '/checkout-step-one.html');
    });

    it('user can be able to fill in all fields', () => {
        const firstName = 'firstName' + Math.random().toString(36).substring(2, 9);
        const lastName = 'lastName' + Math.random().toString(36).substring(2, 9);

        cy.fillFirstNameInput(firstName);
        cy.fillLastNameInput(lastName);
        cy.fillPostCodeInput('0000000');

        checkoutInformation.userFirstInput.should('have.value', firstName);
        checkoutInformation.userLastInput.should('have.value', lastName);
        checkoutInformation.postalCodeInput.should('have.value', '0000000');
    });

    after(() => {
        cy.logOut();
    });
});