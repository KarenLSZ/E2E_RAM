// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import properties from '../config/properties.json';

const authenticator = require('authenticator');

/* Shopz */
Cypress.Commands.add('loginAppShopz', () => {
  const testUser = getUserForTests();
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('Shopz Login');
  ssoLogin(testUser);
  cy.log('Logged into ShopZ');
});

Cypress.Commands.add('selectFromDropDownList', (ariaValue, textOfoptionSelected) => {
  cy.window().then((win) => {
    const element = win.document.querySelectorAll(`span[aria-labelledby="${ariaValue}-container"]`)[0];
    const event = new MouseEvent('mousedown');
    element.dispatchEvent(event);
  });
  cy.get(`#${ariaValue}-results>li`).contains(textOfoptionSelected).click({ force: true });
});

const getUserForTests = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};

const ssoLogin = (envUser) => {
  cy.visit(envUser.shopzUrl);
  cy.get('a[name="Sign in/Register"]').click();
  // Use user to login page
  cy.get('#username').focus().type(envUser.user);
  cy.get('#continue-button').click();
  cy.get('#credsDiv').click();
  // Use user and password page
  cy.get('#user-name-input').focus().type(envUser.user);
  cy.get('#password-input').focus().type(envUser.password, { log: false });
  cy.get('#login-button').click();
  // Validate we are in the right page
  cy.location('host', { timeout: 5000 }).should('include', 'preprod.login.w3.ibm.com');
  cy.wait(6000);
  // Waiting page to load
  cy.get('body', { timeout: 5000 }).then(($body) => {
    // synchronously query for element this will help on the single-sign-on
    if ($body.find('#otp-input', { timeout: 5000 }).length) {
      // Use google authenticator
      const token = authenticator.generateToken(envUser.secret);
      cy.get('#otp-input').focus().type(token, { delay: 150 });
      cy.get('#submit_btn').click({ force: true });
      cy.wait(15000);
    }
  });
};

/* RAM internal */
Cypress.Commands.add('loginAppRAM', () => {
  const testUserRAM = getUserForTestsRAM();
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('RAM Login');
  ssoLoginRAM(testUserRAM);
  cy.log('Logged into RAM');
});

Cypress.Commands.add('selectFromDropDownList', (ariaValue, textOfoptionSelected) => {
  cy.window().then((win) => {
    const element = win.document.querySelectorAll(`span[aria-labelledby="${ariaValue}-container"]`)[0];
    const event = new MouseEvent('mousedown');
    element.dispatchEvent(event);
  });
  cy.get(`#${ariaValue}-results>li`).contains(textOfoptionSelected).click({ force: true });
});

const getUserForTestsRAM = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};

const ssoLoginRAM = (envUser) => {
  cy.visit(envUser.ramUrl, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear()
    }
  });
  
  cy.get('button[id="login"]').click();
  cy.wait(5000);
  cy.get('body').then($body => {
    if ($body.find('button[class="start-button bx--btn bx--btn--primary bx--btn--field"]').length > 0) {   //evaluates as true
      cy.log('Active session...');
    }else{
      cy.log('Session not active...');
       // Use user to login page
      cy.get('#username').focus().type(envUser.user);
      cy.get('#continue-button').click();
      cy.get('#credsDiv').click();
      // Use user and password page
      cy.get('#user-name-input').focus().type(envUser.user);
      cy.get('#password-input').focus().type(envUser.password, { log: false });
      cy.get('#login-button').click();
      // Validate we are in the right page
      cy.location('host', { timeout: 5000 }).should('include', 'preprod.login.w3.ibm.com');
      cy.wait(6000);
      // Waiting page to load
      cy.get('body', { timeout: 5000 }).then(($body) => {
        // synchronously query for element this will help on the single-sign-on
        if ($body.find('#otp-input', { timeout: 5000 }).length) {
          // Use google authenticator
          const token = authenticator.generateToken(envUser.secret);
          cy.get('#otp-input').focus().type(token, { delay: 150 });
          cy.get('#submit_btn').click({ force: true });
          cy.wait(15000);
        }
      });
    }

  });
};


/*RAM internal (upper and lower case)*/
Cypress.Commands.add('loginAppRAM_UL', () => {
  const testUserRAM = getUserForTestsRAM_UL();
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('RAM Login (upper and lower case)');
  ssoLoginRAM_UL(testUserRAM);
  cy.log('Logged into RAM upper and lower case');
});

Cypress.Commands.add('selectFromDropDownList', (ariaValue, textOfoptionSelected) => {
  cy.window().then((win) => {
    const element = win.document.querySelectorAll(`span[aria-labelledby="${ariaValue}-container"]`)[0];
    const event = new MouseEvent('mousedown');
    element.dispatchEvent(event);
  });
  cy.get(`#${ariaValue}-results>li`).contains(textOfoptionSelected).click({ force: true });
});

const getUserForTestsRAM_UL = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};

const ssoLoginRAM_UL = (envUser) => {
  cy.visit(envUser.ramUrl, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear()
    }
  });
  
  cy.get('button[id="login"]').click();
  cy.wait(5000);
  cy.get('body').then($body => {
    if ($body.find('button[class="start-button bx--btn bx--btn--primary bx--btn--field"]').length > 0) {   //evaluates as true
      cy.log('Active session...');
    }else{
      cy.log('Session not active...');
       // Use user to login page
      cy.get('#username').focus().type(envUser.user_UL);
      cy.get('#continue-button').click();
      cy.get('#credsDiv').click();
      // Use user and password page
      cy.get('#user-name-input').focus().type(envUser.user_UL);
      cy.get('#password-input').focus().type(envUser.password, { log: false });
      cy.get('#login-button').click();
      // Validate we are in the right page
      cy.location('host', { timeout: 5000 }).should('include', 'preprod.login.w3.ibm.com');
      cy.wait(6000);
      // Waiting page to load
      cy.get('body', { timeout: 5000 }).then(($body) => {
        // synchronously query for element this will help on the single-sign-on
        if ($body.find('#otp-input', { timeout: 5000 }).length) {
          // Use google authenticator
          const token = authenticator.generateToken(envUser.secret);
          cy.get('#otp-input').focus().type(token, { delay: 150 });
          cy.get('#submit_btn').click({ force: true });
          cy.wait(15000);
        }
      });
    }

  });
};







/* RAM external */
Cypress.Commands.add('loginAppRAM_External', () => {
  const testUserRAM_External = getUserForTestsRAM_External();
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('RAM Login external');
  ssoLoginRAM_External(testUserRAM_External);
  cy.log('Logged external into RAM');
});

Cypress.Commands.add('selectFromDropDownList', (ariaValue, textOfoptionSelected) => {
  cy.window().then((win) => {
    const element = win.document.querySelectorAll(`span[aria-labelledby="${ariaValue}-container"]`)[0];
    const event = new MouseEvent('mousedown');
    element.dispatchEvent(event);
  });
  cy.get(`#${ariaValue}-results>li`).contains(textOfoptionSelected).click({ force: true });
});

const getUserForTestsRAM_External = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};

const ssoLoginRAM_External = (envUser) => {
  cy.visit(envUser.ramUrl);
  cy.get('button[id="login"]').click();
  cy.wait(5000);
  cy.get('body').then($body => {
    if ($body.find('button[class="start-button bx--btn bx--btn--primary bx--btn--field"]').length > 0) {   //evaluates as true
      cy.log('Active session...');
    }else{
      cy.log('Session not active...');
      // Use user to login page
      cy.get('#username').focus().type(envUser.userExternal);
      cy.get('#continue-button').click();
      cy.get('#password').focus().type(envUser.passwordExternal);
      cy.get('#signinbutton').click();
    }

  });

};


/* RAM external (upper and lower case)*/
Cypress.Commands.add('loginAppRAM_External_UL', () => {
  const testUserRAM_External = getUserForTestsRAM_External_UL();
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('RAM Login external');
  ssoLoginRAM_External_UL(testUserRAM_External);
  cy.log('Logged external into RAM');
});

Cypress.Commands.add('selectFromDropDownList', (ariaValue, textOfoptionSelected) => {
  cy.window().then((win) => {
    const element = win.document.querySelectorAll(`span[aria-labelledby="${ariaValue}-container"]`)[0];
    const event = new MouseEvent('mousedown');
    element.dispatchEvent(event);
  });
  cy.get(`#${ariaValue}-results>li`).contains(textOfoptionSelected).click({ force: true });
});

const getUserForTestsRAM_External_UL = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};

const ssoLoginRAM_External_UL = (envUser) => {
  cy.visit(envUser.ramUrl);
  cy.get('button[id="login"]').click();
  cy.wait(5000);
  cy.get('body').then($body => {
    if ($body.find('button[class="start-button bx--btn bx--btn--primary bx--btn--field"]').length > 0) {   //evaluates as true
      cy.log('Active session...');
    }else{
      cy.log('Session not active...');
      // Use user to login page
      cy.get('#username').focus().type(envUser.userExternal_UL);
      cy.get('#continue-button').click();
      cy.get('#password').focus().type(envUser.passwordExternal);
      cy.get('#signinbutton').click();
    }

  });

};
