
import "./App.css";
import Axios from "axios";
import{useEffect,useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Homepage} from "./Pages/Homepage";
import {Menu} from "./Pages/Menu";
import {Navbar} from "./Navbar";
function App() {
   


    return(
<div className="App">
    
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </Router>
  </div>
    );
   
}

export default App;