import Heading from "../../text/heading/heading";
import Paragraph from "../../text/paragraph/Paragraph";
import "./item.css";

interface Props {
  place: string,
  title: string,
  time: {
    start: number,
    end: number
  },
  description: string
}

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

function CVItem({ place, title, time, description }: Props) {
  return (
    <article className="cv-entry" >
      <section className="content">
        <header>
          <Heading level="h3" text={place} className="place" />
          <Heading level="h4" text={title} className="role" />
          <p className="date">
            <time dateTime={toDate(time).startYYYYMM}>{toDate(time).startText}</time>
            &nbsp;–&nbsp;
            <time dateTime={toDate(time).endYYYYMM}>{toDate(time).endText}</time>
          </p>
        </header>
        <Paragraph text={description} />
      </section>
    </article >
  );
}

export default CVItem;
