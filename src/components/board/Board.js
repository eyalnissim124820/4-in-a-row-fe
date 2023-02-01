import React, { useEffect, useState } from 'react'
import './Board.css'
import { socket } from '../../libs/sockets'



export default function Board({ setModal, setPlayerTurn, playerTurn , match  , gameMatrix , setGameMatrix}) {
    const [currentUser, setCurrentUser] = useState('host');
    function checkWin(matrix, playerNumber) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < 6; j++) {
                if (
                    j < 3 &&
                    matrix[i][j] === playerNumber &&
                    matrix[i][j + 1] === playerNumber &&
                    matrix[i][j + 2] === playerNumber &&
                    matrix[i][j + 3] === playerNumber
                ) {
                    return true;
                }
                if (
                    i < 4 &&
                    matrix[i][j] === playerNumber &&
                    matrix[i + 1][j] === playerNumber &&
                    matrix[i + 2][j] === playerNumber &&
                    matrix[i + 3][j] === playerNumber
                ) {
                    return true;
                }
                if (
                    i > 2 &&
                    j < 3 &&
                    matrix[i][j] === playerNumber &&
                    matrix[i - 1][j + 1] === playerNumber &&
                    matrix[i - 2][j + 2] === playerNumber &&
                    matrix[i - 3][j + 3] === playerNumber
                ) {
                    return true;
                }
                if (
                    i < 4 &&
                    j < 3 &&
                    matrix[i][j] === playerNumber &&
                    matrix[i + 1][j + 1] === playerNumber &&
                    matrix[i + 2][j + 2] === playerNumber &&
                    matrix[i + 3][j + 3] === playerNumber
                ) {
                    return true;
                }
            }
        }
        return false;
    };
    async function handleClick() {
        let playerNumber = 0;
        if (currentUser === 'host') {
            playerNumber = 1;
        } else {
            playerNumber = 2;
        }

        const res = await checkWin(gameMatrix, playerNumber)
        if (res) {
            setModal(true)
        }
    }

    return (
        <div className='board' id={`${playerTurn ? '' : 'notTurn'}`}>
            <table>
                {
                    gameMatrix[0]?.map((column, i) => (
                        <tr key={i}>
                            {gameMatrix?.map((row, j) => (
                                <td key={`${i},${j}`} id={`coin-${gameMatrix[j][i]}`} onClick={() => {
                                    const newMatrix = [...gameMatrix];
                                    for (let slot = gameMatrix.length; slot >= 0; slot--) {
                                        if (newMatrix[j][slot] === 0) {
                                            newMatrix[j][slot] = currentUser === 'host' ? 1 : 2;
                                            setGameMatrix(newMatrix)
                                            socket.emit('update', {matrix: newMatrix})
                                            handleClick()
                                            // setPlayerTurn(false)
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
        </div >
    )
}
