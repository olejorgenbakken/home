import { ReactNode } from "react";
import "./hero.css";

interface Props {
  color?: any,
  height?: string,
  gradient?: 'top' | 'middle' | 'bottom',
  image?: string,
  children: ReactNode
}

const setStyle = (color: string, image?: string, height?: string) => {
  let style = {
    background: color,
    backgroundSize: '',
    backgroundPosition: '',
    minHeight: '',
  }

  if (height) {
    style.minHeight = `${height}vh`;
  }

  if (image) {
    style.background = `url(${image})`;
    style.backgroundSize = 'cover';
    style.backgroundPosition = 'center center';
  }

  return style;
}

const Hero = ({ color, image, children, height }: Props) => {
  return (
    <section className="hero flex-column" style={setStyle(color, image, height)}>
      {children}
    </section>
  );
}

export default Hero;
