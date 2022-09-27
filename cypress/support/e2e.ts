import './commands';
import './loginPage/loginPage.commands';
import './productsPage/productsPage.commands'
import './cartPage/cartPage.commands'
import './checkoutPages/checkoutInformationPage/checkoutInformationPage.commands'
import './checkoutPages/checkoutOverviewPage/checkoutOverviewPage.commands'

Cypress.on('uncaught:exception', () => false);
