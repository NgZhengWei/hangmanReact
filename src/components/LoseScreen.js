const LoseScreen = (props) => {
  return (
    <div className='lose-screen'>
      <h1>You lost :(</h1>
      <button onClick={props.resetGame}>New Game</button>
    </div>
  );
};

export default LoseScreen;
