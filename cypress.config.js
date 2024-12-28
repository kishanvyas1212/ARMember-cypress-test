const { defineConfig } = require("cypress");
const cloudPlugin = require('cypress-cloud');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cloudPlugin(on, config); // Integrate Cypress Cloud recording

    },
    specPattern: 'cypress/integration/**/*.spec.{js,ts,jsx,tsx}',
  },
});
