import "./externalItem.css";

function ExternalItem(props) {
  return (
    <article className="card external-item">
      <img src={props.logo} alt={props.title + " logo"} />
      <h3>
        <a href={props.link}>{props.title}</a>
      </h3>
      <p>{props.description}</p>
    </article>
  );
}

export default ExternalItem;
