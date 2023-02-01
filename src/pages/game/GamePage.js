import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";
import "./GamePage.css";
import Modal from "../../components/modal/Modal";
import redCoin from "../../attachments/boardTools/Coin-red.svg";
import { useNavigate } from "react-router-dom";
import useAppContext from '../../hooks/useAppContext'
import { socket } from '../../libs/sockets'

export default function GamePage() {
  const {matchDetails, handleMatchDetails} = useAppContext()
  const [gameDetailsToShow, setGameDetailsToShow] = useState()
  const [modal, setModal] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);
  const navigate = useNavigate();
  const [matrix, setMatrix] = useState(
    [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]
  )

  useEffect(()=>{
    socket.emit('startGame', {gameRoom: matchDetails.roomId})
    socket.on('welcome', data=>{
      console.log(data)
    })
  },[])

    socket.on('update', (data)=>{
      setMatrix(data.matrix)
    })

    // onclick = (newBoard)=>{
    // setMatrix(newBoard)
    // socket.emit('update', {matrix: newBoard})
    // }

  useEffect(()=>{
    if(matchDetails){
      setGameDetailsToShow(matchDetails)
    }
  },[matchDetails])
  console.log(gameDetailsToShow)
  return (
    <div className="gamePage-page">
      <div className="gamePage-header">
        <div id="player_1">{gameDetailsToShow?.usersOnRoom[0]?.userName}</div>
        <div id="player_2">{gameDetailsToShow?.usersOnRoom[1]?.userName}</div>
      </div>
      <div className="gamePage-body">
        <Board  playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} match={gameDetailsToShow} gameMatrix={matrix} setGameMatrix={setMatrix}/>
      </div>
      <div className="gamePage-footer">
        {modal ? (
          <Modal setIsOpen={setModal}>
            <div className="modal-container">
              <div className="modal-headers-container">
                <h1 style={{ fontWeight: "500" }}>congratulations </h1>
                <h1 style={{ fontWeight: "200" }}>
                  Y<img style={{ height: "18px" }} src={redCoin} alt="redCoin" />u Won!
                </h1>
              </div>
              <div className="modal-buttons-container">
                <button>Play again</button>
                <button onClick={() => navigate('/scoresPage')}>Score</button>

              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
