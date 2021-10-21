export default class Resultat {
  constructor(
    public tittel: string,
    public beskrivelse: string,
    public sitat?: {
      sitat: string;
      kilde: {
        navn: string;
        kredibilitet: string;
        href?: string;
      };
    }
  ) {
    this.tittel = tittel;
    this.beskrivelse = beskrivelse;
    this.sitat = sitat;
  }
}
