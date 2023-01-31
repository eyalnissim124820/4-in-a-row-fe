import React, { useState } from 'react'
import Board from '../../components/board/Board'
import './GamePage.css'
import Modal from '../../components/modal/Modal';
import redCoin from '../../attachments/boardTools/Coin-red.svg'



export default function GamePage() {

  const [modal, setModal] = useState(true)

  return (
    <div className='gamePage-page'>
      <div className='gamePage-header'>
      </div>
      <div className='gamePage-body'>
        <Board />
      </div>
      <div className='gamePage-footer'>
        {modal
          ?
          <Modal setIsOpen={setModal}>
            <div className='welcome-container'>
              <div>
                <h6>congratulations </h6>
                <h1 style={{ fontWeight: '100' }}><img src={redCoin} alt='redCoin' /></h1>
              </div>
            </div>
          </Modal>
          :
          ''
        }
      </div>
    </div>
  )
}
