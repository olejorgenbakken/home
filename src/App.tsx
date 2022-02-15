import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Hjem from "./Views/Hjem/Hjem";
import { Component } from "react";

class App extends Component {
  componentDidUpdate() {
    window.scroll(0, 0)
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Hjem />
        </Route>
      </Switch>
    );
  }
};

export default App;
