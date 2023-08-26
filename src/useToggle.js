import {useState} from "react"
export const useToggle =(initialvalue=false)=>{
    const[state,setstate]=useState(initialvalue);
    const toggle=()=>{
        setstate((prev)=>!prev)
    }

    return (
   [state,toggle]
    );
};