import "./entryList.css";
import EntryItem from "./entryItem/entryItem";

function EntryList(props) {
  const entryList = props.data.map((entry) => (
    <EntryItem
      key={entry.id}
      place={entry.place}
      workTitle={entry.workTitle}
      startTime={entry.startTime}
      endTime={entry.endTime}
      description={entry.description}
    ></EntryItem>
  ));
  return (
    <section id={"cv-" + props.title} className="cv-section">
      <header>
        <h2>{props.title}</h2>
      </header>
      <section className="cv-section-items">{entryList}</section>
    </section>
  );
}

export default EntryList;
