import userData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

const Chance = require('chance')
const chance = new Chance()

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()
const MyInfoPage = new myInfoPage()
const Menupage = new menuPage()

describe('Orange HRM Tests ', () => {

 

  it('User info Update - Success', () => {
    
    LoginPage.accessLoginPage()
    LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)    
   
    DashboardPage.checkDashboard()
    
    Menupage.accessMyInfo()
   
    MyInfoPage.fillPersonalDetails(chance.first(),chance.last(),chance.last())
    MyInfoPage.fillEmployeeDetails(chance.string({ length: 5 }),chance.string({ length: 5 }),chance.string({ length: 5 }),'2025-10-10')
    MyInfoPage.fillStatus('1988-21-08')
    MyInfoPage.saveForm()

 

  })
  
})