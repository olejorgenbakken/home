import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Button from "./components/Knapp/Knapp";
import Prosjekter from "./Views/Prosjekter/Prosjekter";
import Feilside from "./Views/Feilside/Feilside";
import Hjem from "./Views/Hjem/Hjem";
import Om from "./Views/OmMeg/OmMeg";
import Vipps from './Views/Prosjekt/Vipps/Vipps';

const App = () => {
  return (
    <Switch>
      <Route path="/prosjekter/vipps">
        <Vipps />
      </Route>
      <Route path="/prosjekter">
        <Prosjekter />
      </Route>
      <Route path="/prosjekter/*">
        <Feilside
          feilkode="404"
          forklaring="Dette prosjektet har jeg ikke jobba på :("
        >
          <Button href="/prosjekter">Gå til alle prosjekter</Button>
        </Feilside>
      </Route>
      <Route exact path="/om-meg">
        <Om />
      </Route>
      <Route exact path="/">
        <Hjem />
      </Route>
      <Route path="*">
        <Feilside feilkode="404" forklaring="Denne siden eksisterer ikke.">
          <Button href="/">Gå tilbake til hovedsiden</Button>
        </Feilside>
      </Route>
    </Switch>
  );
};

export default App;
