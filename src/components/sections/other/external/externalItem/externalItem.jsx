import "./externalItem.css";

function ExternalItem(props) {
  const style = {
    background: props.background,
  };

  return (
    <article className="card external-item" style={style}>
      <section className="card-image">
        <img src={props.logo} alt={props.title + " logo"} />
      </section>
      <section className="card-content">
        <p>
          <a href={props.link} title={"Gå til " + props.title}>
            {props.title}
          </a>
        </p>
      </section>
    </article>
  );
}

export default ExternalItem;
