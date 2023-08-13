import "./App.css";
import {useState} from 'react';
function App() {


     const[count,setCount]=useState(0);                                                                //[variable,function]--useState



  return (
    <div className="App">
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={()=>{setCount(count*0)}}>Set to Zero</button>
{count}
    </div>
  );
}

export default App;