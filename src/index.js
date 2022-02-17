import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/header";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header></Header>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
