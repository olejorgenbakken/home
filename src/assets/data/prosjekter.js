import VippsLogo from "../ikoner/logoer/vipps.svg";
import VippsCover from "../prosjekter/vipps/cover.jpeg";
import VippsFinished from "../prosjekter/vipps/prototype-ferdig.png";

import PyskiskHelseLogo from "../ikoner/logoer/pyskiskhelse.svg";
import PyskiskHelseCover from "../prosjekter/psykisk-helse/cover.png";
import PyskiskHelseFinished from "../prosjekter/psykisk-helse/prototype-ferdig.png";

export const vipps = {
  bedrift: {
    navn: "Vipps",
    farger: {
      primær: "#ff5b24",
      sekundær: "#551488",
    },
  },
  tittel: "Sommerprosjekt hos Vipps",
  år: {
    start: 2021,
    end: 2021,
  },
  slug: "vipps",
  rolle: "Interaksjonsdesigner",
  prototype: "https://www.figma.com/community/file/1016826393815010584",
  bilder: {
    logo: VippsLogo,
    forside: VippsCover,
    innsikt: [],
    prototype: [],
    fullført: [VippsFinished],
  },
  oppgave: {
    tittel: "Hvordan kan vi samle inn mer penger til veldedighet?",
    beskrivelse:
      "Veldedige bedrifter bruker Vipps i større og større grad, og  ønsket om å lage noe for et veldedig marked innad i organisasjonen har vokst. Her er sommerstudentene fra 2021s løsning på hvordan man kan lage et skalerbart produkt for dette segmentet.",
    bakgrunn:
      "Den første uka ble brukt på innsiktsarbeid og å bli kjent med hveranre på teamet. Dette gjorde vi gjennom en Google Design Sprint. Her intervjuet, undersøkte, prototypet og testet vi en helt ny løsning. Etter dette satte vi opp prototyper basert på den endelige versjonen fra GDS. Den første uka lagde vi bare sluttbrukersiden, men nå skaffet vi også innsikt i hvordan Vippsportalen fungerte, og jobbet med den. De neste syv ukene brukte vi på å iterere de to prototypene i tandem, snakket med store og små bedrifter og å sende ut spørreundersøkelser. Den siste uken brukte vi på å ferdigstille hønivåprototypen og den tekniske prototypen, før vi presenterte den på onsdag. Her var hele Vipps tilstede for å gi tilbakemelding.",
    tester: [
      {
        tittel: "Folks donasjonsvaner i dag",
        type: "Spørreundersøkelse",
        funn: [
          {
            tittel: "Studenter",
            beskrivelse:
              'Studenter gir penger "her og der", ettersom hvor mye penger de anser som ansvarlig å bruke på veldedighet., Mennesker over 40 år med stødig økonomi gir gjerne en fast sum i måneden (eller året). Studenter gir til organisasjon som har muligheter til å støtte enkeltsaker, typisk Greenpeace sine fadderordninger. Hovedårsaken til dette er at siden de har dårlig råd – relativt til andre grupper som har svart i denne undersøkelsen – er de opptatt av at pengene er enkle å ettergå.',
          },
          {
            tittel: "Andre",
            beskrivelse:
              "De fleste andre gir til godt etablerte og velkjente organisasjoner, men akkurat grunnene til at de gir varierer veldig fra person til person. Noen (8%) gir utelukkende for skattefradraget man får etter å ha donert over 500 kroner i året.",
          },
          {
            tittel: "Alle",
            beskrivelse:
              "Felles for alle er at de hater mail de anser som spam, men hva som anses for å være spam er veldig forskjellig fra enkeltperson til enkeltperson. Sosiale medier fungerer helt greit, men få oppsøker informasjon til organisasjonene der (ca. 30%). SMS føles for en del brukere (ca. 20%) som et steg for langt, spesielt om de ikke har eksplisitt bedt om det. Mange (47% av alle) ønsker rett og slett ikke å følge med.",
          },
        ],
      },
      {
        tittel: "Donasjonsmarkedet i dag",
        type: "Intervju",
        funn: [
          {
            tittel: "Teknologien",
            beskrivelse:
              "Sliter med å administrere avtalene de har inngått, noe som fører til at de kvier seg for å inngå nye avtaler.Opplever at det er veldig stor variajon mellom organisasjonene i oppdateringer, avtalevilkår og -informasjon, tekniske løsninger og så videre. Det er rett og slett vanskelig å navigere markedet for de aller fleste.",
          },
          {
            tittel: "Markedet",
            beskrivelse:
              "Opplever at markedet endrer seg så ofte at det blir en kostnadspåkjennelse. Særlig fikk vi høre om hvordan Facebookdonasjoner var en kortvarig trend mange trodde skulle vare over lengre tid. Dette gjorde at de la om store deler av organisasjonen til å utnytte Facebookplattformen, og senere mistet store donasjonsmengder. I den sammenheng har mange gått over til å bruke Vipps som eneste kilde til inntekt nå, fordi de håper det er en stødig plattform i årene som kommer. Kvaliteten på kontaktinformasjon fra brukere varierer veldig fra plattform til plattform. Dette gjør det vanskelig å nå ut til potensielle avtaleinngåere etter de har donert et engangsbeløp.",
          },
        ],
      },
      {
        tittel: "Fullført prototype",
        type: "Intervju",
        funn: [
          {
            tittel: "Sluttbrukere",
            beskrivelse:
              "Brukerne syns løsningen fungerte veldig godt. Spesielt fornøyd var de med å kunne få oppdateringer fra organisasjonene gjennom Vippsappen.",
          },
          {
            tittel: "Organisasjonene",
            beskrivelse:
              "Organisasjonene var bare veldig glad for å vite at Vipps så på veldedighet som et av de viktige bruksområdene sine.",
          },
          {
            tittel: "Arbeidsgiver",
            beskrivelse:
              "Vipps ga mange hjerter og tomler opp på MS Teams, og Rune selv sa han gjerne skulle satt det ut på markedet “allerede i morgen”",
          },
        ],
      },
    ],
  },
};

export const pykiskHelse = {
  business: {
    name: "Psykisk Helse Magasinet",
    color: {
      primary: "#F6F3EC",
      secondary: "#1D3244",
    },
    logo: PyskiskHelseLogo,
  },
  slug: "psykisk-helse",
  role: "Interaksjonsdesigner",
  cover: PyskiskHelseCover,
  data: {
    title: "Redesign av magasinet Psykisk Helse",
    year: {
      start: 2020,
      end: 2020,
    },
    task: "Utform nettsiden til psykisk helse på en annen måte.",
    background:
      "Veldedige bedrifter bruker Vipps i større og større grad, og  ønsket om å lage noe for et veldedig marked innad i organisasjonen har vokst. Dette er sommerstudentene fra 2021s løsning på hvordan man kan lage et skalerbart produkt for dette segmentet.",
    timeline:
      "Den første uka ble brukt på innsiktsarbeid og å bli kjent med hveranre på teamet. Dette gjorde vi gjennom en Google Design Sprint. Her intervjuet, undersøkte, prototypet og testet vi en helt ny løsning. Etter dette satte vi opp prototyper basert på den endelige versjonen fra GDS. Den første uka lagde vi bare sluttbrukersiden, men nå skaffet vi også innsikt i hvordan Vippsportalen fungerte, og jobbet med den. De neste syv ukene brukte vi på å iterere de to prototypene i tandem, snakket med store og små bedrifter og å sende ut spørreundersøkelser. Den siste uken brukte vi på å ferdigstille hønivåprototypen og den tekniske prototypen, før vi presenterte den på onsdag. Her var hele Vipps tilstede for å gi tilbakemelding.",
    tests: [],
    images: {
      researching: [],
      prototyping: [],
      finished: [PyskiskHelseFinished],
    },
  },
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
};

const prosjekter = [vipps];

export default prosjekter;
