import {useState} from "react";
import {login,logout} from "./store"
import {useDispatch,useSelector} from "react-redux"
export const Login=()=>{
    const [newusername, setnewusername] = useState<string>("");
    const dispatch=useDispatch();
    const username=useSelector((state:any)=>state.user.value.username);
return (
    <h1>
        {username}
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setnewusername(e.target.value)}}  />
        <button onClick={()=>dispatch(login({username:newusername}))}>Submit Login</button>
        <button onClick={()=>dispatch(logout())}  >Logout</button>
    </h1>
);
}