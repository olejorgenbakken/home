import { Route, Switch } from "react-router-dom";


import { Component } from "react";
import Hjem from "./views/Hjem/hjem";

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
