import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/buttons/logoutBtn/LogoutButton";
import useAuthContext from "../../hooks/useAuthContext";
import useAppContext from '../../hooks/useAppContext'
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";
import "./HomePage.css";
import JoinGameButton from "../../components/buttons/joinGameBtn/JoinGameButton";
import CreateGameButton from "../../components/buttons/createGameBtn/CreateGameButton";
const HomePage = () => {
  const { logout , currentUser} = useAuthContext();
  const {createMatch} = useAppContext()
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    const res = logout();
    if (res.logout) navigate("/");
  };
  const handleCreateButtonClick = async() => {
    console.log("creating game ...");
    // const tableInfo ={
    //   u_id: currentUser.id
    // }
    // const roomId = await createMatch(tableInfo)
    // if(roomId){
    //   navigate(`/CreateGamePage/?userId=${currentUser.id}&&roomId=${tableInfo}`);
    // }
    navigate(`/CreateGamePage/?userId=${currentUser.id}&&roomId=${1}`);
  };
  const handleJoinButtonClick = () => {
    console.log("joining game ...");
    navigate('/JoinGamePage')
  };
  return (
    <div className="homePage-page">
      <div className="homePage-header">
        <img id="" src={logo} alt="logo" />
        <h3>How would you like to continue?</h3>
      </div>
      <div className="homePage-body">
        <div className="homePage-body_buttons-container">
          <CreateGameButton clickHandler={handleCreateButtonClick} />
          <JoinGameButton clickHandler={handleJoinButtonClick} />
        </div>
      </div>
      <div className="homePage-footer">
        <LogoutButton clickHandler={handleLogoutClick} />
        <p>Log out</p>
      </div>
    </div>
  );
};
export default HomePage;
