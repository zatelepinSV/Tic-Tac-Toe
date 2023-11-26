import Player from "./components/Player";
import classes from "./App.module.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div className={classes.gameContainer}>
        <ol className={classes.players}>
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  );
}

export default App;
