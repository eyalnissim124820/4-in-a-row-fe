import React, { useEffect, useState } from "react";
import "./CreateGamePage.css";
import logo from "../../attachments/favicon_io (4)/4inARow 1.svg";
import coin_y from "../../attachments/boardTools/Coin-yellow.svg";
import coin_r from "../../attachments/boardTools/Coin-red.svg";
import useAuthContext from "../../hooks/useAuthContext";
import { socket } from "../../libs/sockets";
import { useNavigate } from "react-router-dom";
export default function CreateGamePage() {
  const { currentUser } = useAuthContext();
  const [gameRoom, setGameRoom] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const room_pin = url.get("roomId");
    setGameRoom(room_pin);
    socket.emit("joinRoom1", {
      userId: currentUser.id,
      userName: currentUser.nickname,
      roomId: room_pin,
    });
  }, []);

  useEffect(() => {
    socket.on("usersInRoom", (data) => {
      console.log(data)
      navigate(`/GamePage?rommId=${data.roomId}`);
    });
  }, []);
  

  return (
    <div className="createGamePage">
      <div className="gameCode-container">
        <img id="smallLogo" src={logo} alt="logo" />
        <h6>Game Code</h6>
        <p>{gameRoom}</p>
      </div>
      <div className="loadingGame-container">
        <p>Waiting for the other player...</p>
        <div className="loadingCoins">
          <img id="coin_y" src={coin_y} alt="coin_y" />
          <img id="coin_r" src={coin_r} alt="coin_r" />
        </div>
      </div>
    </div>
  );
}
