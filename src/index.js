import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import "./styles/global.css";
import Hjem from "./views/Hjem/hjem";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      <Hjem />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
