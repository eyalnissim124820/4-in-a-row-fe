import { useState } from "react"
import LoginButton from '../../buttons/loginBtn/LoginButton'
import './LoginForm.css'
import useAuthContext from '../../../hooks/useAuthContext'
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const {login,currentUser,handleCurrentUser} = useAuthContext()
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })
  // is set from inputs

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value })
  }

  const handleLoginClick = async(e) => {
    e.preventDefault();
    const res = await login(loginInfo)
    if(res){
      console.log(res.data)
      handleCurrentUser(res.data)
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      navigate('/homePage');
    }
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
      <small onClick={()=>{navigate('/signupPage')}}>Does not have an account? sign up here</small>
    </form>
  )
}
export default LoginForm