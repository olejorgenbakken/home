import "./header.css";

function Header(props) {
  return (
    <header id="global-header">
      <section className="introduction">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </section>
    </header>
  );
}

export default Header;
