import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

function App() {
  const [ mode, setMood ] = useState("light")

  const tonggleMode = () => {
    if(mode === 'light'){
      setMood('dark')
      document.body.style.backgroundColor = '#212529';
    }else{
      setMood('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar 
        title={"Sevenovn"}
        mode={mode} 
        tonggleMode={tonggleMode}
      />
      <div className="container mt-3">
        <TextForm heading="Enter The Text To Analyze" />
      </div>
    </>
  );
}

export default App;
