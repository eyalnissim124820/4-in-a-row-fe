import React from "react";
import "./ScoresPage.css";

export default function ScoresItem({ id, nickname, score }) {
  return (
    <div id="scores-item">
      <div id="left-side">
        <p>{nickname}</p>
      </div>
      <div id="right-side">
        <p>{score}</p>
      </div>
    </div>
  );
}