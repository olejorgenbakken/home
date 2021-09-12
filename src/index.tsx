import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAKyjXJR5Sh6gqlH8nLDyZ2d7qWNg2YV44",
  authDomain: "homepage-a0343.firebaseapp.com",
  projectId: "homepage-a0343",
  storageBucket: "homepage-a0343.appspot.com",
  messagingSenderId: "691600299529",
  appId: "1:691600299529:web:3e336a0448cc636fae8ad8"
};

const app = initializeApp(firebaseConfig);
console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);