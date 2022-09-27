import { CheckoutOverviewPageObject } from './checkoutOverviewPage.po';

export interface CheckoutOverviewCommands {
  clickFinishButton(): void;
  }

const checkoutOverview = new CheckoutOverviewPageObject();


Cypress.Commands.add('clickFinishButton', () => {
  checkoutOverview.finishButton.click();
});