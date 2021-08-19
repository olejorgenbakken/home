import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <Header
        name="Ole Jørgen"
        description="Interaksjons&shy;designer og utvikler"
      />
      <App />
      <Footer
        text="Kildekoden til denne nettsiden er tilgjengelig på"
        link="https://github.com/olejorgenbakken/home"
        linkText="GitHub"
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
