import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      document.getElementById("switch").textContent = "Disable Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("switch").textContent = "Enable Dark Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter your text"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
