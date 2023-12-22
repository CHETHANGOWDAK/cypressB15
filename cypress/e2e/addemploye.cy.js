

import login from "../pageobjects/loginpage.po"
import dashBoard from "../pageobjects/dashboardpage.po"
import addemployee from "../pageobjects/addemployee.po"
import addemployeedata from '../fixtures/ceateemployee.json'

describe('verify login functionality', () => {
    
    it('verify addemploye eith valid details', () => {
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // here we have login locators imported from POM page (i the lce of('input[name="username"]')//login.usernameInput )

      cy.get(login.userNameInput()).type('Admin')
      cy.get(login.passwordInput()).type('admin123')
      cy.get(login.loginBtn()).click()
      
    //Assertions for full url verification
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      // assertionn for partial url verifycation
      cy.url().should('include','web/index.php/dashboard/index')
// here we have login locators imported from POM page (in dashboard place we have given dashboard.dashboardmenuitem and dshboard.pimmenuitem)
cy.contains(dashBoard.dashboarMenuitem()).should('be.visible')
      cy.contains(dashBoard.pimMenuitem()).click()
// here we have login locators imported from POM page


//cy.contains(addemployee.addEmployeeSubMenuItem()).click()         //"dashboard" locator
//cy.get(addemployee.firstNameInput()).type("harish")               //first name locator
//cy.get(addemployee.lastNameInput()).type("kumar")                 //last name locator
//cy.get(addemployee.saveBtn()).click()                             //add employee locator
//cy.contains(addemployee.successMessage()).should('be.visible')   //successfully saved message locator
//}


      addemployee.createEmployee(addemployeedata.firstname,addemployeedata.lastname)
    })
})










