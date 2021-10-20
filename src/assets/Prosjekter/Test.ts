import Funn from "./Funn";

export default class Test {
  constructor(
    public tittel: string,
    public type: "Spørreundersøkelse" | "Intervju",
    public funn?: Funn[]
  ) {
    this.tittel = tittel;
    this.type = type;
    this.funn = funn;
  }
}
