import "./card.css";

function Card(props) {
  const style = {
    background: props.background,
  };

  return (
    <article className="card external-item" style={style}>
      <section className="card-image">
        <img src={props.image} alt={props.altText} />
      </section>
      <section className="card-content">
        <p>{props.description}</p>
        <a href={props.link} title={"Gå til " + props.linkTitle}>
          {props.title}
        </a>
      </section>
    </article>
  );
}

export default Card;
