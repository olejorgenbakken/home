import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./Views/Home/Home";
import CV from "./Views/CV/cv";
import Project from "./Views/Project/Project.jsx";
import Projects from "./Views/Projects/Projects";
import NotFound from "./Views/NotFound/NotFound";
import Footer from "./components/footer/footer";

import "./styles/global.css";

const App = () => {
  return (
    <Switch>
      <Route path="/prosjekter/:project">
        <Header />
        <Project />
        <Footer />
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
        <Header position="absolute" />
        <NotFound />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;
