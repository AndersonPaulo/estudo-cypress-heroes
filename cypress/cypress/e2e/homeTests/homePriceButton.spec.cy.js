import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import homePage from '../../pages/homePage'

const LoginPages = new loginPages()
const HomePage  = new homePage()

describe('Clique Like Button', () => {
  it('Clica no Botão Like ,e o  número de Fans Irá aumentar', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    HomePage.priceButton()    
    
   
    
  })
})