import Nettside from "./Nettside";

const GitHub = new Nettside(
  "Github",
  "https://github.com/olejorgenbakken",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F91%2FOcticons-mark-github.svg%2F1024px-Octicons-mark-github.svg.png&f=1&nofb=1"
);

const Figma = new Nettside(
  "Figma",
  "https://figma.com/@olejorgen",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F33%2FFigma-logo.svg%2F128px-Figma-logo.svg.png&f=1&nofb=1"
);

const Behance = new Nettside(
  "Behance",
  "https://behance.net/olejorgenbakken",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fbehance-2-logo-png-transparent.png&f=1&nofb=1"
);

const LinkedIn = new Nettside(
  "LinkedIn",
  "https://www.linkedin.com/in/ole-jorgen-bakken",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG39.png&f=1&nofb=1"
);

export const nettsider = [Behance, GitHub, Figma, LinkedIn];
