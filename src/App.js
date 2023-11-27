import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import classes from "./App.module.css";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const selectSquareHandler = (rowIndex, colIndex) => {
    setActivePlayer((prevState) => prevState === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === currentPlayer) {
        currentPlayer = 'O';
      }

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
        <GameBoard
          onSelectSquare={selectSquareHandler}
          turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
