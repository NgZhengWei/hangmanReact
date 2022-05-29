const WinScreen = (props) => {
  return (
    <div className='container win-screen'>
      <h1>You won :)</h1>
      <button onClick={props.resetGame}>New Game</button>
    </div>
  );
};

export default WinScreen;
