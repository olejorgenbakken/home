import "./list.css";
import CVItem from "./CVItem/item";

interface Props {
  title: string
  data: {
    id?: number,
    place: string,
    title: string,
    time: {
      start: number,
      end: number,
    },
    description: string
  }[]
}

const setList = (list:
  {
    id?: number,
    place: string,
    title: string,
    time: {
      start: number,
      end: number
    },
    description: string
  }[]) => {
  const dataList = list.map((entry) => (
    <CVItem key={entry.id} place={entry.place} title={entry.title} time={entry.time} description={entry.description} />
  ));

  return (dataList)
}

function EntryList({ title, data }: Props) {
  return (
    <section id={"cv-" + title} className="cv-section" >
      <header>
        <h2>{title}</h2>
      </header>
      <section className="cv-section-items">{setList(data)}</section>
    </section >
  );
}

export default EntryList;
