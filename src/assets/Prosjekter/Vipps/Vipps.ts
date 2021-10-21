import Prosjekt from "../Prosjekt";

import forsidebilde from "./Bilder/forside.jpeg";
import ferdig from "./Bilder/prototype-ferdig.png";
import { Tester } from "./Tester";

const Vipps = new Prosjekt(
  "Vipps",
  "Hvordan kan vi samle inn mer penger til veldedighet med Vipps?",
  "Vipps har blitt den ledende betalingsløsningen for veldedighet i Norge siden 2020, og ville derfor at vi skulle utforske mulighetene som kunne åpne seg for dem våde Vipps og for veldedighetsmarkedet.",
  "Interaksjonsdesign",
  {
    start: new Date(2021, 5),
    slutt: new Date(2021, 7),
  },
  "https://www.figma.com/community/file/1016826207776299287",
  {
    forsidebilde: forsidebilde,
    prototype: ferdig,
  },
  Tester
);

export default Vipps;
