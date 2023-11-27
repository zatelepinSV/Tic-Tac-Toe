import classes from "./GameBoard.module.css";

const GameBoard = ({ onSelectSquare, board }) => {


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
      {board.map((row,rowIndex) => <li key={rowIndex}>
        <ol>{row.map((playerSymbol, colIndex)=> <li key={colIndex}>
          <button
            onClick={() => onSelectSquare(rowIndex, colIndex)}
            disabled={playerSymbol !== null}
          >{playerSymbol}
          </button>
        </li>)}</ol>
      </li>)}
    </ol>
  );
};

export default GameBoard;