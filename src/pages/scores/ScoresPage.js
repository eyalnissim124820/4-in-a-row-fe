import React from "react";
import "./ScoresPage.css";
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";
import ScoresList from "./ScoresList";

export default function ScoresPage() {
  const list = [
    { id: 1, nickname: "gilad", score: "win" },
    { id: 2, nickname: "gilad", score: "win" },
    { id: 3, nickname: "gilad", score: "win" },
    { id: 4, nickname: "gilad", score: "win" },
    { id: 5, nickname: "gilad", score: "win" },
  ];
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
        <ScoresList list={list} />
      </div>

      <div id="scores-online-score">
        <p id="scores-headline">Online Scores</p>
        <ScoresList list={list} />
      </div>
    </div>
  );
}
