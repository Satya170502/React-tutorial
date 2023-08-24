import{useState} from "react";
import {useContext} from "react";
import {AppContext} from '../App';
export const ChangeProfile =(props)=>{
    const {setusername}=useContext(AppContext);
    const[newusername,setnewusername]=useState("");
return(<div>
     {""}
     <input onChange={(event)=>{setnewusername(event.target.value);}} />
     <button onClick={()=>{setusername(newusername);}}>Change Username</button>
    </div>); 
};