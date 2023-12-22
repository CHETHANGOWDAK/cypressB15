const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    "specPattern": "**/*.feature",
    "baseUrl":"https://opensource-demo.orangehrmlive.com/",
    "projectId": "qmtptr",

    "video":true,
    "videoCompression":32,
    "videosFolder":"cypress/chethan",
    "viewportWidth":1600,
    "viewportHeight":900,

    "defaultCommandTimeout":20000,
    "pageloadtimeout":120000,
    "retries":{
      "openMode":1,
      "runMode":1,
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
