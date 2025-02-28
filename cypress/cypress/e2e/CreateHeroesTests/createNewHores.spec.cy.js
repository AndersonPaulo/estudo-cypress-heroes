import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'
import createNewHeroesPage from '../../pages/createHeroesPage'

const LoginPages = new loginPages()
const CreateHeroesPage = new createNewHeroesPage()

describe('Clique create new heroes Button', () => {
  it('Clique no Btão e preencha as informações pra criar um novo heroi', () => {
    
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    CreateHeroesPage.CreateHeroes()
    
   
    
  })
})