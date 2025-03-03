class changePicturePage {

    selectorsList() {
            const selector = {

                photoPerfil: ".employee-image",               
                inputFileButton:".oxd-input-group",
                submitSave: "[type='submit']"
            }

        return selector
        }
        changePicture(){

      
            cy.get(this.selectorsList().photoPerfil).click()
            cy.get(this.selectorsList().inputFileButton).selectFile('bruite.png',{action: "select",force: true})
            cy.get(this.selectorsList().submitSave).click()       
            
            
        }
       
       

   
}

export default changePicturePage