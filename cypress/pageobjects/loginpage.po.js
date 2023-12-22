class loginPage{


    userNameInput(){

        return '//input[@name="username"]'
    }
    passwordInput(){
        return 'input[name="password"]'
    }
    loginBtn(){

        return 'button[type="submit"]'
    }

    loginErrorMessage(){
  return 'Invalid credentials'

    }
}
//object
const login = new loginPage()

//export
 export default login