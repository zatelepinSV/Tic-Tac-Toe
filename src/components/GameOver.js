const GameOver = ({winner, onRestart}) => {

  return (
    <div className="gameOver">
      <h2>Game Over!</h2>
      {winner && <p>{winner} win!</p>}
      {!winner && <p>It&apos;s Draw</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
};

export default GameOver;