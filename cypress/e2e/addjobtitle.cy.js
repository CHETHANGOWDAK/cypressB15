import logindata from '../fixtures/login.json'
import addjobtitledata from '../fixtures/addjobtitle.json'

describe('verify addjob title functionality', () => {

  it.only('verify adding job title with valid inputs', () => {

    //for login scripts we hav configured in the commands.js for re usble purpose

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.get('input[name="username"]').type('Admin')
    //cy.get('input[type="password"]').type('admin123')
    //cy.get('button[type="submit"]').click()
    //Assertions for full url verification
    //  cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // assertionn for partial url verifycation
    //  cy.url().should('include','web/index.php/dashboard/index')
    //  cy.contains('Dashboard').should('be.visible')

    // cy.login("Admin","admin123") in this place we have import from fixtures logindata.json file(logindata.username,logindata.password)
    cy.login(logindata.username, logindata.password)

    cy.navigatetoAddJobPage()

 
    let r = (Math.random() + 1).toString(36).substring(7);
    //in this place have import from fixtures adjobtitledate.json file(addjobtitledata.jobtitle)
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobtitledata.jobtitle + r)
    //in this place have import from fixtures adjobtitledate.json file(addjobtitledata.jobdescription)
    cy.get('textarea[placeholder="Type description here"]').type(addjobtitledata.jobdescription)
    cy.get('button[type="submit"]').click()
    cy.contains('Successfully Saved').should("be.visible")

  })
  it('verify mandatory fieldjob in add job title page', () => {

    cy.login("Admin", "admin123")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should("be.visible")
  })

  it.only('verify mandatory fieldjob in add job title page', () => {

    cy.login("Admin", "admin123")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('whfjwhfjkhfjhfdfhjhfjkwngkluhgkjf,fwfvklfdjbffjgkjbfvkjfdkvjbfvkfhfkhflkjwdhfidwhfohfoifgiohfgfkjghfleighf')
    cy.contains('Should not exceed 100 characters').should('be.visible')
  })
  it.only('verify mandatory fieldjob in add job title page', () => {
    cy.viewport(414, 896)
    cy.login("Admin", "admin123")
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('textarea[placeholder="Type description here"]').type('whfjwhfjkhfjhfdfhjhfjkwngkluhgkjf,fwfvklfdjbffjgkjbfvkjfdkvjbfvkfhfkhflkjwdhfidwhfohfoifgiohfgfkjghfleighfcladHdlhdlfhdlhdhvldksjhdhfdjkfdjnfdiuhfdhfkdhfdihdj,dbvdkuvkdjkdudjddjkcjvhdsufyiowughrgyrughjfgkjghrlghgljfhglrugfhgkjshlviufghfjghfjhgkhfghghkhghgkhgkjghkghjkfhgkfghfjghfhgkfhgfkhgkfghfkhgfghfjghfjghfjhgfjhgkdfjghfkjghfkgjhfslghahg;foighfhgkfuhgieghfhlguheghjkfghisyerghkfghfidugerjghfgyfghegyhe')
    cy.contains('Should not exceed 400 characters').should('be.visible')
  })
})