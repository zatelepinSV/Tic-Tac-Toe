import { useState } from "react";
import classes from "./GameBoard.module.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
const [gameBoard, setGameBoard] = useState(initialGameBoard);

const selectSquareHandler = (rowIndex, colindex) => {
  setGameBoard(prevGameBoard => {
    const updatedBoard = [...prevGameBoard.map(arr => [...arr])];
    updatedBoard[rowIndex][colindex] = activePlayerSymbol;
    return updatedBoard;
  });
  onSelectSquare();
}

  return (
    <ol className={classes.board}>
      {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
        <ol>{row.map((playerSymbol, colIndex)=> <li key={colIndex}>
          <button
            onClick={() => selectSquareHandler(rowIndex, colIndex)}
          >{playerSymbol}
          </button>
        </li>)}</ol>
      </li>)}
    </ol>
  );
};

export default GameBoard;