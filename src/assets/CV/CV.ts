import { Erfaring } from "./Erfaring";

const HKU = new Erfaring(
  "Høyskolen Kristiania",
  "Bachelor i Informatikk med spesialisering i interaksjonsdesign",
  {
    start: [2018, "august"],
    slutt: [2021, "juni"],
  },
  "Innføring i mange ulike informatikkemner, som databaser, programmering og datamaskinens oppbygging. Etter et felles førsteår ble vi delt inn i spesialiseringene våre hvor jeg hadde tre emner om interaksjonsdesign, hvor vi lærte om alt fra prototyping av brukergrensesnitt, og testing av disse, til innholdsproduksjon.",
  [
    "APIer",
    "Databaser",
    "C#",
    "Javascript",
    "PHP",
    "Wordpress",
    "UX/UI",
    "Spørreundersøkelser",
    "Brukertesting",
    "Innholdsproduksjon",
  ]
);

const UiO = new Erfaring(
  "Universitet i Oslo",
  "Årsstudium i Kjønnsstudier og sosiologi",
  {
    start: [2017, "august"],
    slutt: [2018, "juni"],
  },
  "Introduserende emner om ulike teorier innen sosiologi og kjønn.",

  ["Likestilling", "Historie", "Sosiologi"]
);

const HiVolda = new Erfaring(
  "Høyskolen i Volda",
  "Årsstudium i Mediekommunikasjon",
  {
    start: [2016, "august"],
    slutt: [2017, "juni"],
  },
  "Introduserende emner innen medieproduksjon, medietolking, samt kvantitativ og kvalitativ forskningsmetode.",

  ["Videproduksjon", "Markedsføring", "Akademisk skriving"]
);

export const utdanning = [HKU, UiO, HiVolda];

const Nav = new Erfaring(
  "Nav",
  "Designer",
  {
    start: [2021, "november"],
  },
  "Jeg har nettopp starta som designer her, så hvem vet hva fremtiden vil bringe? Ikke jeg.",
  ["UX", "Brukerinnsikt", "Designsystem", "Figma"]
);

const Vipps = new Erfaring(
  "Vipps",
  "Interaksjonsdesigner",
  { start: [2021, "juni"], slutt: [2021, "august"] },
  "Brukertesting, utvikling av prototyper, analyse av innsikt, tett samarbeid med utviklere både frontend og backend. Vi jobbet i et tverrfaglig team på 12 stykker, hvor jeg var en av tre designere. Et sentralt tema for meg var å sette meg inn i Vipps sitt designsystem, og å videreutvikle dette for veldedighetsbransjen. Tidlig i prosessen fasiliterte jeg Google Design Sprint for mitt team på seks stykker for å utvikle konseptet vi skulle jobbe med videre.",
  ["Figma", "Google Design Sprint", "Designsystem", "Smidig metodikk"]
);

const Shortcut = new Erfaring(
  "Shortcut AS",
  "Interaksjonsdesigner",
  { start: [2021, "januar"], slutt: [2021, "juni"] },
  "Konseptutvikling og prototyping av en applikasjon for Android, med bruk av de nyeste teknologiene som var tilgjengelig på det tidspunktet. Her var det sentralt å gjennomføre så mange brukertester som mulig for å sikre brukervennlighet, og for å skaffe domenekunnskap.",
  ["Android", "Figma", "Google Design Sprint", "ScrumBan"]
);

const HKA = new Erfaring(
  "Høyskolen Kristiania",
  "Studentassistent",
  { start: [2019, "august"], slutt: [2021, "juni"] },
  "Her var jeg et bindeledd mellom forelesere og studenter, samtidig som jeg rettet eksamener og arbeidskrav i samarbeid med foreleseren og andre assistenter.",
  [
    "Introduksjon til programmering",
    "Webutvikling",
    "Kreativt webprosjekt",
    "Webprosjekt",
  ]
);

const FlowDigital = new Erfaring(
  "Flow Digital AS",
  "Interaksjonsdesigner og utvikler",
  { start: [2019, "september"], slutt: [2020, "februar"] },
  "Her hadde jeg, sammen med to andre ansvar for cirka 14 nettsteder med ulik grafisk profil, som vi til enhver tid utviklet videre.",
  ["A/B testing", "Javascript", "HTML/CSS", "PHP"]
);

export const arbeidserfaring = [Nav, Vipps, Shortcut, HKA, FlowDigital];
