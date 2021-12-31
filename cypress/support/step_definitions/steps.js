import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged in ShopZ', () => {
  cy.loginAppShopz();
});

Then('I see home page', () => {
  cy.get('form[name="form1"]').should('exist');
});

And('I go to {string} tab', (tab) => {
  switch (tab) {
    case 'My orders': {
      cy.wait(2000);
      cy.get('a[href="ShopzSeries.wss?action=orders"]').first().click();
    }
  }
});

And('I go to {string} sub tab', (subTab) => {
  switch (subTab) {
    case 'Create new order': {
      cy.wait(2000);
      cy.get('a[href="ShopzSeries.wss?action=ordersCreate"]').first().click();
    }
  }
});

Then('I click open source option', () => {
  cy.get('label[for="zOS_Open_Source"]').click();
});

Then('I click continue', () => {
  cy.get('button[name="Continue"]').click();
});

And('I select All Languages', () => {
  cy.wait(5000);
  cy.selectFromDropDownList('select2-language', 'All');
});

And('I click show catalog', () => {
  cy.get('button[name="Show catalog"]').click();
});

And('I select the first product in the list', () => {
  cy.get('input[name="PRD:S0181XZ_9.01.00_ENU_SRELMVS"]').click({ force: true });
});

And('I click Sumbit', () => {
  cy.get('button[name="Submit"]').first().click();
});
