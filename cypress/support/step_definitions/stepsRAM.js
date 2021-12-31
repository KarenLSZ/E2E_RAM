import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

/* RAM Login internal normal */
Given('I am logged in RAM', () => {
  cy.loginAppRAM();
});

/* RAM Login internal (upper and lower case) */
Given('I am logged in RAM to upper and lower case', () => {
    cy.loginAppRAM_UL();
  });

/* RAM Login external */
Given('I am logged external in RAM', () => {
  cy.loginAppRAM_External();
});

/* RAM Login external (upper and lower case) */
Given('I am logged external in RAM to upper and lower case', () => {
    cy.loginAppRAM_External_UL();
  });

Then('I see home page RAM', () => {
  cy.get('div[class="home-body"]').should('exist');
});
//-----------------------------------------------------------------------------------
/** ***************************Change application****************** */
And('I change of application', () => {
  cy.wait(2000);
  cy.get('div[class="bx--list-box__field"]').click();
  cy.wait(2000);
  cy.get('div[id="ShopzSeries"]').click();
  cy.wait(1000);
  cy.get('button[ id="start"]').click();
});

//-----------------------------------------------------------------------------------
/** ***************************Create request****************** */
/* Option "My request request" */
And('I go to My request option', () => {
  cy.wait(2000);
  cy.get('div[class="bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron"]').click();
});

/* Sub option "Create requests" */
And('I go to Create requests sub option', () => {
  cy.wait(2000);
  cy.get('ibm-sidenav-item[id="my_request_create"]').click();
});

/* Select the IBM user support application role */
And('I select IBM user support application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="IBM user support"]').click();
});

/* Select the IBM notice administrator application role */
And('I select IBM notice administrator application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="IBM notice administrator"]').click();
});

/* Select the IBM delete administrator application role */
And('I select User delete administrator application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="User delete administrator"]').click();
});

/* Select the IBM order support application role */
And('I select IBM order support application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="IBM order support"]').click();
});

/* Select the IBM order support for re-drive application role */
And('I select IBM order support for re-drive application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="IBM order support for re-drive"]').click();
});

/* Select the Customer number event subscriber application role */
And('I select Customer number event subscriber application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="Customer number event subscriber"]').click();
});

/* Select the IBM order support administrator application role */
And('I select IBM order support administrator application role', () => {
  cy.wait(1000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(1000);
  cy.get('li[title="IBM order support administrator"]').click();
});

/* Select the IBM group manager application role */
And('I select IBM group manager application role', () => {
  cy.wait(2000);
  cy.get('div[class="bx--dropdown bx--list-box"]').click();
  cy.wait(2000);
  cy.get('li[title="IBM group manager"]').click();
});

/* Select the group to be admin */
And('I select the first group', () => {
  cy.wait(1000);
  cy.get('div[id="select_group"]').click();
  cy.wait(1000);
  cy.get('div[tabindex="-1"]').click();
  cy.wait(9000);
  // cy.get('li').first();
});

/* Close the modal alert */
And('I close the alert', () => {
  cy.wait(1000);
  cy.get('button[class="bx--modal-close"]').click();
});

/* Select the IBM internal type application role */
And('I select IBM internal type', () => {
  cy.wait(1000);
  cy.get('label[ id="label-radio-2"]').click();
  cy.wait(1000);
  cy.get('[type="radio"]').check('2');
});

/* Select the country */
And('I select all country role', () => {
  cy.wait(2000);
  cy.get('button[id="open_country_btn"]').click();
  cy.wait(1000);
  cy.get('label[for="select_all"]').click();
  cy.wait(1000);
  cy.get('button[id="confirm"]').click();
});

/* Add the justification */
And('I add the justification', () => {
  cy.wait(2000);
  cy.get('input[id="reason"]').type('This is a automation test, please reject');
});

/* Add the justification */
/* And('I click submit the request', () => {
    cy.wait(2000);
    cy.get('button[id="submit_btn"]').click();
}); */

//-----------------------------------------------------------------------------------
/** ***************************Become user******************* */
/* Review request */
And('I go to Review requests  sub option', () => {
  cy.wait(2000);
  cy.get('ibm-sidenav-item[id="my_request_review"]').click();
});

/* Review details of request */
And('I click to application role to view the details', () => {
  cy.wait(2000);
  cy.get('a[class="active-link"]').first().click();
});
//-----------------------------------------------------------------------------------
/** ***************************Become user******************* */
/* Sub option "Become user" */
And('I go to Become user option', () => {
  cy.wait(2000);
  cy.get('ibm-sidenav-item[id="become-user_id"]').click();
});

/* Add email o user id to become user */
And('I add the user id', () => {
  cy.wait(1000);
  cy.get('div[class="bx--text-input__field-wrapper"]').click();
  cy.get('div[class="bx--text-input__field-wrapper"]').type('apoline-ehret@fr.ibm.com');
});

/* Click to become user */
And('I click in the become user button', () => {
  cy.wait(2000);
  cy.get('button[id="search_btn"]').click();
});
//-----------------------------------------------------------------------------------
/** ***************************Administer groups******************* */
/* Remove and Add user */
/* Select the tab Adminiter group option */
And('I go to Administer groups option', () => {
  cy.wait(2000);
  cy.get('ibm-sidenav-item[id="administer-group"]').click();
});

/* Select Group name */
Then('I select the group name option', () => {
  cy.wait(1000);
  cy.contains('Customer number').click();
  cy.wait(1000);
  cy.contains('Group name').click();
});

/* Add the name of group */
And('I add BMW in the input', () => {
  cy.wait(2000);
  cy.get('input[id="ibm-label-0"]').click();
  cy.get('input[id="ibm-label-0"]').type('BMW');
  cy.wait(2000);
});

/* Click search button */
And('I click search button', () => {
  cy.wait(2000);
  cy.get('button[id="search_btn"]').click();
});

/* Open the click active */
And('I click to open the link', () => {
  cy.wait(2000);
  cy.get('a[class="active-link"]').click();
  cy.contains('BMW').click();
});

/* Go to the member tab */
Then('I go to Member tab', () => {
  cy.wait(2000);
  cy.get('a[id="n-tab-2-header"]').click();
});

/* Select the user member */
And('I select the user', () => {
  cy.wait(1000);
  cy.contains('Karen.SZuniga@ibm.com(I)')
    .prev('td')
    .prev('td')
    .click()
    .find('.bx--checkbox')
    .check({ force: true });
});

/* Delete select member */
And('I click delete select member button', () => {
  cy.wait(2000);
  cy.get('button[id="delete_member_btn"]').click();
});

/* Karen */
And('I add the reason to remove the user', () => {
  cy.wait(2000);
  cy.get('input[id="ibm-label-3"]').type('This is a automation test to remove user');
});

/* Delete button */
And('I click delete button', () => {
  cy.wait(2000);
  cy.get('button[class="bx--btn bx--btn--danger bx--btn--field"]').click();
});

/* Add new member */
And('I click to add member button', () => {
  cy.wait(2000);
  cy.get('button[id="add_member_btn"]').click();
});

/* Select IBM intranet ID option */
And('I select the IBM intranet ID option', () => {
  cy.wait(1000);
  cy.contains('IBM ID').click();
  cy.wait(1000);
  cy.contains('IBM intranet ID').click();
});

/* Add the IBM intranet ID */
And('I add the IBM intranet ID user in the input', () => {
  cy.wait(2000);
  cy.get('input[id="ibm-label-3"]').click();
  cy.get('input[id="ibm-label-3"]').type('Karen.SZuniga@ibm.com');
  cy.wait(2000);
});

And('I click search button', () => {
  cy.wait(2000);
  cy.get('button[id="search_btn"]').click();
});

/* Add new member */
And('I click add button', () => {
  cy.wait(5000);
  cy.get('footer[class="bx--modal-footer"]').click();
});

/**/
