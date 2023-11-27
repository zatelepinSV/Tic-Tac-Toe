import classes from "./GameBoard.module.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const GameBoard = ({ onSelectSquare, turns }) => {

  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
// const [gameBoard, setGameBoard] = useState(initialGameBoard);
//
// const selectSquareHandler = (rowIndex, colindex) => {
//   setGameBoard(prevGameBoard => {
//     const updatedBoard = [...prevGameBoard.map(arr => [...arr])];
//     updatedBoard[rowIndex][colindex] = activePlayerSymbol;
//     return updatedBoard;
//   });
//   onSelectSquare();
// }

  return (
    <ol className={classes.board}>
      {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
        <ol>{row.map((playerSymbol, colIndex)=> <li key={colIndex}>
          <button
            onClick={() => onSelectSquare(rowIndex, colIndex)}
          >{playerSymbol}
          </button>
        </li>)}</ol>
      </li>)}
    </ol>
  );
};

export default GameBoard;