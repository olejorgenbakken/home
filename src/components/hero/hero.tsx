import { ReactNode } from "react";
import "./hero.css";

interface Props {
  color?: any,
  height?: string,
  gradient?: 'top' | 'middle' | 'bottom',
  image?: string,
  children: ReactNode
}

const setStyle = (color: string, image?: string, gradient?: string, height?: string) => {
  let style = {
    background: '',
    backgroundSize: '',
    backgroundPosition: '',
    minHeight: '',
  }

  if (gradient) {
    switch (gradient) {
      case 'top':
        style.background = `linear-gradient(180deg, ${color}ff 0%, ${color}00 95%)`;
        break;
      case 'middle':
        style.background = `linear-gradient(180deg, ${color}00 0%, ${color}ff 50%, ${color}00 100%)`;
        break;
      case 'bottom':
        style.background = `linear-gradient(180deg, ${color}00 0%, ${color}ff 95%)`;
        break;
      default:
        break;
    }
  }

  if (height) {
    style.minHeight = `${height}vh`;
  }

  if (image) {
    style.background = `url(${image})`;
    style.backgroundSize = 'cover';
    style.backgroundPosition = 'center';
  }

  return style;
}

const extraGradient = (color: string, image?: string, gradient?: string) => {
  if (color && image && gradient) {
    return (<aside style={setStyle(color, undefined, gradient)} className="gradient"></aside>)
  } else {
    return null
  }
}

function Hero({ color, gradient, image, children, height }: Props) {
  return (
    <section className="hero" style={setStyle(color, image, gradient, height)}>
      {children}
      {extraGradient(color, image, gradient)}
    </section>
  );
}

export default Hero;
