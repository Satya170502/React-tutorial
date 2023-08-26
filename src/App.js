
import "./App.css";
import {useState} from "react"
import { useToggle } from "./useToggle";
import { useCount } from "./useCount";

function App() {
   const[count,increase,decrease,reset]=useCount();
 

    return(<div className="App">
      {count}
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>

    </div>);
   
}
export default App;