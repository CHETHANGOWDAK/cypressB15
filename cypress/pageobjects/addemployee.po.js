class addemployeepage{

    addEmployeeSubMenuItem(){
return  'Add Employee'
}

firstNameInput(){


    return 'input[name="firstName"'
}
lastNameInput(){

    return 'input[name="lastName"]'
}
saveBtn(){

    return 'button[type="submit"]'
}
successMessage(){

    return 'Successfully Saved'
}


createEmployee(firstName,lastname){
      cy.contains(this.addEmployeeSubMenuItem()).click()
      cy.get(this.firstNameInput()).type(firstName)
      cy.get(this.lastNameInput()).type(lastname)
      cy.get(this.saveBtn()).click()
      cy.contains(this.successMessage()).should('be.visible')
    }

}


const addemployee = new addemployeepage()
export default addemployee






