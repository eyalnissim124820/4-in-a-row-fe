import { useState } from "react";
import SignupButton from '../../buttons/signupBtn/SignupButton'

import './SignupForm.css'

const SignupForm = () => {
  // set form inputs
  const [signUpInfo, setSignUpInfo] = useState({
    nick_name: '',
    email: '',
    password: '',
    repassword: ''
  })

  const handleChange = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.id]: e.target.value })
  }

  const handleSignupClick = (e) => {
    //signup function on signup info 
    e.preventDefault();
    console.log(signUpInfo);
  }

  return (
    <form className="signup-form">
      <h1>Sign Up</h1>
      <div>
        <label>Nick Name</label>
        <input id="nick_name" value={signUpInfo.nick_name} onChange={handleChange} type='text' name="nick_name" />
      </div>
      <div>
        <label>Email</label>
        <input id="email" value={signUpInfo.email} onChange={handleChange} type='email' name="email" />
      </div>
      <div>
        <label>Password</label>
        <input id="password" value={signUpInfo.password} onChange={handleChange} type='password' name="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input id="repassword" value={signUpInfo.repassword} onChange={handleChange} type='password' name="repassword" />
      </div>
      <SignupButton clickHandler={handleSignupClick} />
      <small>Alrady have an account? Log in here</small>
    </form>
  )
}
export default SignupForm;