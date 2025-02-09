describe('Orange HRM Tests ', () => {

  const selectorsList = {

    usernameField:":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    passwordField:":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    loginbutton:".oxd-button",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert:".oxd-alert"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Admin")
    cy.get(selectorsList.passwordField).type("admin123")
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Test")
    cy.get(selectorsList.passwordField).type("Test")
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})