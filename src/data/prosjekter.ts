class Prosjekt {
  tittel: string;
  href: string;
  bilde?: string;
  type: string[];

  constructor(tittel: string, href: string, type: string[], bilde?: string) {
    this.tittel = tittel;
    this.href = href;
    this.type = type;
    this.bilde = bilde;
  }
}

export const vipps_sluttbruker = new Prosjekt(
  "Vipps Donasjon: Sluttbruker",
  "https://www.figma.com/community/file/1016826207776299287",
  ["Prototype", "Design"],
  "https://s3-alpha.figma.com/hub/file/1151802577/81b2e37e-f689-4832-859f-dfbe00c2f672-cover.png"
);

export const vipps_bedrift = new Prosjekt(
  "Vipps Donasjon: Bedrift (Vippsportalen)",
  "https://www.figma.com/community/file/1016826393815010584",
  ["Prototype", "Design"],
  "https://s3-alpha.figma.com/hub/file/1127134066/0e719eac-3b18-4ec5-83f8-ee9e329e3a0f-cover.png"
);

export const psykisk_helse = new Prosjekt(
  "Redesign av Bladet Psykisk Helse",
  "https://www.figma.com/community/file/939562522146043402",
  ["Prototype", "Design"],
  "https://s3-alpha.figma.com/hub/file/664091310/2e662608-8e35-418e-b90a-6dddd5e50e6c-cover.png"
);

export const website = new Prosjekt(
  "Dette nettstedet",
  "https://github.com/olejorgenbakken/personal-homepage",
  ["Kode", "React"]
);

const prosjekter = [website, vipps_bedrift, vipps_sluttbruker, psykisk_helse];

export default prosjekter;
