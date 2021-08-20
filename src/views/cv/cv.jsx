import EntryList from "../../components/cv/entryList";

const experienceData = [
  {
    id: 1,
    place: "Vipps",
    workTitle: "Interaksjonsdesigner",
    startTime: "2021-06",
    endTime: "2021-08",
    description:
      "Brukertesting, utvikling av prototyper i Figma, analyse av innsikt, tett samarbeid med utviklere både frontend og backend. Vi jobbet i et tverrfaglig team på 12 stykker, hvor jeg var en av tre designere. Et sentralt tema for meg var å sette meg inn i Vipps sitt designsystem, og å videreutvikle dette for veldedighetsbransjen. Tidlig i prosessen fasiliterte jeg Google Design Sprint for mitt team på seks stykker for å utvikle konseptet vi skulle jobbe med videre.",
  },
  {
    id: 2,
    place: "Shortcut AS",
    workTitle: "Interaksjonsdesigner",
    startTime: "2021-01",
    endTime: "2021-06",
    description:
      "Konseptutvikling og prototyping av en applikasjon for Android, med bruk av de nyeste teknologiene som var tilgjengelig på det tidspunktet. Her var det sentralt å gjennomføre så mange brukertester som mulig for å sikre brukervennlighet, og for å skaffe domenekunnskap. Her fasiliterte jeg også en Google Design Sprint, og vi tok i bruk ScrumBan som arbeidsrammeverk.",
  },
  {
    id: 3,
    place: "Høyskolen Kristiania",
    workTitle: "Studentassistent",
    startTime: "2019-08",
    endTime: "2021-06",
    description:
      "Her var jeg et bindeledd mellom forelesere og studenter, samtidig som jeg rettet eksamener og arbeidskrav i samarbeid med foreleseren og andre assistenter. Jeg veiledet emnene webutvikling, introduksjon til programmering, kreativt webprosjekt og vanlig webprosjekt.",
  },
  {
    id: 4,
    place: "Flow Digital AS",
    workTitle: "Interaksjonsdesigner og utvikler",
    startTime: "2019-09",
    endTime: "2021-02",
    description:
      "Her jobbet jeg med å utvikle nettsider i Php, javascript, HTML og CSS. Her hadde jeg, sammen med to andre ansvar for cirka 14 nettsteder med ulik grafisk profil, som vi til enhver tid utviklet videre.",
  },
];
const educationData = [
  {
    id: 1,
    place: "Universitetet i Oslo",
    workTitle: "Mastergrad i informatikk: Design, bruk og interaksjon",
    startTime: "2021-08",
    endTime: "2023-06",
    description: "",
  },
  {
    id: 2,
    place: "Høyskolen Kristiania",
    workTitle:
      "Bachelorgrad innen informatikk med spesialisering i interaksjonsdesign",
    startTime: "2018-08",
    endTime: "2021-06",
    description:
      "Innføring i mange ulike informatikkemner, som databaser, programmering og datamaskinens oppbygging. Etter et felles førsteår ble vi delt inn i spesialiseringene våre hvor jeg hadde tre emner om interaksjonsdesign, hvor vi lærte om alt fra prototyping av brukergrensesnitt, og testing av disse, til innholdsproduksjon. Samtidig tok jeg også emner om utvikling i javascriptrammeverk som Vue og React, og Wordpress.",
  },
  {
    id: 3,
    place: "Universitet i Oslo",
    workTitle: "Årsstudium i kjønnsstudier og sosiologi",
    startTime: "2017-08",
    endTime: "2018-06",
    description:
      "Introduserende emner om ulike teorier innen sosiologi og kjønn.",
  },
  {
    id: 4,
    place: "Høyskolen i Volda",
    workTitle: "Årsstudium i mediekommunikasjon",
    startTime: "2016-08",
    endTime: "2017-06",
    description:
      "Introduserende emner innen medieproduksjon, medietolking, samt kvantitativ og kvalitativ forskningsmetode.",
  },
];

function CV() {
  return (
    <section className="width-1000">
      <h1>CV</h1>
      <EntryList data={experienceData} title="Arbeidserfaring" />
      <hr />
      <EntryList data={educationData} title="Utdanning" />
    </section>
  );
}

export default CV;
