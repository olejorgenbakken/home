import "./vipps.css";
import Gallery from "../../../../components/gallery/gallery";

import VippsImage1Src from "../../../../assets/portfolio/vipps/image1.svg";
import VippsImage2Src from "../../../../assets/portfolio/vipps/image2.svg";

function Vipps() {
  const introPics = [
    { src: VippsImage1Src, alt: "Forside av appen" },
    { src: VippsImage2Src, alt: "Sakside av appen" },
  ];

  return (
    <main id="vipps">
      <section className="intro width-1000">
        <h1>Vipps</h1>
        <Gallery animated="true" height="500" images={introPics}></Gallery>
      </section>
    </main>
  );
}

export default Vipps;
