import React from "react";
import "./ScoresPage.css";
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";

export default function ScoresPage() {
  return (
    <div id="scores-page">
      <div id="scores-upper-page">
        <img src={logo}></img>
      </div>
      <div id="scores-game-history">
        <h3>Game History</h3>
      </div>

      <div id="scores-online-score">
        <h3>Online Scores</h3>
      </div>
    </div>
  );
}
