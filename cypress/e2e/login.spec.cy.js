import userData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()

describe('Login Orange HRM Tests ', () => {

  
  it('Login - Fail', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userFail.username,userData.userFail.password)    
    LoginPage.checkAcessIvalid()
    
  })
  it('Login - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)    
   
    DashboardPage.checkDashboard()
    
  })
})