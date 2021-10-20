import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Button from "./components/Knapp/Knapp";
import ToppMeny from "./components/ToppMeny/ToppMeny";
import Prosjekt from "./Views/Prosjekt/Prosjekt";
import BunnMeny from "./components/BunnMeny/BunnMeny";
import Prosjekter from "./Views/Prosjekter/Prosjekter";
import Feilside from "./Views/Feilside/Feilside";
import Hjem from "./Views/Hjem/Hjem";
import Om from "./Views/Om/Om";

const App = () => {
  return (
    <Switch>
      <Route path="/prosjekter/:prosjekt">
        <ToppMeny />
        <Prosjekt />
        <BunnMeny />
      </Route>
      <Route path="/prosjekter">
        <ToppMeny />
        <Prosjekter />
        <BunnMeny />
      </Route>
      <Route exact path="/om-meg">
        <ToppMeny />
        <Om />
        <BunnMeny />
      </Route>
      <Route exact path="/">
        <ToppMeny />
        <Hjem />
        <BunnMeny />
      </Route>
      <Route path="*">
        <ToppMeny />
        <Feilside feilkode="404" forklaring="Denne siden eksisterer ikke.">
          <Button href="/">Gå tilbake til hovedsiden</Button>
        </Feilside>
        <BunnMeny />
      </Route>
    </Switch>
  );
};

export default App;
