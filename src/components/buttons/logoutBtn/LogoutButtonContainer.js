import LogoutButton from "./LogoutButton"


const LogoutButtonContainer = ()=>{

  const handleLogoutClick = ()=>{
    //call logout function from app context
    localStorage.clear('currentUser');
  }
  return(
    <div className="logout-btn-container">
      <LogoutButton clickHandler={handleLogoutClick}/>
    </div>
  )
}
export default LogoutButtonContainer;