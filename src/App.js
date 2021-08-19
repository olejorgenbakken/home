import { Route } from "react-router-dom";

import "./styles/main.css";
import CV from "./views/cv/cv";
import Home from "./views/home/home";

function App() {
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cv">
        <CV />
      </Route>
    </main>
  );
}

export default App;
