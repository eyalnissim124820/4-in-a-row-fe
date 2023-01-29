import { useState } from "react";
import SignupButtonContainer from "../../buttons/signupBtn/SignupButtonContainer";

const SignupForm = () =>{
  const [signupInfo, setSignupInfo] = useState(null) // set form form inputs
  return (  
    <form>
      <SignupButtonContainer signupInfo={signupInfo}/>
    </form>
  )
}
export default SignupForm;