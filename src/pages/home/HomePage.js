import { useNavigate } from "react-router-dom"
import LogoutButton from "../../components/buttons/logoutBtn/LogoutButton"
import useAuthContext from "../../hooks/useAuthContext"

const HomePage = () =>{

  const {logout} = useAuthContext()
  const navigate = useNavigate()
  const handleLogoutClick = () =>{
    const res = logout();
    if(res.logout)
    navigate('/')
  }

  return (
    <div className="homePage-page">
      <LogoutButton clickHandler={handleLogoutClick}/>
    </div>
  )
}
export default HomePage;