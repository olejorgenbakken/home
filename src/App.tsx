import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Header from "./components/header/header";
import Home from "./Views/Home/home";
import CV from "./Views/CV/cv";
import NotFound from "./Views/NotFound/NotFound";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route exact path="/cv">
        <Header />
        <CV />
        <Footer />
      </Route>
      <Route>
        <Header background="transparent" position="absolute" />
        <NotFound />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
