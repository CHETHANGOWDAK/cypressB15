

describe('verify demoqa  functionality', () => {
    
    it('verify element functionaliry', () => {
      
      Cypress.on("uncaught:exception", () => {
  
        return false;
      });
  
      cy.visit('https://demoqa.com/')
      cy.contains('Elements').click()
      cy.contains('Text Box').click()
      cy.get('input[placeholder="Full Name"]').type("harish")
      cy.get('input[type="email"]').type("harishgmailcom")
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.get('textarea[placeholder="Current Address"]').type("Chennei")
      
      cy.get('textarea[id="permanentAddress"]').type("Hanumanthanagara")

      cy.get('button[id="submit"]').click({force:true})

     cy.get('div[id="output"]').should("be.visible")
    })
})
