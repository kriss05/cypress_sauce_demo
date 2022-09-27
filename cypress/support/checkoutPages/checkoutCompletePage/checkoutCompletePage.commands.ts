import { CheckoutCompletePageObject } from './checkoutCompletePage.po';

export interface CheckoutCompleteCommands {
  clickBackHomeButton(): void;
  }

const checkoutComplete = new CheckoutCompletePageObject();


Cypress.Commands.add('clickBackHomeButton', () => {
  checkoutComplete.backHomeButton.click();
});