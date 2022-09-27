// @ts-check
import { ProductsPagePageObject } from "../support/productsPage";
import { CheckoutCartPageObject } from "../support/cartPage";
import { CheckoutInformationPageObject } from "../support/checkoutPages/checkoutInformationPage";
import { CheckoutOverviewPageObject } from '../support/checkoutPages/checkoutOverviewPage';

const productPage = new ProductsPagePageObject();
const checkoutCart = new CheckoutCartPageObject();
const checkoutInformation = new CheckoutInformationPageObject();
const checkoutOverview = new CheckoutOverviewPageObject();
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

    it('check that the description of the order is consistent with the order', () => {
        checkoutOverview.cartItem.should('contain.text', 'Sauce Labs Backpack');
        checkoutOverview.productPrice.should('contain.text', '29.99');
        checkoutOverview.quantityItem.should('contain.text', '1');
        checkoutOverview.paymentInformation.should('contain.text', 'SauceCard #31337');
        checkoutOverview.shippingInformation.should('contain.text', 'FREE PONY EXPRESS DELIVERY!');
        checkoutOverview.productTotalPrice.should('contain.text', '29.99');
        checkoutOverview.productTaxPrice.should('contain.text', '2.40');
        checkoutOverview.productTaxTotalPrice.should('contain.text', '32.39');
    });

    after(() => {
        cy.logOut();
    });
});