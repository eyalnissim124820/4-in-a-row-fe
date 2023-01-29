import SignupButton from "./SignupButton"

const SignupButtonContainer = ({signupInfo})=>{
  const handleSignupClick = () =>{

    //signup function from app context on the signupInfo
  }
  return (
    <div className="signup-btn-container">
      <SignupButton clickHandler={handleSignupClick}/>
    </div>
  )
}

export default SignupButtonContainer;