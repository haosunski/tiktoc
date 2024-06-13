import t from "./dec/t"

export default function Square({value, index,onSquareClick}: t) {

    // const [value, setValue] = useState('')
    return <button className="square" onClick={()=>onSquareClick(index)}>{value}</button>
}