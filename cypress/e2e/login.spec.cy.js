import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests ', () => {

  const selectorsList = {

    usernameField:":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordField:":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginbutton:".oxd-button",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert"
  }

 

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})