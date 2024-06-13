import { useRef } from "react"

interface attribute {
    namee: string,
    onClick: (n:string|null)=>void
}

export default function Hello({namee,onClick}:attribute) {
    const nameeeRef = useRef<HTMLInputElement>(null)
    return (<>
    <p> hello my {namee}</p>
    <input type="text" name="todo" id="todo" ref={nameeeRef}/>
    <input type="submit" value="" onClick={onClick.bind(null,nameeeRef.current!.value)} />
    </>)
}