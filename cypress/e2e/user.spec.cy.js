import userData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()
const MyInfoPage = new myInfoPage()
const Menupage = new menuPage()

describe('Orange HRM Tests ', () => {

 

  it.only('User info Update - Success', () => {
    
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)    
    DashboardPage.checkDashboard()
    Menupage.accessMyInfo()
    MyInfoPage.navegationInfo()
 

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})