class MyInfoPage {

    selectorsList() {
            const selector = {

               
                firstNameField:"[name='firstName']",
                middleNameField:"[name='middleName']",
                lastNameField:"[name='lastName']",
                genericField:".oxd-input",
                dateField:"[placeholder='yyyy-dd-mm']",
                dateCloseButton:".--close",    
                selectGeneric :"[clear='false']",
                secondItemSelect:".oxd-select-dropdown > :nth-child(15)",
                thirdItemSelect:".oxd-select-dropdown > :nth-child(2)",
                checkGenerate: ".oxd-radio-input",
                submitbutton:"[type='submit']"
            }

        return selector
        }
        navegationInfo(){

      
            cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
            cy.get(this.selectorsList().middleNameField).clear().type('middleNameTest')
            cy.get(this.selectorsList().lastNameField).clear().type('lastNameTest')
            cy.get(this.selectorsList().genericField).eq(4).clear().type('555252')
            cy.get(this.selectorsList().genericField).eq(5).clear().type('231456')
            cy.get(this.selectorsList().genericField).eq(6).clear().type('ABFS5252')
            cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-21-08')
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().dateField).eq(1).clear().type('1988-21-08')
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().checkGenerate).eq(0).click()
            cy.get(this.selectorsList().selectGeneric).eq(0).click({force:true})
            cy.get(this.selectorsList().secondItemSelect).click()
            cy.get(this.selectorsList().selectGeneric).eq(1).click({force:true})
            cy.get(this.selectorsList().thirdItemSelect).click()
            
            cy.get(this.selectorsList().submitbutton).eq(0).click()
            cy.get('body').should('contain','Successfully Updated')
            cy.get('.oxd-toast-close')
        }
   
}

export default MyInfoPage