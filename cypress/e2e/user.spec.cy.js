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
   
    MyInfoPage.fillPersonalDetails('Firstnametest','MidlenameTest','LastmameTest')
    MyInfoPage.fillEmployeeDetails('555252','652475','Ad565C','2025-10-10')
    MyInfoPage.fillStatus('1988-08-21')
    MyInfoPage.saveForm()

 

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})