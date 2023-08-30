
import {useDispatch,useSelector} from "react-redux"
export const Home=()=>{
    const username=useSelector((state:any)=>state.user.value.username);
return (
    <h1>
        This is the home page of: {username}
    </h1>
);
}