class changePicturePage {

    selectorsList() {
            const selector = {

                photoPerfil: ".employee-image",               
                inputFileButton:"[data-v-1b0f05a0='']",
                submitSave: "[type='submit']",
                personalDetailButton: "[href='/web/index.php/pim/viewPersonalDetails/empNumber/7']"
            }

        return selector
        }
        changePicture(){

      
            cy.get(this.selectorsList().photoPerfil).click()
            cy.get(this.selectorsList().inputFileButton).eq(0).selectFile('bruite.png',{action: "select",force: true})
            cy.get(this.selectorsList().submitSave).click()       
            cy.get(this.selectorsList().personalDetailButton).click()
            
        }
       
       

   
}

export default changePicturePage