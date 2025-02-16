import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('Password Wrong', () => {
  it('Logar com um e-mail registrado e senha  não registrada', () => {
    LoginPages.acessLoginPage()
    LoginPages.UserPasswordWrong(userData.UserPasswordWrong.email,userData.UserPasswordWrong.password)  
    
   
    
  })
})