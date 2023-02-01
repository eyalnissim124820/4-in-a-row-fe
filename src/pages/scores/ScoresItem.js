import React, { useEffect, useState } from "react";
import "./ScoresPage.css";
import useAuthContext from '../../hooks/useAuthContext'


export default function ScoresItem({ id, nickname, score }) {
  const { currentUser } = useAuthContext();
  const [myNickname, setMynickname] = useState(false)

  useEffect(() => {
    if (nickname === currentUser.nickname) {
      setMynickname(true)
    }
  }, [])

  return (
    <li id="scores-item" className={`${myNickname}`}>
      <div id="left-side">
        <p>{nickname}</p>
      </div>
      <div id="right-side">
        {myNickname ? <p>(You)</p> : ''}
        <p>{score}:{` ${score === 'Win' ? 2 : 0}`}</p>
      </div>
    </li>
  );
}
