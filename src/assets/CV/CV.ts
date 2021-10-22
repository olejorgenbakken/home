import { Utdanning } from "./Utdanning";
import { Arbeidserfaring } from "./Arbeidserfaring";

const HKU = new Utdanning(
  "Høyskolen Kristiania",
  "Informatikk med spesialisering i interaksjonsdesign",
  "Bachelor",
  "Innføring i mange ulike informatikkemner, som databaser, programmering og datamaskinens oppbygging. Etter et felles førsteår ble vi delt inn i spesialiseringene våre hvor jeg hadde tre emner om interaksjonsdesign, hvor vi lærte om alt fra prototyping av brukergrensesnitt, og testing av disse, til innholdsproduksjon.",
  {
    start: new Date(2018, 7),
    slutt: new Date(2021, 5),
  },
  ["Databaser", "C#", "Javascript", "PHP", "Wordpress", "UX/UI"]
);

const UiO = new Utdanning(
  "Universitet i Oslo",
  "Kjønnsstudier og sosiologi",
  "Årsstudium",
  "Introduserende emner om ulike teorier innen sosiologi og kjønn.",
  {
    start: new Date(2017, 7),
    slutt: new Date(2018, 5),
  },
  ["Likestilling", "Historie", "Sosiologi"]
);

const HiVolda = new Utdanning(
  "Høyskolen i Volda",
  "Mediekommunikasjon",
  "Årsstudium",
  "Introduserende emner innen medieproduksjon, medietolking, samt kvantitativ og kvalitativ forskningsmetode.",
  {
    start: new Date(2016, 7),
    slutt: new Date(2017, 5),
  },
  ["Videproduksjon", "Markedsføring", "Akademisk skriving"]
);

export const utdanning = [HKU, UiO, HiVolda];

const Vipps = new Arbeidserfaring(
  "Vipps",
  "Interaksjonsdesigner",
  "Brukertesting, utvikling av prototyper, analyse av innsikt, tett samarbeid med utviklere både frontend og backend. Vi jobbet i et tverrfaglig team på 12 stykker, hvor jeg var en av tre designere. Et sentralt tema for meg var å sette meg inn i Vipps sitt designsystem, og å videreutvikle dette for veldedighetsbransjen. Tidlig i prosessen fasiliterte jeg Google Design Sprint for mitt team på seks stykker for å utvikle konseptet vi skulle jobbe med videre.",
  {
    start: new Date(2021, 5),
    slutt: new Date(2021, 7),
  },
  ["Figma", "Google Design Sprint", "Designsystem", "Smidig metodikk"]
);

const Shortcut = new Arbeidserfaring(
  "Shortcut AS",
  "Interaksjonsdesigner",
  "Konseptutvikling og prototyping av en applikasjon for Android, med bruk av de nyeste teknologiene som var tilgjengelig på det tidspunktet. Her var det sentralt å gjennomføre så mange brukertester som mulig for å sikre brukervennlighet, og for å skaffe domenekunnskap.",
  {
    start: new Date(2021, 0),
    slutt: new Date(2021, 5),
  },
  ["Android", "Figma", "Google Design Sprint", "ScrumBan"]
);

const HKA = new Arbeidserfaring(
  "Høyskolen Kristiania",
  "Studentassistent",
  "Her var jeg et bindeledd mellom forelesere og studenter, samtidig som jeg rettet eksamener og arbeidskrav i samarbeid med foreleseren og andre assistenter.",
  {
    start: new Date(2019, 7),
    slutt: new Date(2021, 5),
  },
  [
    "Introduksjon til programmering",
    "Webutvikling",
    "Kreativt webprosjekt",
    "Webprosjekt",
  ]
);

const FlowDigital = new Arbeidserfaring(
  "Flow Digital AS",
  "Interaksjonsdesigner og utvikler",
  "Her hadde jeg, sammen med to andre ansvar for cirka 14 nettsteder med ulik grafisk profil, som vi til enhver tid utviklet videre.",
  {
    start: new Date(2019, 8),
    slutt: new Date(2020, 1),
  },
  ["A/B testing", "Javascript", "HTML/CSS", "PHP"]
);

export const arbeidserfaring = [Vipps, Shortcut, HKA, FlowDigital];
