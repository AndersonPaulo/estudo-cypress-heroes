import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('E-mail Wrong', () => {
  it('Logar com um e-mail não registrado e senha registrada', () => {
    LoginPages.acessLoginPage()
    LoginPages.UserEmailwrong(userData.UserEmailwrong.email,userData.UserEmailwrong.password)  
    
   
    
  })
})