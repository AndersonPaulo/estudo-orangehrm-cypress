import userData from '../../fixtures/user-Data.json'
import loginPage from '../../pages/loginPage.js'
import dashboardPage from '../../pages/dashboardPage.js'

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()

describe('Login Cases Orange HRM Tests ', () => {

  
  it('Login - Fail - user and password Fail', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userAndPasswordFail.username,userData.userAndPasswordFail.password)    
    LoginPage.checkAcessIvalid()
    
  })
  it('Login - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)       
    DashboardPage.checkDashboard()
    
  })
  it('Login - Username And Password Empty', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userAndPasswordEmpty.username,userData.userAndPasswordEmpty.password)       
    LoginPage.checkAlertRequiredloginAndPassword()
    
  })
  it('Login - Username Done And password Wrong', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userDoneAndpasswordWrong.username,userData.userDoneAndpasswordWrong.password)       
    LoginPage.checkAcessIvalid()
    
  })
  it('Login - Username Wrong And password Done', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userWrongAndpasswordDone.username,userData.userWrongAndpasswordDone.password)       
    LoginPage.checkAcessIvalid()
    
  })
  it('Login - Username user Empty And password Done', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userEmptyAndpasswordDone.username,userData.userEmptyAndpasswordDone.password)
    LoginPage.checkAlertRequiredLogin()
  })
  it('Login - Username user Done And password Empty', () => {
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userDoneAndpasswordEmpty.username,userData.userDoneAndpasswordEmpty.password)
    LoginPage.checkAlertRequiredPassword()
  })
})