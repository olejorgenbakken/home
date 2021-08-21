import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
