import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import ToppMeny from "./components/ToppMeny/ToppMeny";
import BunnMeny from "./components/BunnMeny/BunnMeny";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <ToppMeny />
      <App />
      <BunnMeny />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
