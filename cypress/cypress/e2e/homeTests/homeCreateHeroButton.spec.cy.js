import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import homePage from '../../pages/homePage'

const LoginPages = new loginPages()
const HomePage  = new homePage()

describe('Clique button Create New Hero ', () => {
  it('Clica no Botão create new Hero e é redirecionado para a págia de criação', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    HomePage.creatNewHeroButton()    
    
   
    
  })
})