import { useState } from "react"
import LoginButton from '../../buttons/loginBtn'

const LoginForm = () =>{
  const [loginInfo, setLoginInfo] = useState(null) // is set from inputs

  const handleLoginClick = () =>{
    //login function on loginIndo
  }
  return (
    <form>
      <LoginButton clickHandler={handleLoginClick}/>
    </form>
  )
}
export default LoginForm