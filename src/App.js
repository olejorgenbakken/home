import { Route } from "react-router-dom";

import "./styles/main.css";
import Home from "./views/home/home";
import Portfolio from "./views/portfolio/portfolio";
import CV from "./views/cv/cv";

function App() {
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/portefølje">
        <Portfolio />
      </Route>
      <Route path="/cv">
        <CV />
      </Route>
    </main>
  );
}

export default App;
