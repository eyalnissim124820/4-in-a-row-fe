import React from 'react'
import Board from '../../components/board/Board'
import './GamePage.css'

export default function GamePage() {
  return (
    <div className='gamePage-page'>
      <div className='gamePage-header'>header</div>
      <div className='gamePage-body'>
        <Board />
      </div>
      <div className='gamePage-footer'>footer</div>
    </div>
  )
}
