import userData from '../../fixtures/user-Data.json'
import loginPage from '../../pages/loginPage.js'
import dashboardPage from '../../pages/dashboardPage.js'
import myInfoPagePersonal from '../../pages/myInfoPagePersonal.js'
import menuPage from '../../pages/menuPage.js'
import changePicturePage from '../../pages/changePicturePage.js'

const Chance = require('chance')
const chance = new Chance()

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()
const MyInfoPagepersonal = new myInfoPagePersonal()
const Menupage = new menuPage()
const ChangePicture = new changePicturePage()

describe('Preenchimento dos dados pessoais do usuário ', () => {

 

  it('User Details Personal Update - Success', () => {
    
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)    
   
    DashboardPage.checkDashboard()
    
    Menupage.accessMyInfo()
    ChangePicture.changePicture()
    MyInfoPagepersonal.fillPersonalDetails(chance.first(),chance.last(),chance.last())
    MyInfoPagepersonal.fillEmployeeDetails(chance.string({ length: 5 }),chance.string({ length: 5 }),chance.string({ length: 5 }),'2025-10-10')
    MyInfoPagepersonal.fillStatus('1988-08-21')
    MyInfoPagepersonal.saveForm()

 

  })
  
})