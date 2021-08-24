import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Home from "./views/home/home";
import Portfolio from "./views/portfolio/portfolio";
import CV from "./views/cv/cv";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/portefølje" component={Portfolio} />
      <Route path="/cv" component={CV}></Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
}

export default App;
