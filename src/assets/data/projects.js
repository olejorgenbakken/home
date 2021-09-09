import VippsLogo from "../projects/vipps/logo.svg";
import VippsCover from "../projects/vipps/cover.jpeg";

// import ShortcutLogo from "../projects/shortcut/logo.svg";
// import ShortcutCover from '../projects/shortcut/cover.jpeg';

import PyskiskHelseLogo from "../projects/psykisk-helse/logo.svg";
import PyskiskHelseCover from "../projects/psykisk-helse/cover.jpg";

const projects = [
  {
    workplace: "Vipps",
    slug: "vipps",
    role: "Interaksjonsdesign",
    year: {
      start: 2021,
      end: 2021,
    },
    description: "",
    logo: VippsLogo,
    color: "#ff5b24",
    image: VippsCover,
    tags: ["UX", "Brukertesting", "Prototype"],
  },
  {
    workplace: "Psykisk Helse Magasinet",
    slug: "pyskisk-helse-magasinet",
    role: "Interaksjonsdesign",
    year: {
      start: 2020,
      end: 2020,
    },
    description: "",
    logo: PyskiskHelseLogo,
    color: "#f7f7f7",
    image: PyskiskHelseCover,
  },
  {
    workplace: "Repairable",
    slug: "repairable",
    role: "Interaksjonsdesign og utvikling",
    year: {
      start: 2019,
      end: 2019,
    },
    description: "",
    logo: "",
    color: "#d13b3b",
    image: "",
  },
  {
    workplace: "Restaurant",
    slug: "skoleoppgave-restaurant",
    role: "Utvikling",
    year: {
      start: 2019,
      end: 2019,
    },
    description: "",
    logo: "",
    color: "#11f093",
    image: "",
  },
  {
    workplace: "Handleapp",
    slug: "skoleoppgave-handleapp",
    role: "Interaksjonsdesign",
    year: {
      start: 2019,
      end: 2019,
    },
    description: "",
    logo: "",
    color: "#45a3f0",
    image: "",
  },
];

export default projects;
