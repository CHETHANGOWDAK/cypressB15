import login from '../pageobjects/loginpage.po'

describe('verify login functionality', () => {
    it('login with valid creds', () => {
        cy.get(login.usernameInput()).type('Admin')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginButton()).click()
        
      
    })
  })