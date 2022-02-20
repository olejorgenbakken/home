import { Route, Switch } from "react-router-dom";


import { Component } from "react";
import Prosjekter from "./sections/prosjekter/prosjekter";

class App extends Component {
  componentDidUpdate() {
    window.scroll(0, 0)
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <main>
            <Prosjekter />
          </main >
        </Route>
      </Switch>
    );
  }
};

export default App;
