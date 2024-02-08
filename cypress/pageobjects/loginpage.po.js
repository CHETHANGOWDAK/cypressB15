class loginpage{

usrnameInput(){
return'input["placeholder="Username"]'
}
passwordInput(){
return'input[type="password"]'
}
loginButton (){
return'button[type="submit"]'
}
loginErrorMessage (){
return'Invalid credentials'
}
}
//object
const login=newloginpage()
//export
exportdefaultlogin