import Prosjekt from "../Prosjekt";

import forsidebilde from "./Bilder/forside.jpeg";
import ferdig from "./Bilder/prototype-ferdig.png";
import { Tester } from "./Tester";

const Vipps = new Prosjekt(
  "Vipps",
  "Hvordan kan vi samle inn mer penger til veldedighet med Vipps?",
  "Interaksjonsdesign",
  "https://www.figma.com/community/file/1016826207776299287",
  {
    forsidebilde: forsidebilde,
    prototype: ferdig,
  },
  {
    start: new Date(2021, 5),
    slutt: new Date(2021, 7),
  },
  Tester
);

export default Vipps;
