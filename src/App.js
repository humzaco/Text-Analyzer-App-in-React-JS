import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMood] = useState("light");

  const tonggleMode = () => {
    if (mode === "light") {
      setMood("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mood hase been eanable", "success");
    } else {
      setMood("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood hase been eanable", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title={"Sevenovn"} mode={mode} tonggleMode={tonggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" />
      </div>
    </>
  );
}

export default App;
