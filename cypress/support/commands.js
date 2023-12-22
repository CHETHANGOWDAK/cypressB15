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



import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()
        //Assertions for full url verification
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        // assertionn for partial url verifycation
        cy.url().should('include','web/index.php/dashboard/index')
         cy.contains('Dashboard').should('be.visible')


 })

 
Cypress.Commands.add('navigatetoAddJobPage', (username, password) => {
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
         

})