import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import { Component } from "react";

class App extends Component {
  componentDidUpdate() {
    window.scroll(0, 0)
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
        </Route>
      </Switch>
    );
  }
};

export default App;
