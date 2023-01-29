import { useState } from "react"
import LogintButtonContainer from "../../buttons/loginBtn/LoginButtonContainer"

const LoginForm = () =>{
  const [loginInfo, setLoginInfo] = useState(null) // is set from inputs

  return (
    <form>
      <LogintButtonContainer loginInfo={loginInfo}/>
    </form>
  )
}
export default LoginForm