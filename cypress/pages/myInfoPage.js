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
                submitbutton:"[type='submit']",
                addButtom:".oxd-button--text",
                browserButton:".oxd-file-button",
                inputFileButton:".oxd-file-input-div",
                textAreaField: ".oxd-textarea"
            }

        return selector
        }
        fillPersonalDetails(firstName,middleName,lastName){

      
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().middleNameField).clear().type(middleName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)          
            
            
        }
        fillEmployeeDetails(employeId,otherId,driveLicence,licenceExpiry){
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(driveLicence)
            cy.get(this.selectorsList().dateField).eq(0).clear().type(licenceExpiry)
            cy.get(this.selectorsList().dateCloseButton).click()
        }
        fillStatus(dateOfBirth){

            cy.get(this.selectorsList().checkGenerate).eq(0).click()
            cy.get(this.selectorsList().selectGeneric).eq(0).click({force:true})
            cy.get(this.selectorsList().secondItemSelect).click()
            cy.get(this.selectorsList().selectGeneric).eq(1).click({force:true})
            cy.get(this.selectorsList().thirdItemSelect).click()
            cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)
            cy.get(this.selectorsList().dateCloseButton).click()

        }
        saveForm(){
            cy.get(this.selectorsList().submitbutton).eq(0).click()
            cy.get(this.selectorsList().submitbutton).eq(1).click()
            cy.get('.oxd-toast')
            cy.get('.oxd-toast-close')
            cy.get(this.selectorsList().addButtom).click()
            cy.get(this.selectorsList().browserButton).click()
            cy.get(this.selectorsList().inputFileButton).selectFile('../../bruite.png')
            cy.get(this.selectorsList().textAreaField).type("skdjlajdajdçlasjdçasjdçsajdçasljdçlasjd")
        }

   
}

export default MyInfoPage