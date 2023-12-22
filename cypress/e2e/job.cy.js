
import login from "../pageobjects/loginpage.po"
describe('verify login functionality', () => {
    
    it('verify login functionslity with valid creds', () => {
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // here we have login locators imported from POM page (i the lce of('input[name="username"]')//login.usernameInput )

      cy.get(login.userNameInput()).type('Admin')
      cy.get(login.passwordInput()).type('admin123')
      cy.get(login.loginBtn()).click()
      
    //Assertions for full url verify
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      // assertionn for partial url verifycation
      cy.url().should('include','web/index.php/dashboard/index')

      
      cy.contains('Dashboard').should('be.visible')

    })
    it('verify job module functionolity', () => {
    // here we have login locators imported from POM page (i the lce of('input[name="username"]')//login.usernameInput )

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath(login.userNameInput()).type('Admin')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginBtn()).click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job ').click()
      //  cy.contains('Job Titles').click()
      
})
})// here we have imported from POM page from addemployee pom
////'Add Employee'(1)
//'input[name="firstName"'(2)
//'input[name="lastName"]'(3)
//'button[type="submit"]'(4)
//'Successfully Saved'(5)
