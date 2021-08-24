import { Component } from "react";
import Grid from "../grid/grid";

import "./externalList.css";
// import { ReactComponent as GitHubLogo } from "../../assets/logos/github.svg";
// import { ReactComponent as FigmaLogo } from "../../assets/logos/figma.svg";
// import BehanceIcon from '../../assets/logos/behance';
// import { ReactComponent as LinkedInLogo } from "../../assets/logos/linkedin.svg";

import ExternalItem from "./externalItem/externalItem";

const webpages = [
  {
    id: 1,
    title: "GitHub",
    href: "https://github.com/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 2,
    title: "Figma",
    href: "https://figma.com/@olejorgen",
    description: "",
    color: "white",
  },
  {
    id: 3,
    title: "Behance",
    href: "https://behance.net/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 4,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ole-jorgen-bakken/",
    description: "",
    color: "white",
  },
];

class ExternalList extends Component {

  getList() {
    const externalList = webpages.map((page) => (
      <ExternalItem
        key={page.id}
        title={page.title}
        href={page.href}
      />
    ));

    return (externalList);
  }


  render() {
    return (
      <section>
        <Grid data-grids="5" elements={this.getList()} />
      </section>
    );
  }
}

export default ExternalList;
