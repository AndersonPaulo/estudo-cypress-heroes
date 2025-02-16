import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import homePage from '../../pages/homePage'

const LoginPages = new loginPages()
const HomePage  = new homePage()

describe('Clique delete Button', () => {
  it('Clica no Botão delete ,a aparecerá uma janela de confirmação yes ou no', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    HomePage.deleteButton()    
    
   
    
  })
})