import { CheckoutInformationPageObject } from './checkoutInformationPage.po';

export interface CheckoutInformationCommands {
  fillFirstNameInput(firstName: string): void;
  fillLastNameInput(lastName: string): void;
  fillPostCodeInput(postCode: string): void;
  clickContinueButton(postCode: string): void;
}

const checkoutInformation = new CheckoutInformationPageObject();


Cypress.Commands.add('fillFirstNameInput', (firstName: string) => {
  checkoutInformation.userFirstInput.type(firstName);
});

Cypress.Commands.add('fillLastNameInput', (lastName: string) => {
  checkoutInformation.userLastInput.type(lastName);
});

Cypress.Commands.add('fillPostCodeInput', (postCode: string) => {
  checkoutInformation.postalCodeInput.type(postCode);
});

Cypress.Commands.add('clickContinueButton', () => {
  checkoutInformation.continueButton.click();
});