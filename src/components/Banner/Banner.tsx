import { ReactNode } from "react";
import "./Banner.css";

interface Props {
  bakgrunn: string,
  children: ReactNode
}

const Banner = ({ bakgrunn, children }: Props) => {

  if (bakgrunn.includes(".")) {
    return (
      <section className="banner" style={{ backgroundImage: `url(${bakgrunn}` }}>
        <div className="innhold">
          {children}
        </div>
      </section>
    );
  } else {
    return (
      <section className="banner" style={{ background: bakgrunn }}>
        <div className="innhold">
          {children}
        </div>
      </section>
    );
  }

}

export default Banner;
