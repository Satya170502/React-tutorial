import "./App.css";
import {useState} from 'react';
function App() {


     const[inputvalue,setinputvalue]=useState("");                                                                 //[variable,function]--useState
const handleinputchange=(event)=>{setinputvalue(event.target.value);};


  return (
    <div className="App">
    <input type="text" onChange={handleinputchange}/>
    {inputvalue}
    </div>
  );
}

export default App;