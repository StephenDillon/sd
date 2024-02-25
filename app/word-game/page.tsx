"use client";

import { observer, useLocalObservable } from "mobx-react-lite";
import { use, useEffect } from "react";
import WordStore from "../../stores/WordStore";
import Guess from "../../components/Guess";
import Keyboard from "../../components/Keyboard";

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
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div>
        <h3 className="text-3xl font-bold uppercase">Guess the word</h3>
      </div>

      <div className="flex h-screen w-screen flex-col items-center justify-center">
        {store.guesses.map((_, i) => (
          <Guess
            key={i}
            word={store.word}
            guess={store.guesses[i]}
            isGuessed={i < store.currentGuess}
          />
        ))}

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
