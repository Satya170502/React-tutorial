
import {useQuery} from "@tanstack/react-query"; 
import Axios from "axios";
export const Homepage=()=>{
    const {data: catData,isLoading,refetch}=useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const {username}=useContext(AppContext);
    return <h1>this is home page <p>{catData?.fact}</p>
    <button onClick={refetch}>
        Update Data
        
        </button></h1>;
};