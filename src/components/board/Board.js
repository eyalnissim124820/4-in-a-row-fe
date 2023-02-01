import React, { useEffect, useState } from "react";
import "./Board.css";
import { socket } from "../../libs/sockets";
import useAuthContext from "../../hooks/useAuthContext";
import useAppContext from "../../hooks/useAppContext";

export default function Board({ setModal, setPlayerTurn, playerTurn, match, gameMatrix, setGameMatrix, setWinner }) {
  const [currentPlayer, setCurrentPlayer] = useState(match?.usersOnRoom[0]);
  const { currentUser } = useAuthContext();
  const { addToMatches } = useAppContext();

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
  }
  function handleClick() {
    let playerNumber = 0;
    if (currentUser.id === match?.usersOnRoom[0].userId) {
      playerNumber = 1;
    } else {
      playerNumber = 2;
    }

    const res = checkWin(gameMatrix, playerNumber);
    if (res) {
      setModal(true);
      socket.emit("endGame", true);
      const winner = playerNumber === 1 ? match?.usersOnRoom[0].userId : match?.usersOnRoom[1].userId;
      console.log("winner", winner);
      console.log("user 1", match?.usersOnRoom[0].userId);
      console.log("user 2", match?.usersOnRoom[1].userId);
      addToMatches(match?.usersOnRoom[1].userId, match?.usersOnRoom[0].userId, winner);
      setWinner(true);
    }
    setPlayerTurn(!playerTurn);
  }

  return (
    <div className="board" id={`${playerTurn ? "" : "notTurn"}`}>
      <table>
        {gameMatrix[0]?.map((column, i) => (
          <tr key={i}>
            {gameMatrix?.map((row, j) => (
              <td
                key={`${i},${j}`}
                id={`coin-${gameMatrix[j][i]}`}
                onClick={() => {
                  const newMatrix = [...gameMatrix];
                  for (let slot = gameMatrix.length; slot >= 0; slot--) {
                    if (newMatrix[j][slot] === 0) {
                      newMatrix[j][slot] = currentUser.id === match.usersOnRoom[0].userId ? 1 : 2;
                      socket.emit("update", { matrix: newMatrix, yourTurn: true });
                      setGameMatrix(newMatrix);
                      handleClick();
                      return;
                    }
                  }
                }}
              ></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
