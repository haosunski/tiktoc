
import './App.css'
import Square from './Square'

function App({squares,handlePlay,isXNext,currentMove}:{squares:string[], handlePlay:(i:any)=>void,isXNext:boolean,currentMove:number}) {
  
  let status="Next player is X"
  if(calculateWinner(squares)) {
    status = `Winer is ${isXNext?'O':'X'}`
  } else {
    if(currentMove == 9) {
      status = `Draw!`
    } else {
      status = `Next player is: ${isXNext?'X':'O'}`
    }
  }

  const onSquareClick = (index:number)=>{
    if(squares[index] || status.startsWith('Winer is')) return
    const s = squares.slice()
    if(isXNext) {
      s[index] = 'X'
    } else s[index] = "O"
    handlePlay(s)
  }

  return (
    <div className='boardWrapper'>
      <div className='title'>{status}</div>
      <div className='board'>
        {
          squares.map((item,index)=><Square key={index} index={index} value={item} onSquareClick={onSquareClick}/>)
        }
      </div>
    </div>
  )
}

function calculateWinner(squares:Array<null|string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App
