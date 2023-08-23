
import "./App.css";
import Axios from "axios";
import{useEffect,useState} from "react"


function App() {
    const[catfact,setcatfact]=useState("");
    const fetchcatfact=()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setcatfact(res.data.fact);
            });
    };
    useEffect(()=>{
       fetchcatfact();
    },[]);


    return(
<div className="App">
    <button onClick={fetchcatfact}>Generate Cat Fact</button>
    <p>  {catfact} </p>
  </div>
    );
   
}

export default App;