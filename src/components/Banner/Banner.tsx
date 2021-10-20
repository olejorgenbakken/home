import { ReactNode } from "react";
import "./Banner.css";

interface Props {
  høyde?: string,
  children: ReactNode
}

const setStyle = (høyde?: string) => {
  let style = {
    minHeight: ''
  }

  if (høyde) {
    style.minHeight = `${høyde}vh`;
  }

  return style;
}

const Banner = ({ høyde, children }: Props) => {
  return (
    <section className="banner" style={setStyle(høyde)}>
      <section className="content">
        {children}
      </section>
    </section>
  );
}

export default Banner;
