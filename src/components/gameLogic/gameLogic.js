export default function CheckWin({ matrix, playerNumber }) {
    console.log('work');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (
                j < 3 &&
                matrix[i][j] === playerNumber &&
                matrix[i][j + 1] === playerNumber &&
                matrix[i][j + 2] === playerNumber &&
                matrix[i][j + 3] === playerNumber
            ) {
                return `win`;
            }
            if (
                i < 4 &&
                matrix[i][j] === playerNumber &&
                matrix[i + 1][j] === playerNumber &&
                matrix[i + 2][j] === playerNumber &&
                matrix[i + 3][j] === playerNumber
            ) {
                return `win`;
            }
            if (
                i > 2 &&
                j < 3 &&
                matrix[i][j] === playerNumber &&
                matrix[i - 1][j + 1] === playerNumber &&
                matrix[i - 2][j + 2] === playerNumber &&
                matrix[i - 3][j + 3] === playerNumber
            ) {
                return `win`;
            }
            if (
                i < 4 &&
                j < 3 &&
                matrix[i][j] === playerNumber &&
                matrix[i + 1][j + 1] === playerNumber &&
                matrix[i + 2][j + 2] === playerNumber &&
                matrix[i + 3][j + 3] === playerNumber
            ) {
                return `win`;
            }
        }
    }
    return `not win`;
};

