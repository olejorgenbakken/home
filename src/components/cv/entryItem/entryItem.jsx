import "./entryItem.css";

function EntryItem(props) {
  return (
    <article className="cv-entry">
      <header>
        <h3>{props.place}</h3>
        <h4>{props.workTitle}</h4>
        <p className="date">
          <time dateTime={props.startTime}>{props.startTime}</time>
          &nbsp;til&nbsp;
          <time dateTime={props.endTime}>{props.endTime}</time>
        </p>
      </header>
      <p>{props.description}</p>
    </article>
  );
}

export default EntryItem;
