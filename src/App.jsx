import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./Views/Home/Home";
import CV from "./Views/CV/cv";
import NotFound from "./Views/NotFound/NotFound";
import Footer from "./components/footer/footer";

import "./styles/global.css";
import Project from "./Views/Project/Project.jsx";
import Projects from "./Views/Projects/Projects";

function App() {
  return (
    <Switch>
      <Route path="/prosjekter/:project">
        <Project />
      </Route>
      <Route path="/prosjekter">
        <Header />
        <Projects />
        <Footer />
      </Route>
      <Route exact path="/cv">
        <Header />
        <CV />
        <Footer />
      </Route>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route path="*">
        <NotFound
          message="Denne siden ekisterer ikke (ennå)"
          link="/"
          linkTitle="Gå til hovedsiden"
        />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
