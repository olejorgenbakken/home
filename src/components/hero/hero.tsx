import { ReactNode } from "react";
import "./hero.css";

interface Props {
  background: 'gradient' | string,
  children: ReactNode
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

function Hero({ background, children }: Props) {
  return (
    <section className={`hero`} style={setStyle(background)}>
      <article className="hero-content">
        {children}
      </article>
    </section>
  );
}

export default Hero;
