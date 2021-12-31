import properties from '../../config/properties.json';

const authenticator = require('authenticator');

const getUserForTests = () => {
  const environment = Cypress.env('ENVIRONMENT');
  const props = properties[environment];
  return { ...props };
};
