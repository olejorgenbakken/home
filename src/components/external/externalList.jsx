import "./externalList.css";
import GitHubLogo from "../../assets/logos/github.svg";
import FigmaLogo from "../../assets/logos/figma.svg";
import BehanceLogo from "../../assets/logos/behance.svg";
import LinkedInLogo from "../../assets/logos/linkedin.svg";

import ExternalItem from "./externalItem/externalItem";
import Grid from "../grid/grid";

const webpages = [
  {
    id: 1,
    logo: GitHubLogo,
    title: "GitHub",
    link: "https://github.com/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 2,
    logo: FigmaLogo,
    title: "Figma",
    link: "https://figma.com/@olejorgen",
    description: "",
    color: "white",
  },
  {
    id: 3,
    logo: BehanceLogo,
    title: "Behance",
    link: "https://behance.net/olejorgenbakken",
    description: "",
    color: "white",
  },
  {
    id: 4,
    logo: LinkedInLogo,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ole-jorgen-bakken/",
    description: "",
    color: "white",
  },
];

function ExternalList() {
  const externalList = webpages.map((page) => (
    <ExternalItem
      key={page.id}
      title={page.title}
      link={page.link}
      logo={page.logo}
      description={page.description}
      background={page.color}
    ></ExternalItem>
  ));
  return <Grid grids="5" elements={externalList} />;
}

export default ExternalList;
