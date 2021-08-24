import "./externalList.css";
import GitHubLogo from "../../assets/logos/github.svg";
import FigmaLogo from "../../assets/logos/figma.svg";
import BehanceLogo from "../../assets/logos/behance.svg";
import LinkedInLogo from "../../assets/logos/linkedin.svg";

import ExternalItem from "./externalItem/externalItem";
import Grid from "../grid/grid";
import { Component } from "react";

const webpages = [
  {
    id: 1,
    logo: GitHubLogo,
    title: "GitHub",
    href: "https://github.com/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 2,
    logo: FigmaLogo,
    title: "Figma",
    href: "https://figma.com/@olejorgen",
    description: "",
    color: "white",
  },
  {
    id: 3,
    logo: BehanceLogo,
    title: "Behance",
    href: "https://behance.net/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 4,
    logo: LinkedInLogo,
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
        logo={page.logo}
      />
    ));

    return (externalList);
  }


  render() {
    return <Grid data-grids="5" elements={this.getList()} />;
  }
}

export default ExternalList;
