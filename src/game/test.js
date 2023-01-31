const arr = [
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0], //[4,3]
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1],
];
const checkWin = () => {
  const playerNumber = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 6; j++) {
      if (
        j < 3 &&
        arr[i][j] === playerNumber &&
        arr[i][j + 1] === playerNumber &&
        arr[i][j + 2] === playerNumber &&
        arr[i][j + 3] === playerNumber
      ) {
        return `win`;
      }
      if (
        i < 4 &&
        arr[i][j] === playerNumber &&
        arr[i + 1][j] === playerNumber &&
        arr[i + 2][j] === playerNumber &&
        arr[i + 3][j] === playerNumber
      ) {
        return `win`;
      }
      if (
        i > 2 &&
        j < 3 &&
        arr[i][j] === playerNumber &&
        arr[i - 1][j + 1] === playerNumber &&
        arr[i - 2][j + 2] === playerNumber &&
        arr[i - 3][j + 3] === playerNumber
      ) {
        return `win`;
      }
      if (
        i < 4 &&
        j < 3 &&
        arr[i][j] === playerNumber &&
        arr[i + 1][j + 1] === playerNumber &&
        arr[i + 2][j + 2] === playerNumber &&
        arr[i + 3][j + 3] === playerNumber
      ) {
        return `win`;
      }
    }
  }
  return `not win`;
};
console.log(checkWin());
