const products: Array<pd> = [
    {id:1, name:'mouse',price:1.2},
    {id:2, name:'keyboard',price:12},
    {id:3, name:'monitor',price:122},
  ]
import ProductDetail from './productDetail.tsx'
import {pd} from "./dec/t";
import { useState,useEffect } from 'react';
let i = 0
export default function Test() {
    const [isFirst, setIsfirst] = useState(false)
    const [u, setU] = useState('hello')
    i++;
    console.log(i)
    const ud = useData(u)
    const udd = useDataa(ud)
    console.log('ud',ud)
    console.log('udd',udd)
    return (
        <div style={{marginTop: '40px'}}>
            { isFirst ?<ProductDetail key={products[0].id} id={products[0].id} name={products[0].name} price={products[0].price}/>:
                <ProductDetail key={products[1].id} id={products[1].id} name={products[1].name} price={products[1].price}/>
            }
            {/* <ProductDetail id={products[0].id} name={products[0].name} price={products[0].price}/>
            {!isFirst && <ProductDetail id={products[1].id} name={products[1].name} price={products[1].price}/>}
            <ProductDetail id={products[2].id} name={products[2].name} price={products[2].price}/> */}
            
            <button onClick={()=>setIsfirst(!isFirst)}> switch first</button>
            <button onClick={()=>setU(`${new Date()}`)}> change url</button>
        </div>
    )
}

function useData(url:string) {
    const [data, setData] = useState('');
    useEffect(() => {
        let ignore = false;
        setTimeout(() => {
            if(!ignore) setData(url);
        }, 2000);
        
        return () => {ignore = true}
                    
    }, [url]);
  return data;
}

function useDataa(url:string) {
    const [data, setData] = useState('');
    useEffect(() => {
        let ignore = false;
        setTimeout(() => {
            if(!ignore) setData(url);
            
        }, 1000);
        return () => {ignore = true}
                    
    }, [url]);
  return data;
}