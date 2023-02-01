import React, { useEffect, useState } from "react";
import "./ScoresPage.css";
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";
import ScoresList from "./ScoresList";
import useAppContext from '../../hooks/useAppContext'
import useAuthContext from "../../hooks/useAuthContext";

export default function ScoresPage() {
  const { getScoreHistory, getUserScoreHistory } = useAppContext()
  const { currentUser } = useAuthContext()

  const [userHistory, setUserHistory] = useState([])
  const [onlineHistory, setOnlineHistory] = useState([])


  const onLoad = async () => {
    const allHistory = await getScoreHistory()
    setOnlineHistory(allHistory)
    const lastHistory = await getUserScoreHistory(currentUser.id)
    setUserHistory(lastHistory)
  }

  useEffect(() => {
    onLoad()
    console.log(onlineHistory);
  }, [])

  return (
    <div id="scores-page">
      <div>
        <button id="scores-back-button"> &lt; Go Back</button>
      </div>
      <div id="scores-upper-page">
        <img id="scores-logo" src={logo} alt="logo"></img>
      </div>
      <div id="scores-game-history">
        <div id="scores-headline">Game History</div>
        <div className="scoresList">
          <ScoresList list={userHistory} />
          <div className="total-scores">
            <p id="totalTitle">Total Score:</p>
            <li id="scores-item" style={{ width: '20%' }}>
              <p>total</p>
              <p>Points</p>
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
