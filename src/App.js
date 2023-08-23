
import "./App.css";
import Axios from "axios";
import{useEffect,useState} from "react"


function App() {
    const[name,setname]=useState("");
    const[predictedage,setpredictedage]=useState(null);
    const fetchdata=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            setpredictedage(res.data);
            });
    };
    useEffect(()=>{
       fetchdata();
    },[]);


    return(
<div className="App">
    <input placeholder="" onChange={(event)=>{setname(event.target.value);}}/>
    <button onClick={fetchdata}>Predict Age</button>
    <h1>  Name: {predictedage?.name}</h1>
    <h1>  Predicted Age: {predictedage?.age}</h1>
    
  </div>
    );
   
}

export default App;