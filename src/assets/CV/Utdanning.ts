import { tidsKonvertering } from "../Util/tidsKonvertering";
export class Utdanning {
  constructor(
    public sted: string,
    public tittel: string,
    public grad: string,
    public beskrivelse: string,
    private tid: {
      start: Date;
      slutt: Date;
    },
    public emner?: string[]
  ) {
    this.sted = sted;
    this.tittel = tittel;
    this.grad = grad;
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