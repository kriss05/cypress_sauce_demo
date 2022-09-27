// @ts-check

describe('When the user is on the start page', () => {
  before(() => {
    cy.visit('/');
  });

  it('user be able to login to the shop', () => {
    cy.fixture('user').then((user) => {
      cy.userLogin(user.name, user.password);
    });
  });

  after(() => {
    cy.logOut();
  });
});
