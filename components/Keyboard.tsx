import { observer } from 'mobx-react-lite'
import WordStore from '../stores/WordStore'
import { FaBackspace } from "react-icons/fa";

export default observer(function Keyboard({ store }: { store: typeof WordStore }) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return (
        <div className='user-select-none'>
            {qwerty.map((row, i) => (
                <div className="d-flex justify-content-center m-2" key={i}>
                    {i === 2 &&
                        <div
                            onClick={() => store.handleKeyup({ key: 'Backspace' })}
                            className="rounded m-1 d-flex align-items-center justify-content-center text-uppercase border mr-2"
                            style={{ height: '2.5rem', width: '2.5rem' }}
                        >
                            <FaBackspace />
                        </div>
                    }
                    {row.split('').map((char, j) => {
                        const bgColor = store.exactGuesses.includes(char)
                            ? 'bg-success'
                            : store.inexactGuesses.includes(char)
                                ? 'bg-warning'
                                : store.allGuesses.includes(char)
                                    ? 'bg-secondary'
                                    : ''
                        return (
                            <div key={j} onClick={() => store.handleKeyup({ key: char })}
                                className={`rounded m-1 d-flex align-items-center justify-content-center text-uppercase ${bgColor} border`}
                                style={{ height: '2.5rem', width: '2.5rem' }}
                            >
                                {char}
                            </div>
                        )
                    })}
                    {i === 2 &&
                        <div
                            onClick={() => store.submitGuess()}
                            className="rounded m-1 d-flex align-items-center justify-content-center text-uppercase border ml-2"
                            style={{ height: '2.5rem', width: '3.5rem' }}
                        >
                            Enter
                        </div>
                    }
                </div>
            ))}
        </div>
    )
})