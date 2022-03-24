import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (message = "light mode has been enabled", type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 850);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils Dark";
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      document.title = "Textutils light";
      showAlert("light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
      <Router>
        <Navbar
          title="textils"
          aboutText="about"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
        <Switch>
          <Route path="/about">
            <div className="container my-3">
              <About mystyle={mystyle} toggleMode={toggleMode}/>
            </div>
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text"></TextForm>
          </Route>
        </Switch>
        </div>
      </Router>

  );
}

export default App;
