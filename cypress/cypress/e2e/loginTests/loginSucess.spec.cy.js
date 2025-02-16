import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('Login Sucess', () => {
  it('Loga com email e password válidos', () => {
    LoginPages.acessLoginPage()
    LoginPages.loginSuccess(userData.UserSucess.email,userData.UserSucess.password)
    
    
   
    
  })
})