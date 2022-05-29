import { useEffect } from 'react';

const Words = (props) => {
  const display = props.answer.split('').map((letter) => {
    return props.guess.indexOf(letter) >= 0 ? letter : '_';
  });

  useEffect(() => {
    if (display.indexOf('_') === -1) {
      props.winFlag();
    }
  });

  return <div className='hangman-words'>{display.join(' ')}</div>;
};

export default Words;
