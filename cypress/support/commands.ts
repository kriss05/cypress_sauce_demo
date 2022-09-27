import { LoginCommands } from './loginPage';
import { ProductCommands } from './productsPage';
import { CheckoutCartCommands } from './cartPage';
import { CheckoutInformationCommands } from './checkoutPages/checkoutInformationPage';
import { CheckoutOverviewCommands } from './checkoutPages/checkoutOverviewPage';
import { CheckoutCompleteCommands } from './checkoutPages/checkoutCompletePage';

declare global {
  namespace Cypress {
    interface Chainable<Subject>
      extends LoginCommands,
      ProductCommands,
      CheckoutCartCommands,
      CheckoutInformationCommands,
      CheckoutOverviewCommands,
      CheckoutCompleteCommands {
        resetStateApp(): void;
        logOut(): void;
      }
  }
}

Cypress.Commands.add('resetStateApp', () => {
  cy.openBurgerMenu();
  cy.get('#reset_sidebar_link').click();
});

Cypress.Commands.add('logOut', () => {
  cy.openBurgerMenu();
  cy.get('#logout_sidebar_link').click();
});