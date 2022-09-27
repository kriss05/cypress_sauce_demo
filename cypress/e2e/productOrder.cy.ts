// @ts-check
import { ProductsPagePageObject } from "../support/productsPage";
import { CheckoutCartPageObject } from "../support/cartPage";
import { CheckoutInformationPageObject } from "../support/checkoutPages/checkoutInformationPage";
import { CheckoutCompletePageObject } from '../support/checkoutPages/checkoutCompletePage';

const productPage = new ProductsPagePageObject();
const checkoutCart = new CheckoutCartPageObject();
const checkoutInformation = new CheckoutInformationPageObject();
const checkoutComplete = new CheckoutCompletePageObject();
const firstName = 'firstName' + Math.random().toString(36).substring(2, 9);
const lastName = 'lastName' + Math.random().toString(36).substring(2, 9);


describe('When the user is on the checkout overview page', () => {
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
        cy.fillFirstNameInput(firstName);
        cy.fillLastNameInput(lastName);
        cy.fillPostCodeInput('0000000');
        checkoutInformation.continueButton.click();
    });

    it('user can be able order product', () => {
        const successfullMessage = 'thank you for your order';
        cy.clickFinishButton();
        checkoutComplete.successfulCheckoutPageHeader.should('have.text', successfullMessage.toUpperCase());
        cy.clickBackHomeButton();
    });

    after(() => {
        cy.logOut();
    });
});