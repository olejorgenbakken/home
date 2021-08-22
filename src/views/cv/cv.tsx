import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import EntryList from "../../components/cv/entryList";
import { Component } from "react";

const experienceData = [
  {
    id: 1,
    place: "Vipps",
    title: "Interaksjonsdesigner",
    time: {
      start: Date.UTC(2021, 6),
      end: Date.UTC(2021, 8)
    },
    description:
      "Brukertesting, utvikling av prototyper i Figma, analyse av innsikt, tett samarbeid med utviklere både frontend og backend. Vi jobbet i et tverrfaglig team på 12 stykker, hvor jeg var en av tre designere. Et sentralt tema for meg var å sette meg inn i Vipps sitt designsystem, og å videreutvikle dette for veldedighetsbransjen. Tidlig i prosessen fasiliterte jeg Google Design Sprint for mitt team på seks stykker for å utvikle konseptet vi skulle jobbe med videre.",
  },
  {
    id: 2,
    place: "Shortcut AS",
    title: "Interaksjonsdesigner",
    time: {
      start: Date.UTC(2021, 1),
      end: Date.UTC(2021, 6)
    },
    description:
      "Konseptutvikling og prototyping av en applikasjon for Android, med bruk av de nyeste teknologiene som var tilgjengelig på det tidspunktet. Her var det sentralt å gjennomføre så mange brukertester som mulig for å sikre brukervennlighet, og for å skaffe domenekunnskap. Her fasiliterte jeg også en Google Design Sprint, og vi tok i bruk ScrumBan som arbeidsrammeverk.",
  },
  {
    id: 3,
    place: "Høyskolen Kristiania",
    title: "Studentassistent",
    time: {
      start: Date.UTC(2019, 8),
      end: Date.UTC(2021, 6)
    },
    description:
      "Her var jeg et bindeledd mellom forelesere og studenter, samtidig som jeg rettet eksamener og arbeidskrav i samarbeid med foreleseren og andre assistenter. Jeg veiledet emnene webutvikling, introduksjon til programmering, kreativt webprosjekt og vanlig webprosjekt.",
  },
  {
    id: 4,
    place: "Flow Digital AS",
    title: "Interaksjonsdesigner og utvikler",
    time: {
      start: Date.UTC(2019, 9),
      end: Date.UTC(2020, 2)
    },
    description:
      "Her jobbet jeg med å utvikle nettsider i Php, javascript, HTML og CSS. Her hadde jeg, sammen med to andre ansvar for cirka 14 nettsteder med ulik grafisk profil, som vi til enhver tid utviklet videre.",
  },
];
const educationData = [
  {
    id: 1,
    place: "Høyskolen Kristiania",
    title:
      "Bachelorgrad innen informatikk med spesialisering i interaksjonsdesign",
    time: {
      start: Date.UTC(2021, 8),
      end: Date.UTC(2018, 6)
    },
    description:
      "Innføring i mange ulike informatikkemner, som databaser, programmering og datamaskinens oppbygging. Etter et felles førsteår ble vi delt inn i spesialiseringene våre hvor jeg hadde tre emner om interaksjonsdesign, hvor vi lærte om alt fra prototyping av brukergrensesnitt, og testing av disse, til innholdsproduksjon. Samtidig tok jeg også emner om utvikling i javascriptrammeverk som Vue og React, og Wordpress.",
  },
  {
    id: 2,
    place: "Universitet i Oslo",
    title: "Årsstudium i kjønnsstudier og sosiologi",
    time: {
      start: Date.UTC(2017, 8),
      end: Date.UTC(2018, 6)
    },
    description:
      "Introduserende emner om ulike teorier innen sosiologi og kjønn.",
  },
  {
    id: 3,
    place: "Høyskolen i Volda",
    title: "Årsstudium i mediekommunikasjon",
    time: {
      start: Date.UTC(2016, 8),
      end: Date.UTC(2017, 6)
    },
    description:
      "Introduserende emner innen medieproduksjon, medietolking, samt kvantitativ og kvalitativ forskningsmetode.",
  },
];

class CV extends Component {
  render() {
    return (
      <section id="cv">
        <Header />
        <main className="width-1000">
          <h1>CV</h1>
          <EntryList data={experienceData} title="Arbeidserfaring" />
          <hr />
          <EntryList data={educationData} title="Utdanning" />
        </main>
        <Footer />
      </section>
    );
  }

}

export default CV;
