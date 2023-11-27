import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombinations";
import classes from "./App.module.css";
import player from "./components/Player";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayerInput = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === currentPlayer) {
    currentPlayer = 'O';
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayerInput(gameTurns);
  const gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol ) {
      winner = firstSquareSymbol;
    }
  }
  const selectSquareHandler = (rowIndex, colIndex) => {
    // setActivePlayer((prevState) => prevState === 'X' ? 'O' : 'X');


    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayerInput(prevTurns);

      const updatedTurns = [
        { square:
            {
              row: rowIndex,
              col: colIndex
            },
          player: currentPlayer,
        } , ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div className={classes.gameContainer}>
        <ol className={classes.players}>
          <Player initialName="Player 1" symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        {winner && <p>You WIN, {winner}!</p>}
        <GameBoard
          onSelectSquare={selectSquareHandler}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
