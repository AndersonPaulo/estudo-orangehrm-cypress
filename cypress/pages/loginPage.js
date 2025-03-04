class LoginPage{

    selectorsList(){
        const selectors ={

            usernameField:"[name='username']",
            passwordField:"[name='password']",
            loginbutton:".orangehrm-login-button",
            wrongCredentialAlert:".oxd-alert",
            requiredAlertLoginAndPassword:".oxd-text--span",
           
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('/auth/login')
    }

    LoginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginbutton).click()
    }
    checkAcessIvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
    checkAlertRequiredloginAndPassword(){
        cy.get(this.selectorsList().requiredAlertLoginAndPassword).eq(0)
        cy.get(this.selectorsList().requiredAlertLoginAndPassword).eq(1)
    }
    checkAlertRequiredLogin(){
        cy.get(this.selectorsList().requiredAlertLoginAndPassword).eq(0)
       
    }
    checkAlertRequiredPassword(){
        cy.get(this.selectorsList().requiredAlertLoginAndPassword).eq(0)
    }
}

export default LoginPage