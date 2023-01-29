import LoginButton from "./LoginButton";

const LogintButtonContainer = ({loginInfo}) => {
  const handleLoginClick = () =>{
    //login function from app context on loginInfo

  }
  return(
    <div className="login-btn-container">
      <LoginButton clickHandler={handleLoginClick}/>
    </div>
  )
}

export default LogintButtonContainer;