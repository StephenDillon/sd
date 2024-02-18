import { observer } from 'mobx-react-lite'
import WordStore from '../stores/WordStore'

export default observer(function Keyboard({ store }: { store: typeof WordStore }) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return (
        <div>
            {qwerty.map((row, i) => (
                <div className="flex justify-center" key={i}>
                    {row.split('').map((char, j) => {
                        const bgColor = store.exactGuesses.includes(char)
                            ? 'bg-green-400'
                            : store.inexactGuesses.includes(char)
                                ? 'bg-yellow-400'
                                : store.allGuesses.includes(char)
                                    ? 'bg-gray-400'
                                    : 'bg-gray-200'
                        return (
                            <div key={j}
                                className={`rounded-m m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor}`}
                            >
                                {char}
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    )
})