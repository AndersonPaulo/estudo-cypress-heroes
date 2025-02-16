
class loginPages {

    selectorsList(){

        const selector = {
            
            loginButton: ".undefined",
            email: "[data-cy='email']",
            password: "[data-cy='password']",
            sumbitButton:".w-full",
            checkHomePage:"a > .undefined"          


        }
        return selector
    }
    acessLoginPage(){
        cy.visit('/heroes')

    }
    loginSuccess(email,password){
        
        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()
        cy.get(this.selectorsList().checkHomePage)
    }
    UserEmailwrong(email,password){

        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()
    }
    UserPasswordWrong(email,password){

        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()

    }
    UserEmpty(email,password){

        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()

    }
    UserEmailEmpty(email,password){

        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()

    }
    UserPasswordEmpty(email,password){

        cy.get(this.selectorsList().loginButton).eq(0).click()
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().sumbitButton).eq(3).click()

    }
}

export default loginPages