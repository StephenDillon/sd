"use client";

import { observer, useLocalObservable } from "mobx-react-lite";
import { use, useEffect } from "react";
import WordStore from "../../stores/WordStore";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default observer(function Home() {
  const store = useLocalObservable(() => WordStore)
  useEffect(() => {
    store.init()
    window.addEventListener('keyup', store.handleKeyup)

    return () => {
      window.removeEventListener('keyup', store.handleKeyup)
    }
  }, [store])
  return (
    <div >
      <div>
        <Container className="d-flex align-items-center justify-content-center">
          <h3>Guess the word</h3>
        </Container>
      </div>

      <div>
        <Container style={{ width: '20rem' }}>
          {store.guesses.map((_, i) => (
            <Guess
              key={i}
              word={store.word}
              guess={store.guesses[i]}
              isGuessed={i < store.currentGuess}
            />
          ))}
        </Container>

        {store.errorMessage &&
          <div className="text-red-500">
            {store.errorMessage}
          </div>
        }
        {store.won && <h1>You won!</h1>}
        {store.lost && <h1>You lost!</h1>}
        {(store.won || store.lost) && (
          <button onClick={store.init}>Play Again</button>
        )}
        <Keyboard store={store} />

      </div>

    </div>
  );
})
