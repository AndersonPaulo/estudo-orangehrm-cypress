class MyInfoPageDetail{

    selectorsList(){
        const selector = {
           genericField:".oxd-input-group",
           myInfoPage:"[href='/web/index.php/pim/viewMyDetails']",
           myContactDelails:"[href='/web/index.php/pim/contactDetails/empNumber/7']",     
           addButton:"[type='button']",     
           submitButton:"[type='submit']",
           inputFileButton:"[data-v-1b0f05a0='']",
           selectCountry:".oxd-select-dropdown > :nth-child(3)"//"[data-v-67d2aedf='']"

        }
        return selector
    }
    MInfoPageContactDetails(){
        cy.get(this.selectorsList().myInfoPage).click()
        cy.get(this.selectorsList().myContactDelails).click()
    }
    Address(streetOne,streetTwo,city,province,zip){
        cy.get(this.selectorsList().genericField).eq(0).type(streetOne)
        cy.get(this.selectorsList().genericField).eq(1).type(streetTwo)
        cy.get(this.selectorsList().genericField).eq(2).type(city)
        cy.get(this.selectorsList().genericField).eq(3).type(province)
        cy.get(this.selectorsList().genericField).eq(4).type(zip)
        cy.get(this.selectorsList().genericField).eq(5).click()
        cy.get(this.selectorsList().selectCountry).click()

    }
    Telephones(home,mobile,work){
        cy.get(this.selectorsList().genericField).eq(6).type(home)
        cy.get(this.selectorsList().genericField).eq(7).type(mobile)
        cy.get(this.selectorsList().genericField).eq(8).type(work)
    }
    Emails(work,other){
        cy.get(this.selectorsList().genericField).eq(9).type(work)
        cy.get(this.selectorsList().genericField).eq(10).type(other)
        cy.get(this.selectorsList().submitButton).eq(0).click()

    }   
    AddAttachment(text){
        cy.get(this.selectorsList().addButton).eq(3).click()
        cy.get(this.selectorsList().inputFileButton).eq(0).selectFile('bruite.png',{action: "select",force: true})
        cy.get(this.selectorsList().genericField).eq(12).type(text)
        

    }
    RequiredForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().submitButton).eq(1).click()

    }


}
export default MyInfoPageDetail