import { useState } from 'react'
import App from "./App"
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [isXNext, setIsXNext] = useState(true)
    const [currentMove, setCurrentMove] = useState(0)
    let currentSquares = history[currentMove]

    const handlePlay = (squares: Array<null|string>) => {
        setHistory([...history.slice(), squares])
        setCurrentMove(currentMove+1)
        setIsXNext(!isXNext)
    }

    const handleBack = (index: number) =>{
        setCurrentMove(index)
        setIsXNext(index%2 == 0)
        setHistory(history.slice(0,index+1))
    }

    return (
        <div>
            <App squares={currentSquares} handlePlay={handlePlay} isXNext={isXNext} currentMove={currentMove}/>
            <div className='history'>
                <div className='title'>Time Travel - back to</div>
            {
                history.map((_,index)=><li key={index} onClick={()=>handleBack(index)}>{!index? currentMove==0?'Game start':'Start new game': '#'+index+' step'}</li>)
            }
            </div>
        </div>
    )
}