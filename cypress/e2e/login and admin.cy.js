import logindata from '../fixtures/login.json'

import login from'../pageobjects/loginpage.po'
describe('verify login functionality', () => {
    
  it('verify login functionslity with valid creds', () => {

    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //i have configured base url in (cypress.config.js) filehere i heve gven partial url for login
    
    cy.visit('/web/index.php/auth/login')

    // here we have login locators imported from POM page (i the lce of('input[name="username"]')//login.usernameInput )
    cy.xpath(login.userNameInput()).type(logindata.username)
    cy.get(login.passwordInput()).type(logindata.password)
    cy.get(login.loginBtn()).click()
    cy.contains('Dashboard').should('be.visible')
    
  })
  it('verify login functionslity with invalid username valid password', () => {

    cy.visit('web/index.php/auth/login')
    cy.xpath(login.userNameInput()).type('Admin1')
    cy.get(login.passwordInput()).type('admin123')
    cy.get(login.loginBtn()).click()
    cy.contains(login.loginErrorMessage()).should('be.visible')
})
it('verify login functionslity with valid username invalid password', () => {

  cy.visit('web/index.php/auth/login')
  cy.xpath(login.userNameInput()).type('Admin')
  cy.get(login.passwordInput()).type('admin1234')
  cy.get(login.loginBtn()).click()
  cy.contains(login.loginErrorMessage()).should('be.visible')
})
it('verify login functionslity with invalid user name invalid password', () => {

  cy.visit('web/index.php/auth/login')
  cy.xpath(login.userNameInput()).type('Admin1')
  cy.get(login.passwordInput()).type('admin1234')
  cy.get(login.loginBtn()).click()
  cy.contains(login.loginErrorMessage()).should('be.visible')
})
describe('verify Admin module', () => {
    
  it('verify admin module functionslity ', () => {

    cy.visit('web/index.php/auth/login')
    cy.xpath(login.userNameInput()).type('Admin')
    cy.get(login.passwordInput()).type('admin123')
    cy.get(login.loginBtn()).click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Admin').click()
    cy.contains('User Management ').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type("Admin")
    cy.contains('-- Select --').click()
    cy.contains('Admin').click()
    cy.get('input[placeholder="Type for hints..."]').type('Janae Nader')
    
    cy.contains('Enabled').click()
    cy.get('button[type="submit"]').click()
})
})
})


//in this i need to leaen about radio buttons