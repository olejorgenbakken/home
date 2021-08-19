import "./externalList.css";
import "../../../../styles/cards.css";
import GitHubLogo from "../../../../assets/logos/github.png";
import FigmaLogo from "../../../../assets/logos/figma.webp";
import BehanceLogo from "../../../../assets/logos/behance.svg";
import LinkedInLogo from "../../../../assets/logos/linkedin.png";

import ExternalItem from "./externalItem/externalItem";

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

function ExternalList(props) {
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
  return (
    <section className="external-webpages">
      <header>
        <h2>Se arbeidet mitt</h2>
      </header>
      <section className="cards-grid-4">{externalList}</section>
    </section>
  );
}

export default ExternalList;
