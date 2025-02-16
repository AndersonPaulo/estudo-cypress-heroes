class homePage{

    selectorsList(){

        const selectors = {

            logoutButton : "nav > .flex > :nth-child(2) > .undefined",
            creatNewHeroButton : "a > .undefined",
            likeButton: "[data-cy='like']",
            priceButton: " [data-cy='money']",
            priceYesButton:".gap-2 > .text-white",
            priceNoButton: ".gap-4 > .gap-2 > .text-gray-800",
            editButton: "[data-cy='pencil']",
            checkEditPage: "[data-cy='nameInput']",
            deleteButton: "[data-cy='trash']",
            deleteNoButton: ".gap-4 > .gap-2 > .text-gray-800",
            deleteYesButton: ".gap-2 > .text-white"
        }
        return selectors
    }
    logout(){

        cy.get(this.selectorsList().logoutButton).click()
         
    }
    creatNewHeroButton(){

        cy.get(this.selectorsList().creatNewHeroButton).click()
    }
    LikeButton(){

        cy.get(this.selectorsList().likeButton).eq(0).click()
    }
    priceButton(){

        cy.get(this.selectorsList().priceButton).eq(0).click()
        cy.get(this.selectorsList().priceYesButton).eq(0).click()
        cy.get(this.selectorsList().priceButton).eq(0).click()
        cy.get(this.selectorsList().priceNoButton).eq(0).click()
    }
    editButton(){
        cy.get(this.selectorsList().editButton).eq(0).click()
        cy.get(this.selectorsList().checkEditPage)
    }
    deleteButton(){

        cy.get(this.selectorsList().deleteButton).eq(0).click()
        cy.get(this.selectorsList().deleteNoButton).click()
        cy.get(this.selectorsList().deleteButton).eq(0).click()
        cy.get(this.selectorsList().deleteYesButton).click()
    }
}

export default homePage