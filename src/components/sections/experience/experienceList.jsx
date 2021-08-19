import ExperienceItem from "../experience/experienceItem/experienceItem";

const experienceData = [
  {
    id: 1,
    business: "Vipps",
    workTitle: "Interaksjonsdesigner",
    startTime: "2021-06",
    endTime: "2021-08",
    description:
      "Brukertesting, utvikling av prototyper i Figma, analyse av innsikt, tett samarbeid med utviklere både frontend og backend. Vi jobbet i et tverrfaglig team på 12 stykker, hvor jeg var en av tre designere. Et sentralt tema for meg var å sette meg inn i Vipps sitt designsystem, og å videreutvikle dette for veldedighetsbransjen. Tidlig i prosessen fasiliterte jeg Google Design Sprint for mitt team på seks stykker for å utvikle konseptet vi skulle jobbe med videre.",
  },
  {
    id: 2,
    business: "Shortcut AS",
    workTitle: "Interaksjonsdesigner",
    startTime: "2021-01",
    endTime: "2021-06",
    description:
      "Konseptutvikling og prototyping av en applikasjon for Android, med bruk av de nyeste teknologiene som var tilgjengelig på det tidspunktet. Her var det sentralt å gjennomføre så mange brukertester som mulig for å sikre brukervennlighet, og for å skaffe domenekunnskap. Her fasiliterte jeg også en Google Design Sprint, og vi tok i bruk ScrumBan som arbeidsrammeverk.",
  },
  {
    id: 3,
    business: "Høyskolen Kristiania",
    workTitle: "Studentassistent",
    startTime: "2019-08",
    endTime: "2021-06",
    description:
      "Her var jeg et bindeledd mellom forelesere og studenter, samtidig som jeg rettet eksamener og arbeidskrav i samarbeid med foreleseren og andre assistenter. Jeg veiledet emnene webutvikling, introduksjon til programmering, kreativt webprosjekt og vanlig webprosjekt.",
  },
  {
    id: 4,
    business: "LWIM AS",
    workTitle: "Interaksjonsdesigner og utvikler",
    startTime: "2019-09",
    endTime: "2021-02",
    description:
      "I LWIM jobbet jeg med å utvikle nettsider i Php, javascript, HTML og CSS. Her hadde jeg, sammen med to andre ansvar for cirka 14 nettsteder med ulik grafisk profil, som vi til enhver tid utviklet videre.",
  },
];

function ExperienceList() {
  const experienceList = experienceData.map((entry) => (
    <ExperienceItem
      key={entry.id}
      business={entry.business}
      workTitle={entry.workTitle}
      startTime={entry.startTime}
      endTime={entry.endTime}
      description={entry.description}
    ></ExperienceItem>
  ));
  return (
    <section className="entries">
      <header>
        <h2>Arbeidserfaring</h2>
      </header>
      <section>{experienceList}</section>
    </section>
  );
}

export default ExperienceList;
