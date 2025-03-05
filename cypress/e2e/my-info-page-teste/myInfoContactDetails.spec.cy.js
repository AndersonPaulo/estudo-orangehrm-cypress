import userData from '../../fixtures/user-Data.json'
import loginPage from '../../pages/loginPage'
import myInfoPageDetail from '../../pages/myInfoContacDetails'

const Chance = require('chance')
const chance = new Chance()

const LoginPage = new loginPage()
const MyInfoPageDetail = new myInfoPageDetail()

describe('Preenchimento dos dados de contato do usuário', () =>{

    it('User Details Contact Update - Success',()=>{

        LoginPage.accessLoginPage()
        LoginPage.LoginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        MyInfoPageDetail.MInfoPageContactDetails()
        MyInfoPageDetail.Address(chance.address(),chance.address(),chance.city(),chance.province({full: true}),chance.zip())
        MyInfoPageDetail.Telephones(chance.phone({ formatted: false }),chance.phone({ formatted: false }),chance.phone({ formatted: false }))
        MyInfoPageDetail.Emails(chance.email(),chance.email())
        MyInfoPageDetail.AddAttachment(chance.sentence())
        MyInfoPageDetail.RequiredForm()

    })

})