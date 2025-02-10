import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests ', () => {

  const selectorsList = {

    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginbutton:".orangehrm-login-button",
    sectionTitleTopBar:".oxd-layout-navigation",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']"
  }

 

  it.only('User info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})