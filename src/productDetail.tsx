import { useState } from "react";
import {pd} from "./dec/t";

export default function ProductDetail({id, name, price}: pd) {
    const [count,setCount] = useState(0)
    return (
        <>
            <div>{id} : {name} for {price}</div>
            <div>I'd like to buy {count}</div>
            <button onClick={()=>setCount(count+1)}>Add one</button>
        </>
    )
}