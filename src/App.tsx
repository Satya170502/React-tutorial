import React from 'react';
import {Person,Country} from './Person'
import './App.css';

function App() {
  /*const getAge=(name:string):number=>{
    return 21 specifying in a function
  }*/
  return (
    <div className="App">
      <Person
      name="Satya"
      email="Satya@email.com"
      age={21}
      isMarried={false}
      friends={["jake","jessica","jerry"]}
      country={Country.India}
       
       />
    </div>
  );
}

export default App;
