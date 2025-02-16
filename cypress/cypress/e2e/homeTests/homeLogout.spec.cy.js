import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import homePage from '../../pages/homePage'

const LoginPages = new loginPages()
const HomePage  = new homePage()

describe('Logout', () => {
  it('Desloga ao clicar no botão logout', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    HomePage.logout()    
    
   
    
  })
})