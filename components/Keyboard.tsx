import { observer } from 'mobx-react-lite'
import WordStore from '../stores/WordStore'
import { FaBackspace } from "react-icons/fa";
import { PiKeyReturnFill } from "react-icons/pi";

export default observer(function Keyboard({ store }: { store: typeof WordStore }) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return (
        <div className='select-none'>
            {qwerty.map((row, i) => (
                <div className="flex justify-center m-2" key={i}>
                    {i === 2 &&
                        <div
                            onClick={() => store.handleKeyup({ key: 'Backspace' })}
                            className="rounded-m m-px flex h-10 w-10 items-center justify-center uppercase border mr-5"
                        >
                            <FaBackspace />
                        </div>
                    }
                    {row.split('').map((char, j) => {
                        const bgColor = store.exactGuesses.includes(char)
                            ? 'bg-green-400'
                            : store.inexactGuesses.includes(char)
                                ? 'bg-yellow-400'
                                : store.allGuesses.includes(char)
                                    ? 'bg-gray-400'
                                    : ''
                        return (
                            <div key={j} onClick={() => store.handleKeyup({ key: char })}
                                className={`rounded-m m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor} border`}
                            >
                                {char}
                            </div>
                        )
                    })}
                    {i === 2 &&
                        <div
                            onClick={() => store.submitGuess()}
                            className="rounded-m m-px flex h-10 w-14 items-center justify-center uppercase border ml-5"
                        >
                            Enter
                        </div>
                    }
                </div>
            ))}
        </div>
    )
})