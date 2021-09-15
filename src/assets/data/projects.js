import VippsLogo from "../projects/vipps/logo.svg";
import VippsCover from "../projects/vipps/cover.jpeg";

import PyskiskHelseLogo from "../projects/psykisk-helse/logo.svg";
import PyskiskHelseCover from "../projects/psykisk-helse/cover.png";

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
  business: {
    name: "Vipps",
    color: {
      primary: "#ff5b24",
      secondary: "#000000",
    },
    logo: VippsLogo,
  },
  role: "Interaksjonsdesigner",
  cover: VippsCover,
  tags: { prototyping: prototypingTags, tech: technologyTags[7] },
  data: {
    year: {
      start: 2021,
      end: 2021,
    },
    task: "Hvordan kan vi samle inn mer penger til veldedighet?",
    timeline:
      "Den første uka ble brukt på innsiktsarbeid og å bli kjent med hveranre på teamet. Dette gjorde vi gjennom en Google Design Sprint. Her intervjuet, undersøkte, prototypet og testet vi en helt ny løsning. Etter dette satte vi opp prototyper basert på den endelige versjonen fra GDS. Den første uka lagde vi bare sluttbrukersiden, men nå skaffet vi også innsikt i hvordan Vippsportalen fungerte, og jobbet med den. De neste syv ukene brukte vi på å iterere de to prototypene i tandem, snakket med store og små bedrifter og å sende ut spørreundersøkelser. Den siste uken brukte vi på å ferdigstille hønivåprototypen og den tekniske prototypen, før vi presenterte den på onsdag. Her var hele Vipps tilstede for å gi tilbakemelding.",
    research: {
      market:
        "Veldedige bedrifter bruker Vipps i større og større grad, og  ønsket om å lage noe for et veldedig marked innad i organisasjonen har vokst. Dette er sommerstudentene fra 2021s løsning på hvordan man kan lage et skalerbart produkt for dette segmentet.",
      tests: [
        {
          title: "Folks donasjonsvaner i dag",
          type: "Spørreundersøkelse",
          findings: [
            "Studenter gir penger “her og der”, ettersom hvor mye penger de anser som ansvarlig å bruke på veldedighet., Mennesker over 40 år med stødig økonomi gir gjerne en fast sum i måneden (eller året).",
            "Studenter gir til organisasjon som har muligheter til å støtte enkeltsaker, typisk Greenpeace sine fadderordninger. Hovedårsaken til dette er at siden de har dårlig råd – relativt til andre grupper som har svart i denne undersøkelsen – er de opptatt av at pengene er enkle å ettergå. De fleste andre gir til godt etablerte og velkjente organisasjoner, men akkurat grunnene til at de gir varierer veldig fra person til person. Noen (8%) gir utelukkende for skattefradraget man får etter å ha donert over 500 kroner i året.",
            "Felles for alle er at de hater mail de anser som spam, men hva som anses for å være spam er veldig forskjellig fra enkeltperson til enkeltperson. Sosiale medier fungerer helt greit, men få oppsøker informasjon til organisasjonene der (ca. 30%). SMS føles for en del brukere (ca. 20%) som et steg for langt, spesielt om de ikke har eksplisitt bedt om det. Mange (47% av alle) ønsker rett og slett ikke å følge med.",
          ],
        },
        {
          title: "Donasjonsmarkedet i dag",
          type: "Intervju",
          findings: [
            "Sliter med å administrere avtalene de har inngått, noe som fører til at de kvier seg for å inngå nye avtaler.Opplever at det er veldig stor variajon mellom organisasjonene i oppdateringer, avtalevilkår og -informasjon, tekniske løsninger og så videre. Det er rett og slett vanskelig å navigere markedet for de aller fleste.",
            "Opplever at markedet endrer seg så ofte at det blir en kostnadspåkjennelse. Særlig fikk vi høre om hvordan Facebookdonasjoner var en kortvarig trend mange trodde skulle vare over lengre tid. Dette gjorde at de la om store deler av organisasjonen til å utnytte Facebookplattformen, og senere mistet store donasjonsmengder. I den sammenheng har mange gått over til å bruke Vipps som eneste kilde til inntekt nå, fordi de håper det er en stødig plattform i årene som kommer. Kvaliteten på kontaktinformasjon fra brukere varierer veldig fra plattform til plattform. Dette gjør det vanskelig å nå ut til potensielle avtaleinngåere etter de har donert et engangsbeløp.",
          ],
        },
        {
          title: "Fullført prototype",
          type: "Intervju",
          findings: [
            "Brukerne syns løsningen fungerte veldig godt. Spesielt fornøyd var de med å kunne få oppdateringer fra organisasjonene gjennom Vippsappen.",
            "Organisasjonene var bare veldig glad for å vite at Vipps så på veldedighet som et av de viktige bruksområdene sine.",
            "Vipps ga mange hjerter og tomler opp på MS Teams, og Rune selv sa han gjerne skulle satt det ut på markedet “allerede i morgen”.",
          ],
        },
      ],
    },
  },
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
  color: "#026464",
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

const projects = [vipps];

export default projects;
