import { tidsKonvertering } from "../Util/tidsKonvertering";
import Test from "./Test";

export default class Prosjekt {
  constructor(
    public bedrift: string,
    public tittel: string,
    public bakgrunn: string,
    public rolle: string,
    private tid: {
      start: Date;
      slutt: Date;
    },
    public href?: string,
    public bilder?: {
      forsidebilde?: string;
      prosess?: string[];
      prototype?: string;
    },
    public tester?: Test[]
  ) {
    this.bedrift = bedrift;
    this.tittel = tittel;
    this.bakgrunn = bakgrunn;
    this.rolle = rolle;
    this.tid = tid;
    this.href = href;
    this.bilder = bilder;
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
}
