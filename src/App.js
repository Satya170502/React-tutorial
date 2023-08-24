
import "./App.css";
import{useEffect,useState,createContext} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from "./Pages/Homepage";
import {Profile} from "./Pages/Profile";
import {Navbar} from "./Navbar";
export const AppContext=createContext();
function App() {
   const [username,setusername]=useState("Satya");


    return(
<div className="App">
    <AppContext.Provider value={{username, setusername}}>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage u />} />
            <Route path="/profile" element={<Profile  />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </Router>
    </AppContext.Provider>
    
  </div>
    );
   
}
export default App;