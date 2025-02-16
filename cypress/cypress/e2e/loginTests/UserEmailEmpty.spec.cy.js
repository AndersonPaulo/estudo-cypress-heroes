import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('E-mail Empty', () => {
  it('Logar com o campo  e-mail  vazio e senha Registrada', () => {
    LoginPages.acessLoginPage()
    LoginPages.UserEmailEmpty(userData.UserEmailEmpty.email,userData.UserEmailEmpty.password)  
    
   
    
  })
})