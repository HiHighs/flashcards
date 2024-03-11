import { useState } from 'react';
import './App.css';
import { _flashcards } from './flashcards';

export default function App() {
  const [flashcards, setFlashcards] = useState(_flashcards);

  function shuffleArray() {
    const array = [...flashcards];
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setFlashcards(array);
  }

  return (
    <>
      <div className='heading'>
        <h1>Which array method to use? " I WANT..."</h1>
        <button className='shuffle' onClick={shuffleArray}>
          shuffle
        </button>
      </div>

      <div className='flashcards'>
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.key}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        ))}
      </div>
    </>
  );
}

function Flashcard({ question, answer }) {
  const [selected, setSelected] = useState(false);
  const [content, setContent] = useState(question);

  function handleClick() {
    setSelected(!selected);
    setContent(selected ? question : answer);
  }

  return (
    <div onClick={handleClick} className={selected ? 'selected' : ''}>
      {content}
    </div>
  );
}
