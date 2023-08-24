import {useContext} from "react";
import {AppContext} from '../App';
import {ChangeProfile} from "../components/ChangeProfile"
export const Profile=(props)=>{
    const {username}=useContext(AppContext);
    return <div>Profile, user is: {username} <ChangeProfile setusername={setusername}/></div>;
};