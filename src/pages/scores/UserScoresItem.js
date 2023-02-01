import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import "./ScoresPage.css";

export default function UserScoresItem({ winner, u1Name, u2Name }) {
  const { currentUser } = useAuthContext();

  return (
    <li
      id="scores-item"
      // className={`${myNickname}`}
    >
      <div id="left-side">
        <p>{currentUser.nickname === u1Name ? u2Name : u1Name}</p>
      </div>
      <div id="right-side">
        <p>
          {currentUser.nickname === winner ? "Win: 2 points" : "Loss: 0 points"}
        </p>
      </div>
    </li>
  );
}
