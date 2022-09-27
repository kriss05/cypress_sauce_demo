import { CheckoutCartPageObject } from './cartPage.po';

export interface CheckoutCartCommands {
    goToCheckoutInformation(): void;
  }

const checkoutCart = new CheckoutCartPageObject();

Cypress.Commands.add('goToCheckoutInformation', () => {
  checkoutCart.checkoutButton.click();
});
