import userData from '../../fixtures/user_Data.json'
import loginPages from '../../pages/loginPage'

const LoginPages = new loginPages()

describe('Password Empty', () => {
  it('Logar com o campo  senha  vazio e email Registrada', () => {
    LoginPages.acessLoginPage()
    LoginPages.UserPasswordEmpty(userData.UserPasswordEmpty.email,userData.UserPasswordEmpty.password)  
    
   
    
  })
})