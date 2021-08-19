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
  },
  {
    id: 2,
    logo: FigmaLogo,
    title: "Figma",
    link: "https://figma.com/@olejorgen",
    description: "",
  },
  {
    id: 3,
    logo: BehanceLogo,
    title: "Behance",
    link: "https://behance.net/olejorgenbakken",
    description: "",
  },
  {
    id: 4,
    logo: LinkedInLogo,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ole-jorgen-bakken/",
    description: "",
  },
];

function ExternalList(props) {
  const externalList = webpages.map((page) => (
    <ExternalItem
      key={page.id}
      title={page.title}
      link={page.link}
      description={page.description}
    ></ExternalItem>
  ));
  return (
    <section className="width-900 external-webpages">
      <header>
        <h2>Finn meg andre steder</h2>
      </header>
      <section className="cards-row">{externalList}</section>
    </section>
  );
}

export default ExternalList;
