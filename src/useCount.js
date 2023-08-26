import { useState } from "react";

export const useCount=()=>{
    const [count,setcount]=useState(0);
    const increase=()=>{
        setcount(count+1)
    };
    const decrease=()=>{
        setcount(count-1)
    };
    const reset=()=>{
        setcount(0)
    };
    return ([count,increase,decrease,reset])
}