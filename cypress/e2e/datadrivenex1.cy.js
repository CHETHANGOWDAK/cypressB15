import login from "../pageobjects/loginpage.po"
import dashboard from "../pageobjects/dashboardpage.po"
import addemployee from "../pageobjects/addemployee.po"


const {availablefixtures} = [
    {
        "name":"cypress/e2e/datadrivenex1.cy.js1",
        "context":"chethan"
        },
        {
        "name":"cypress/e2e/datadrivenex1.cy.js2",
        "context":"anil"
        },
        {
        "name":"cypress/e2e/datadrivenex1.cy.js3",
        "context":"srikanth"
        }
        
        ]
        
        
        describe('Automation Test Suite - ceate employes', function () {
                 availablefixtures.forEach((afixture) => {
                 describe(afixture.context, () => {
                 before(function () {
                cy.fixture(afixture.name).then(function (data) {
                            this.data = data;
                        })
                    })

            it('Cypress Test Case - create employees', function () {
  
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                 
                cy.xpath(login.userNameInput()).type('Admin')
                cy.get(login.passwordInput()).type('admin123')
                cy.get(login.loginBtn()).click()
                    
               // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
                cy.url().should('include','web/index.php/dashboard/index')
                cy.contains(dashBoard.dashboarMenuitem()).should('be.visible')
                cy.contains(dashBoard.pimMenuitem()).click()
              
               
               addemployee.createEmployee(this.data.firstname,this.data.lastname)
            })
        })
    })
})
