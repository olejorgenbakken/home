import { ReactNode } from "react";
import "./Banner.css";

interface Props {
  bakgrunn: string,
  children: ReactNode
}

const Banner = ({ bakgrunn, children }: Props) => {

  if (bakgrunn.includes(".")) {
    return (
      <div className="banner" style={{ backgroundImage: `url(${bakgrunn}` }}>
        <div className="banner-innhold">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="banner" style={{ background: bakgrunn }}>
        <div className="banner-innhold">
          {children}
        </div>
      </div>
    );
  }

}

export default Banner;
