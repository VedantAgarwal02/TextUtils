// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import React from 'react';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// let name = "Vedant";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggle = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#432C7A';
    showAlert("Dark Mode Enabled","success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Enabled","success")
    }
  }
  return (
      <>    
      <Router>
      <Navbar title="TextUtils" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to be Rendered:" mode={mode}/>}></Route>
          <Route path="/About" element={<About mode={mode}/>}></Route>
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the Text to be Rendered:" mode={mode}/> */}
        {/* <About/> */}
      </div>
      </Router>
      </>
  );
}

export default App;
