import VippsLogo from "../projects/vipps/logo.svg";
import VippsCover from "../projects/vipps/cover.jpeg";

import PyskiskHelseLogo from "../projects/psykisk-helse/logo.svg";
import PyskiskHelseCover from "../projects/psykisk-helse/cover.jpg";

const prototypingTags = ["Universell utforming (UU)"];
const technologyTags = [
  "VueJS",
  "React",
  "HTML/CSS",
  "Javascript",
  "Firebase",
  "C#",
  "API",
  "Figma",
];

const allTags = [prototypingTags, technologyTags];

export const vipps = {
  workplace: "Vipps",
  slug: "vipps",
  role: "Interaksjonsdesign",
  year: {
    start: 2021,
    end: 2021,
  },
  task: "Hvordan kan vi samle inn mer penger til veldedighet?",
  logo: VippsLogo,
  color: "#ff5b24",
  image: VippsCover,
  tags: { prototyping: prototypingTags, tech: technologyTags[7] },
};

export const pykiskHelse = {
  workplace: "Psykisk Helse Magasinet",
  slug: "pyskisk-helse-magasinet",
  role: "Interaksjonsdesign",
  year: {
    start: 2020,
    end: 2020,
  },
  task: "",
  logo: PyskiskHelseLogo,
  color: "#f7f7f7",
  image: PyskiskHelseCover,
  tags: technologyTags,
};

export const repairable = {
  workplace: "Repairable",
  slug: "repairable",
  role: "Interaksjonsdesign og utvikling",
  year: {
    start: 2019,
    end: 2019,
  },
  task: "",
  logo: "",
  color: "#d13b3b",
  image: "",
  tags: allTags,
};

export const restaurant = {
  workplace: "Restaurant",
  slug: "skoleoppgave-restaurant",
  role: "Utvikling",
  year: {
    start: 2019,
    end: 2019,
  },
  task: "",
  logo: "",
  color: "#11f093",
  image: "",
  tags: allTags,
};

export const handleapp = {
  workplace: "Handleapp",
  slug: "skoleoppgave-handleapp",
  role: "Interaksjonsdesign",
  year: {
    start: 2019,
    end: 2019,
  },
  task: "",
  logo: "",
  color: "#45a3f0",
  image: "",
  tags: allTags,
};

const projects = [vipps, pykiskHelse, repairable, restaurant, handleapp];

export default projects;
