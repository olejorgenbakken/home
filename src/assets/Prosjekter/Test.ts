import Resultat from "./Resultat";

export default class Test {
  constructor(
    public tittel: string,
    public type: "Spørreundersøkelse" | "Intervju",
    public resultater: Resultat[]
  ) {
    this.tittel = tittel;
    this.type = type;
    this.resultater = resultater;
  }
}
