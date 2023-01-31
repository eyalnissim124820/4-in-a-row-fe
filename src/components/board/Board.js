import React, { useState } from 'react'
import './Board.css'
import Modal from '../modal/Modal';
import redCoin from '../../attachments/boardTools/Coin-red.svg'


const matrix = [
    [0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]]

export default function Board() {

    const [currentUser, setCurrentUser] = useState('guest');

    const [modal, setModal] = useState(true)

    const [gameMatrix, setGameMatrix] = useState(matrix);


    console.log(gameMatrix);

    return (
        <div className='board'>
            <table>
                {
                    gameMatrix[0]?.map((column, i) => (
                        <tr key={i}>
                            {gameMatrix?.map((row, j) => (
                                <td key={`${i},${j}`} id={`coin-${matrix[j][i]}`} onClick={() => {
                                    const newMatrix = [...gameMatrix];
                                    for (let slot = matrix[0].length; slot > 0; slot--) {
                                        if (newMatrix[j][slot] === 0) {
                                            newMatrix[j][slot] = currentUser === 'host' ? 1 : 2;
                                            setGameMatrix(newMatrix)
                                            return;
                                        }
                                    }
                                }
                                }></td>
                            ))}
                        </tr>
                    ))
                }
            </table>
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
        </div >
    )
}
