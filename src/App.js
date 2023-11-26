import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import classes from "./App.module.css";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const selectSquareHandler = () => {
    setActivePlayer((prevState) => prevState === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div className={classes.gameContainer}>
        <ol className={classes.players}>
          <Player initialName="Player 1" symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} activePlayerSymbol={activePlayer} />
      </div>
      {activePlayer}
      log
    </main>
  );
}

export default App;
