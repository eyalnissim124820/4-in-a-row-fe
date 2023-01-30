import { useState } from "react"
import LoginButton from '../../buttons/loginBtn/LoginButton'
import './LoginForm.css'

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })
  // is set from inputs

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value })
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    //login function on loginInfo
    console.log(loginInfo);
  }

  return (
    <form className="login-form">
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input id="email" value={loginInfo.email} onChange={handleChange} type='email' name="email" />
      </div>
      <div>
        <label>Password</label>
        <input id="password" value={loginInfo.password} onChange={handleChange} type='password' name="password" />
      </div>
      <LoginButton clickHandler={handleLoginClick} />
    </form>
  )
}
export default LoginForm