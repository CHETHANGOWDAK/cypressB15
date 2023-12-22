describe("test suit name", () => {

 before(()=>{
  cy.log("this is before all hook")
})
beforeEach(()=>{
 cy.log("this is beforeEach  hook")
})
after(()=>{
 cy.log("this is after all hook")
})
afterEach(()=>{
 cy.log("this is after ech hook")
})


 it("test case 1", () => {
        cy.log("1st it block body")

})  

    it("test case 2", () => {
        cy.log("2nd it block body")


})

    it("test case 3", () => {
        cy.log("3rd it block body")


})
    it("test case 4", () => {
        cy.log("4th it block body")


}) 
})