import { useNavigate } from "react-router-dom";
import useAppContext from "../../../hooks/useAppContext";
import './LeaveGameButton.css'
const LeaveGameButton = ({clickHandler})=>{
  return(
    <div className="leave-btn-container">
          <button
            id="leave-game-button"
            onClick={clickHandler}
          >
            {" "}
            &lt; Leave Game
          </button>
        </div>
  )
}
export default LeaveGameButton