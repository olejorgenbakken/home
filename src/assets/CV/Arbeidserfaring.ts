import { tidsKonvertering } from "../Util/tidsKonvertering";
export class Arbeidserfaring {
  constructor(
    public sted: string,
    public stilling: string,
    public beskrivelse: string,
    private tid: {
      start: Date;
      slutt: Date;
    },
    public emner?: string[]
  ) {
    this.sted = sted;
    this.stilling = stilling;
    this.beskrivelse = beskrivelse;
    this.tid = tid;
    this.emner = emner;
  }

  start() {
    return tidsKonvertering(this.tid.start);
  }

  slutt() {
    return tidsKonvertering(this.tid.slutt);
  }
}
