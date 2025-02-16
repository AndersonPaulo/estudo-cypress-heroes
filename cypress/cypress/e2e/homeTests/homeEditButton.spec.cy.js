import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import homePage from '../../pages/homePage'

const LoginPages = new loginPages()
const HomePage  = new homePage()

describe('Clique Edite Button', () => {
  it('Clica no Botão Edite ,E será redirecionado ,para a pagina de edição de heroi', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    HomePage.editButton()    
    
   
    
  })
})