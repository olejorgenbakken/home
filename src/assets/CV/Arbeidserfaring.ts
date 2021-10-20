import { tidsKonvertering } from "../Util/tidsKonvertering";
export class Arbeidserfaring {
  constructor(
    public sted: string,
    public stilling: string,
    public beskrivelse: string,
    private tid: {
      start: Date;
      slutt: Date;
    }
  ) {
    this.sted = sted;
    this.stilling = stilling;
    this.beskrivelse = beskrivelse;
    this.tid = tid;
  }

  start() {
    return tidsKonvertering(this.tid.start);
  }

  slutt() {
    return tidsKonvertering(this.tid.slutt);
  }
}
