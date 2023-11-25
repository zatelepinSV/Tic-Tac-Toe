import Player from "./components/Player";

function App() {
  return (
    <main>
      <div className="game-container">
        <ol className="players">
          <Player name="Player 1" symbol="X"/>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>

        gameBoard
      </div>
      log
    </main>
  );
}

export default App;
