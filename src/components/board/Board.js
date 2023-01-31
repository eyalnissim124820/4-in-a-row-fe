import React, { useState } from 'react'
import './Board.css'
const matrix = [
    [0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]]

export default function Board() {


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
                                            newMatrix[j][slot] = 1;
                                            setGameMatrix(newMatrix)
                                            return
                                        }
                                    }

                                }}></td>
                            ))}
                        </tr>
                    ))
                }
            </table>
        </div >
    )
}
