import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('E-mail and Password Empty', () => {
  it('Logar com o campo  e-mail  e senha vazios', () => {
    LoginPages.acessLoginPage()
    LoginPages.UserEmpty(userData.UserEmpty.email,userData.UserEmpty.password)  
    
   
    
  })
})