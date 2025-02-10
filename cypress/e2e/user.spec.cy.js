import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests ', () => {

  const selectorsList = {

    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginbutton:".orangehrm-login-button",
    sectionTitleTopBar:".oxd-layout-navigation",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input",
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    submitbutton:"[type='submit']"
  }

 

  it.only('User info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('middleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('555252')
    cy.get(selectorsList.genericField).eq(5).clear().type('231456')
    cy.get(selectorsList.genericField).eq(6).clear().type('ABFS5252')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-21-08')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1988-21-08')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitbutton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})