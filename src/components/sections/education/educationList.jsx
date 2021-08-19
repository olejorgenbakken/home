import EducationItem from "./educationItem/educationItem";

const educationData = [
  {
    id: 1,
    business: "Universitetet i Oslo",
    workTitle: "Mastergrad i informatikk: Design, bruk og interaksjon",
    startTime: "2021-08",
    endTime: "2023-06",
    description: "",
  },
  {
    id: 2,
    business: "Høyskolen Kristiania",
    workTitle:
      "Bachelorgrad innen informatikk med spesialisering i interaksjonsdesign",
    startTime: "2018-08",
    endTime: "2021-06",
    description:
      "Innføring i mange ulike informatikkemner, som databaser, programmering og datamaskinens oppbygging. Etter et felles førsteår ble vi delt inn i spesialiseringene våre hvor jeg hadde tre emner om interaksjonsdesign, hvor vi lærte om alt fra prototyping av brukergrensesnitt, og testing av disse, til innholdsproduksjon. Samtidig tok jeg også emner om utvikling i javascriptrammeverk som Vue og React, og Wordpress.",
  },
];

function EducationList() {
  const educationList = educationData.map((entry) => (
    <EducationItem
      key={entry.id}
      business={entry.business}
      workTitle={entry.workTitle}
      startTime={entry.startTime}
      endTime={entry.endTime}
      description={entry.description}
    ></EducationItem>
  ));
  return (
    <section className="entries">
      <header>
        <h2>Utdanning</h2>
      </header>
      <section>{educationList}</section>
    </section>
  );
}

export default EducationList;
