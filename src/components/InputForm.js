import { useState } from 'react';

const InputForm = (props) => {
  const [formLetter, setFormLetter] = useState('');

  function isAlpha(string) {
    return /^[a-zA-Z]+$/.test(string);
  }

  const inputHandler = (e) => {
    setFormLetter(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (formLetter === '') {
      alert('Guess cannot be empty!');
      return;
    } else if (!isAlpha(formLetter)) {
      alert('Can only guess letters!');
      return;
    } else if (props.guess.includes(formLetter)) {
      alert('No repeat guessing of letters!');
      return;
    }

    // Adds guessed letter to guess array in APP
    props.updateGuess(formLetter);
    // increments error state in APP if letter input is wrong
    if (props.answer.split('').indexOf(formLetter) === -1) {
      props.updateError();
    }
    // empties the form
    setFormLetter('');
  };

  return (
    <form onSubmit={formSubmit} className='form-control'>
      <label>Guess a letter:</label>
      <input //TODO: prevent typing of numbers
        type='text'
        maxLength='1'
        onChange={inputHandler}
        value={formLetter}
      />
      <button type='submit'>Guess</button>
    </form>
  );
};

export default InputForm;
