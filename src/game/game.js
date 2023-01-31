const correntPlayer = 1;
const handleClick = (col) => {
  const updatedGrid = [...grid];
  for (let i = 5; i >= 0; i--) {
    if (!updatedGrid[col][i]) {
      updatedGrid[col][i] = correntPlayer;
      //   setBoard(updatedGrid);
      break;
    }
  }
};
