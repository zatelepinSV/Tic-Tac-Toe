import Player from "./components/Player";
import classes from "./App.module.css";

function App() {
  return (
    <main>
      <div className={classes.gameContainer}>
        <ol className={classes.players}>
          <Player name="Player 1" symbol="X"/>
          <Player name="Player 2" symbol="O"/>
        </ol>

        gameBoard
      </div>
      log
    </main>
  );
}

export default App;
