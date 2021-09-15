import { education, experience } from "../../assets/data/CV";

import './cv.css';

const setMonth = (monthNum: number) => {
  let monthName: string

  switch (monthNum) {
    case 1:
      monthName = 'januar';
      return monthName;
    case 2:
      monthName = 'februar';
      return monthName;
    case 3:
      monthName = 'mars'
      return monthName;
    case 4:
      monthName = 'april'
      return monthName;
    case 5:
      monthName = 'mai'
      return monthName;
    case 6:
      monthName = 'juni'
      return monthName;
    case 7:
      monthName = 'juli';
      return monthName;
    case 8:
      monthName = 'august';
      return monthName;
    case 9:
      monthName = 'september'
      return monthName;
    case 10:
      monthName = 'oktober'
      return monthName;
    case 11:
      monthName = 'november'
      return monthName;
    case 12:
      monthName = 'desember'
      return monthName;
  }
}

const toDate = (time: { start: number, end: number }) => {
  let start = new Date(time.start - 1);
  let end = new Date(time.end - 1);

  let startYYYYMM = `${start.getFullYear()}-${start.getMonth()}`;
  let startText = `${setMonth(start.getMonth())} ${start.getFullYear()}`;

  let endYYYYMM = `${end.getFullYear()}-${end.getMonth()}`;
  let endText = `${setMonth(end.getMonth())} ${end.getFullYear()}`;

  return ({ startYYYYMM, startText, endYYYYMM, endText })
}

const getData = (section: { title: string, place: string, time: { start: number, end: number }, description: string }[]) => {
  const dataList = section.map((entry) => (
    <article>
      <h3 className="place">{entry.place}</h3>
      <h4 className="role">{entry.title}</h4>
      <p className="date">
        <time dateTime={toDate(entry.time).startYYYYMM}>{toDate(entry.time).startText.charAt(0).toUpperCase()}{toDate(entry.time).startText.replace(toDate(entry.time).startText.charAt(0), '')}</time>
        &nbsp;–&nbsp;
        <time dateTime={toDate(entry.time).endYYYYMM}>{toDate(entry.time).endText.charAt(0).toUpperCase()}{toDate(entry.time).endText.replace(toDate(entry.time).endText.charAt(0), '')}</time>
      </p>
      <p>{entry.description}</p>
    </article>
  ));
  return (dataList)
}

function Cv() {
  return (
    <main id="cv" className="contain">
      <article className="cv-section" id="education">
        <header>
          <h2>Erfaring</h2>
        </header>
        <section>
          {getData(experience)}
        </section>
      </article >
      <article className="cv-section" id="experience">
        <header>
          <h2>Utdanning</h2>
        </header>
        <section>
          {getData(education)}
        </section>
      </article >
    </main>
  );
}

export default Cv;
