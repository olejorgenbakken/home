import { Switch, Route } from "react-router-dom";
import "./portfolio.css";
import Vipps from "./projects/vipps/vipps";
import Header from "../../components/header/header";
import ProjectList from "../../components/projectList/projectList";
import Footer from "../../components/footer/footer";

import { Component } from "react";


const projectsArray = [
  {
    id: 1,
    title: "Vipps",
    logo: "https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC9jMlwvMTczMDkwXC9wcm9qZWN0c1wvMjkzMjE0XC9hc3NldHNcL2Y5XC81MzA0NTM0XC8zZDY2ODI1NjBkNmIwYTNjNTE2ZmY4NGE4OTA1OWYxNi0xNjE2NTA3MTc5LnBuZyJ9:frontify:f0sbjyAcp16QRISRP87qx_sO4msYVwvRgwl21DowjRc?width=2400",
    description: "",
    color: "#FF5B24",
  }
];


class Portfolio extends Component {

  render() {
    return (
      <Switch>
        <Route path={`/portefølje/vipps`}>
          <Header type="project" />
          <Vipps />
          <Footer />
        </Route>
        <Route exact path={`/portefølje`}>
          <Header />
          <ProjectList projects={projectsArray} />
          <Footer />
        </Route>
      </Switch>
    );
  }

}

export default Portfolio;
