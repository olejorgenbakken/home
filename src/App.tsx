import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./Views/Home/Home";
import CV from "./Views/CV/Cv";
import NotFound from "./Views/NotFound/NotFound";
import Footer from "./components/footer/footer";
import ProjectRouter from "./Views/Projects/ProjectRouter";

import "./styles/global.css";



function App() {
  return (
    <Switch>
      <Route path="/prosjekter">
        <ProjectRouter />
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
        <Header transparent={true} position="absolute" />
        <NotFound message="Denne siden ekisterer ikke (ennå)" link="/" linkTitle="Gå til hovedsiden" />
        <Footer />
      </Route>
    </Switch >
  );
}

export default App;
