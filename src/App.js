import { useState } from 'react';
import Words from './components/Words';
import Person from './components/Person';
import InputForm from './components/InputForm';
import StartingScreen from './components/StartingScreen';
import LoseScreen from './components/LoseScreen';
import WinScreen from './components/WinScreen';

import './App.css';

let error = 0; // number of wrong letters guessed
let answer = ''; // answer to game

function App() {
  const [gameState, setGameState] = useState(3); // state of game. 0 is loss, 1 is win, 2 is playing, 3 is select theme page.
  const [guess, setGuess] = useState([]); // letters guessed

  const wordDict = {
    fruits: ['apple', 'pear', 'orange'],
    countries: ['singapore', 'malaysia', 'china'],
    animals: ['kangaroo', 'chicken', 'dog'],
  };

  const updateGuess = (newLetter) => {
    setGuess((prevState) => {
      return [...prevState, newLetter];
    });
  };

  const updateError = () => {
    error += 1;
  };

  const winFlag = () => {
    setGameState(1);
  };

  const setTopic = (topic) => {
    answer =
      wordDict[topic][Math.floor(Math.random() * wordDict[topic].length)];
    setGameState(2);
  };

  const resetGameHandler = (e) => {
    setGameState(3);
    setGuess([]);
    error = 0;
    answer = '';
  };

  // checking for game conditions
  if (gameState === 1) {
    return <WinScreen resetGame={resetGameHandler} />;
  } else if (gameState === 0) {
    return <LoseScreen resetGame={resetGameHandler} />;
  } else if (gameState === 3) {
    return <StartingScreen wordDict={wordDict} setTopic={setTopic} />;
  }

  if (error === 8) {
    setGameState(0);
  }

  return (
    <div className='main container'>
      <Person error={error} />
      <div className='right'>
        <Words answer={answer} guess={guess} winFlag={winFlag} />
        <InputForm
          updateGuess={updateGuess}
          answer={answer}
          updateError={updateError}
          guess={guess}
        />
        <p>Guessed letters: {guess.join(', ')}</p>
        <button type='button' onClick={resetGameHandler}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
