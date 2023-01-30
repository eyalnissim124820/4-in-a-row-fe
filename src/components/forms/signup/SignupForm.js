import { useState } from "react";
import SignupButton from '../../buttons/signupBtn/SignupButton'
const SignupForm = () =>{
  const [signupInfo, setSignupInfo] = useState(null) // set form form inputs

  const handleSignupClick = () =>{
    //signup function on signup info 
  }
  return (  
    <form>
      <SignupButton clickHandler={handleSignupClick} />
    </form>
  )
}
export default SignupForm;