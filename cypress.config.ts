import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 7000,
    viewportWidth: 1500,
    viewportHeight: 1200,
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*cy.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})