class createHeroesPage{


    selectorsList(){

        const selectors = {
            
            createHeroesButton : "a > .undefined",
            fillName: "[data-cy='nameInput']",
            fillPrice: "[data-cy='priceInput']",
            fillFans: "[data-cy='fansInput']",
            fillSave: "[data-cy='savesInput']",
            powersSelect:"[data-cy='powersSelect']",
            avatarSelect: "[data-cy='avatarFile']",
            submitButton: ".text-white"
        }
        return selectors

    }
    CreateHeroes(){

        cy.get(this.selectorsList().createHeroesButton).click()
        cy.get(this.selectorsList().fillName).type("Lara Croft")
        cy.get(this.selectorsList().fillPrice).type("36")
        cy.get(this.selectorsList().fillFans).type("5")
        cy.get(this.selectorsList().fillSave).type("10")
        cy.get(this.selectorsList().powersSelect).select(8)
        cy.get(this.selectorsList().avatarSelect).selectFile("../TRR_Shotgun_Model.webp")
        cy.get(this.selectorsList().submitButton).eq(1).click()

    }


}

export  default createHeroesPage