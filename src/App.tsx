import { Route, Switch } from "react-router-dom";

import "./styles/global.css";
import Button from "./components/Knapp/Knapp";
import Feilside from "./Views/Feilside/Feilside";
import Hjem from "./Views/Hjem/Hjem";
import Om from "./Views/OmMeg/OmMeg";
import Vipps from './Views/Prosjekt/Vipps/Vipps';
import Prosjekter from "./Views/Prosjekter/Prosjekter";

const App = () => {
  return (
    <Switch>
      <Route path="/prosjekter/psykisk-helse">
        <Vipps />
      </Route>
      <Route path="/prosjekter/vipps">
        <Vipps />
      </Route>
      <Route exact path="/prosjekter">
        <Prosjekter />
      </Route>
      <Route path="/prosjekter/*">
        <Feilside>
          <Button href="/prosjekter" tittel="Til alle prosjekter">Gå til alle prosjekter</Button>
        </Feilside>
      </Route>
      <Route exact path="/om-meg">
        <Om />
      </Route>
      <Route exact path="/">
        <Hjem />
      </Route>
      <Route path="*">
        <Feilside>
          <Button href="/" tittel="Til hovedsiden">Gå tilbake til hovedsiden</Button>
        </Feilside>
      </Route>
    </Switch>
  );
};

export default App;
