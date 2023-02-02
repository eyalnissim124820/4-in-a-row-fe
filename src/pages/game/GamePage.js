import React, { useEffect, useState } from "react";
import Board from "../../components/board/Board";
import "./GamePage.css";
import Modal from "../../components/modal/Modal";
import redCoin from "../../attachments/boardTools/Coin-red.svg";
import { useNavigate } from "react-router-dom";
import useAppContext from '../../hooks/useAppContext'
import { socket } from '../../libs/sockets'
import useAuthContext from '../../hooks/useAuthContext'
import LeaveGameButton from "../../components/buttons/leaveGameBtn/LeaveGameButton";
export default function GamePage() {
  const{currentUser} = useAuthContext()
  const {matchDetails, handleMatchDetails} = useAppContext()
  const [gameDetailsToShow, setGameDetailsToShow] = useState(()=>{
    return JSON.parse(localStorage.getItem('matchDetails') || null)
  })
  const [modal, setModal] = useState(false);
  const [winner, setWinner] = useState(false)
  const [playerTurn, setPlayerTurn] = useState(()=>{
    return JSON.parse(localStorage.getItem('turn')) ||false});
  const navigate = useNavigate();
  const [matrix, setMatrix] = useState(()=>{
    return JSON.parse(localStorage.getItem('board')) || 
      [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]
  }
    
  )
  useEffect(()=>{
    if(matchDetails){
      console.log(matchDetails)
      setGameDetailsToShow(matchDetails)
      localStorage.setItem("matchDetails", JSON.stringify(matchDetails))
    }
  },[matchDetails])

  useEffect(()=>{
    socket.emit('startGame', {gameRoom: matchDetails?.roomId})
    socket.on('welcome', (data)=>{
      console.log("matchDetails",gameDetailsToShow)
      if(gameDetailsToShow){
        if(currentUser?.nickname === gameDetailsToShow?.usersOnRoom[0]?.userName){
          console.log("your turn")
          setPlayerTurn(true)
          console.log(playerTurn)
        }
      }
    })
  },[gameDetailsToShow])

    socket.on('update', (data)=>{
      setPlayerTurn(data.yourTurn)
      localStorage.setItem('turn', JSON.stringify(data.yourTurn))

      setMatrix(data.matrix)
      localStorage.setItem("board",JSON.stringify(data.matrix))

    })
    useEffect(()=>{
      console.log("is my turn?",playerTurn)
    },[playerTurn])
  
    socket.on('endGame', (data)=>{
      console.log(data)
      setModal(data)
    })
    socket.on('player-left-game', (data)=>{
      navigate('/homePage')
      alert(data)
    })
  const handleLeaveClick = ()=>{
    navigate('/homePage');
              localStorage.removeItem('matchDetails')
              localStorage.removeItem('board')
              localStorage.removeItem('turn')
              socket.emit('player-left-game', "Your Oponent left the Game")
  }
  console.log(gameDetailsToShow)
  return (
    <div className="gamePage-page">
      <LeaveGameButton clickHandler={handleLeaveClick}/>
      <div className="gamePage-header">
        <div id="player_1">{gameDetailsToShow?.usersOnRoom[0]?.userName}</div>
        <div id="player_2">{gameDetailsToShow?.usersOnRoom[1]?.userName}</div>
      </div>
      <div className="gamePage-body">
        <Board  setWinner={setWinner} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} match={gameDetailsToShow} gameMatrix={matrix} setGameMatrix={setMatrix} setModal={setModal}/>
      </div>
      <div className="gamePage-footer">
        {modal ? (
          <Modal setIsOpen={setModal}>
            <div className="modal-container">
              <div className="modal-headers-container">
                
                {winner ? (
                  <>
                  <h1 style={{ fontWeight: "500" }}>Congratulations </h1>
                  <h1 style={{ fontWeight: "200" }}>
                  Y<img style={{ height: "18px" }} src={redCoin} alt="redCoin" />u Win!
                </h1>
                  </>
                  ):(
                    <>
                    <h1 style={{ fontWeight: "500" }}>Unfortunately </h1>
                    <h1 style={{ fontWeight: "200" }}>
                  Y<img style={{ height: "18px" }} src={redCoin} alt="redCoin" />u Lose!
                </h1>
                    </>
                  )}
              </div>
              <div className="modal-buttons-container">
                {/* <button>Play again</button> */}
                <button onClick={() => {
                  localStorage.removeItem('matchDetails')
                  localStorage.removeItem('board')
                  localStorage.removeItem('turn')
                  navigate('/scoresPage')}
                  
                }
                >Score</button>

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
