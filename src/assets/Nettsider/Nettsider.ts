import Nettside from "./Nettside";
import githubLogo from "./logoer/github.svg";
import figmaLogo from "./logoer/figma.svg";
import behanceLogo from "./logoer/behance.png";
import linkedInLogo from "./logoer/linkedin.svg";

const GitHub = new Nettside(
  "Github",
  "https://github.com/olejorgenbakken",
  githubLogo
);

const Figma = new Nettside("Figma", "https://figma.com/@olejorgen", figmaLogo);

const Behance = new Nettside(
  "Behance",
  "https://behance.net/olejorgenbakken",
  behanceLogo
);

const LinkedIn = new Nettside(
  "LinkedIn",
  "https://www.linkedin.com/in/ole-jorgen-bakken",
  linkedInLogo
);

export const nettsider = [Behance, GitHub, Figma, LinkedIn];
