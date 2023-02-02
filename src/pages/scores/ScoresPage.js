import React, { useEffect, useState } from "react";
import "./ScoresPage.css";
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";
import ScoresList from "./ScoresList";
import UserScoresList from "./UserScoresList";
import useAppContext from "../../hooks/useAppContext";
import useAuthContext from "../../hooks/useAuthContext";
import BackButton from "../../components/buttons/backBtn/BackButton";
import { useNavigate } from "react-router-dom";

export default function ScoresPage() {
  const { getScoreHistory, getUserScoreHistory, getUsersScore } =
    useAppContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate()
  const [userHistory, setUserHistory] = useState([]);
  const [onlineHistory, setOnlineHistory] = useState([]);
  const [usersPoints, setUsersPoints] = useState("");

  const onLoad = async () => {
    const allHistory = await getScoreHistory();
    setOnlineHistory(allHistory);
    const lastHistory = await getUserScoreHistory(currentUser.id);
    setUserHistory(lastHistory);
    const currentUserPoints = await getUsersScore(currentUser.id);
    setUsersPoints(currentUserPoints);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div id="scores-page">
      <div className="back-btn-container">
          <button
            id="scores-back-button"
            onClick={() => {
              navigate('/homePage');
            }}
          >
            {" "}
            &lt; Go back
          </button>
        </div>
      <div id="scores-upper-page">
        <img id="scores-logo" src={logo} alt="logo"></img>
      </div>
      <div id="scores-game-history">
        <div id="scores-headline">Your Games History</div>
        <div className="scoresList">
          <UserScoresList list={userHistory} />
          <div className="total-scores">
            <p id="totalTitle">Total Score:</p>
            <li id="scores-item" style={{ width: "20%" }}>
              <p>
                <b>{usersPoints}</b>
              </p>
              <p>points</p>
            </li>
          </div>
        </div>
      </div>

      <div id="scores-online-score">
        <p id="scores-headline">Online Scores</p>
        <ScoresList list={onlineHistory} />
      </div>
    </div>
  );
}
