import React, { useEffect, useState } from 'react'
import './JoinGamePage.css'
import logo from '../../attachments/favicon_io (4)/4inARow 1.svg'
import useAuthContext from '../../hooks/useAuthContext'
import { socket } from '../../libs/sockets'
import { useNavigate } from 'react-router-dom'
import useAppContext from '../../hooks/useAppContext'
import BackButton from '../../components/buttons/backBtn/BackButton'
export default function JoinGamePage() {
  const navigate = useNavigate()
  const [gameRoom, setGameRoom] = useState('');
  const {currentUser}= useAuthContext()
  const {matchDetails, handleMatchDetails} = useAppContext()

  const handleCLick = () =>{
    socket.emit('joinRoom2', {
      userId: currentUser.id, 
      userName: currentUser.nickname,
      roomId: gameRoom
    })
  }
  useEffect(()=>{
    socket.on('usersInRoom', (data) =>{
      handleMatchDetails(data)
      navigate(`/GamePage?rommId=${data.roomId}`)
    })
  },[])

  return (
    <div className='createGamePage'>
      <BackButton/>
      <div className='gameCode-container'>
        <img id='smallLogo' src={logo} alt='logo' />
        <h6>Enter Game Pin</h6>
        <input id='enterPin' type='text' maxLength="4" onChange={(e)=>{setGameRoom(e.target.value)}}/>
      </div>
      <div className='loadingGame-container'>
        <div className='loadingCoins'>
          <button onClick={handleCLick}>Start</button>
        </div>
      </div>
    </div>
  )
}
