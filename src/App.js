// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";

// let name = "Aditya"
function App() {
  const [mode, setMode] = useState('light'); //defines dark mode is on or off
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    
  setAlert({
    msg: message,
    type: type
  })
  
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success")

    }
  }
  return (
   <>
   <Router>
   
<Navbar Title="TextEdits" textAbout="About us" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-5">
<Routes>
          <Route exact path="/about"
           element={ <About mode={mode} />} />
         
         
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Text to analysis" mode={mode} />}/>
          
        </Routes>
</div>
</Router>
   </>
  );
}


export default App;

/* <About className="container my-5"  /> */
/* <button className='btn btn-seondary ' /> */
/* <Navbar  />  */