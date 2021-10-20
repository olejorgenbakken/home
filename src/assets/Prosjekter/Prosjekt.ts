import { tidsKonvertering } from "../Util/tidsKonvertering";
import Test from "./Test";

export default class Prosjekt {
  constructor(
    public bedrift: string,
    public tittel: string,
    public beskrivelse: string,
    public rolle: string,
    public href: string,
    public bilder: {
      forsidebilde: string;
      prosess?: string[];
      prototype?: string;
    },
    private tid: {
      start: Date;
      slutt: Date;
    },
    public tester?: Test[]
  ) {
    this.bedrift = bedrift;
    this.tittel = tittel;
    this.beskrivelse = beskrivelse;
    this.rolle = rolle;
    this.href = href;
    this.bilder = bilder;
    this.tid = tid;
    this.tester = tester;
  }

  slug() {
    return this.bedrift.replace(" ", "-").toLowerCase();
  }

  start() {
    return tidsKonvertering(this.tid.start);
  }

  slutt() {
    return tidsKonvertering(this.tid.slutt);
  }

  tidsperiode() {
    return `${tidsKonvertering(this.tid.start).måned} ${
      tidsKonvertering(this.tid.start).år
    } til ${tidsKonvertering(this.tid.slutt).måned} ${
      tidsKonvertering(this.tid.slutt).år
    }`;
  }
}
