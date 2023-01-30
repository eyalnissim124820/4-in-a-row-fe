import LogoutButton from "../../components/buttons/logoutBtn/LogoutButton"

const HomePage = () =>{
  const handleLogoutClick = () =>{
    //call logout function 

  }

  return (
    <div className="home-page">
      <LogoutButton clickHandler={handleLogoutClick}/>
    </div>
  )
}
export default HomePage;