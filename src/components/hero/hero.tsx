import Heading from "../text/heading/heading";
import "./hero.css";

interface Props {
  background: 'gradient' | string,
  content: {
    heading?: { level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', text: string }
    description?: string
  }
}

const setDescription = (text?: string) => {
  if (text) {
    return (<p>{text}</p>)
  } else {
    return null
  }
}

const setStyle = (background: string) => {
  let style = {
  }

  switch (background) {
    case 'gradient':
      style = {
        background: `linear-gradient(0deg, var(--background) 0%, var(--background-darker) 50%, var(--background) 100%)`
      }
      return style;

    default:
      style = {
        background: background
      }
      return style;
  }
}

function Hero({ background, content }: Props) {
  if (content.heading) {
    return (
      <section className={`hero`} style={setStyle(background)}>
        <article className="hero-content">
          <Heading level={content.heading.level} text={content.heading.text} />
          {setDescription(content.description)}
        </article>
      </section>
    );
  } else {
    return (
      <section className={`hero`} style={setStyle(background)}>
        <article className="hero-content">
          {setDescription(content.description)}
        </article>
      </section>
    );
  }

}

export default Hero;
