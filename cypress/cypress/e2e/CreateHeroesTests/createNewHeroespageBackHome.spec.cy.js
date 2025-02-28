import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import createNewHeroesPage from '../../pages/createHeroesPage'

const LoginPages = new loginPages()
const CreateHeroesPage = new createNewHeroesPage()

describe('Clique na imagem de slogan na pagina Create new heroes', () => {
  it('Clique na imagem , para retornar a Página inicial', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    CreateHeroesPage.HomeReturn()
    
   
    
  })
})