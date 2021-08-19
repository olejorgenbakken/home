function ExperienceItem(props) {
  return (
    <article className="experience-entry">
      <header>
        <h3>{props.business}</h3>
        <h4>{props.workTitle}</h4>
        <p className="date">
          <time dateTime="2021-06">{props.startTime}</time>
          til
          <time dateTime="2021-08">{props.endTime}</time>
        </p>
      </header>
      <p>{props.description}</p>
    </article>
  );
}

export default ExperienceItem;
