import {useContext} from "react";
import {AppContext} from '../App';
export const Homepage=(props)=>{
    const {username}=useContext(AppContext);
    return <h1>this is home page and user is: {username}</h1>;
};