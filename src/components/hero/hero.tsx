import { ReactNode } from "react";
import { contrast } from "../../assets/functions";
import "./hero.css";

interface Props {
  color?: any,
  height?: string,
  gradient?: 'top' | 'middle' | 'bottom',
  image?: string,
  children: ReactNode
}

const setStyle = (color: any, image?: string, gradient?: string, height?: string) => {
  let style = {
    color: contrast(color),
    background: color,
    backgroundSize: '',
    backgroundPosition: '',
    minHeight: '',
  }

  if (gradient) {
    switch (gradient) {
      case 'top':
        style.background = `linear-gradient(180deg, ${color} 0%, ${color}00 100%)`;
        break;
      case 'middle':
        style.background = `linear-gradient(180deg, ${color}00 0%, ${color} 50%, ${color}00 100%)`;
        break;
      case 'bottom':
        style.background = `linear-gradient(180deg, ${color}00 0%, ${color} 100%)`;
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

const extraGradient = (color: any, image?: string, gradient?: string) => {
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
