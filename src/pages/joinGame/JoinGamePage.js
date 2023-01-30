import React from 'react'
import './JoinGamePage.css'
import logo from '../../attachments/favicon_io (4)/4inARow 1.svg'


export default function JoinGamePage() {
  return (
    <div className='createGamePage'>
      <div className='gameCode-container'>
        <img id='smallLogo' src={logo} alt='logo' />
        <h6>Enter Game Pin</h6>
        <input id='enterPin' type='text' maxlength="4" />
      </div>
      <div className='loadingGame-container'>
        <div className='loadingCoins'>
          <button>Start</button>
        </div>
      </div>
    </div>
  )
}
