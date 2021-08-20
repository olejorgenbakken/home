import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import "./portfolio.css";

import Header from "../../components/header/header";
import Grid from "../../components/grid/grid";
import Footer from "../../components/footer/footer";
import Vipps from "./vipps/vipps";

function Portfolio() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/vipps`}>
        <Header type="project" />
        <Vipps />
        <Footer />
      </Route>
      <Route exact path={`${match.path}`}>
        <Header />
        <main className="width-1000 padding">
          <h1>Prosjekter</h1>
          <Grid
            grids="3"
            elements={<Link to={`${match.url}/vipps`}>Vipps</Link>}
          ></Grid>
        </main>
        <Footer />
      </Route>
      <Route path={`${match.path}`}>
        <Header />
        <p className="width-1000">Dette prosjektet finnes ikke 😭</p>
        <Link to={`${match.url}/vipps`}>Vipps</Link>
        <Footer />
      </Route>
    </Switch>
  );
}

export default Portfolio;
