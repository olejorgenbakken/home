import "./externalItem.css";

function ExternalItem(props) {
  return (
    <a
      href={props.link}
      title={"Gå til " + props.title}
      className="external-item"
    >
      <img src={props.logo} alt={props.title + " logo"} />
    </a>
  );
}

export default ExternalItem;
