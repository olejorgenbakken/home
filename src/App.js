import { Route, Switch } from "react-router-dom";

import "./styles/style.css";
import Home from "./views/home/home";
import Portfolio from "./views/portfolio/portfolio";
import CV from "./views/cv/cv";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/portefølje" component={Portfolio} />
      <Route path="/cv" component={CV}></Route>
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
}

export default App;
