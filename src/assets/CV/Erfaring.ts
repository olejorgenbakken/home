export class Erfaring {
  constructor(
    public sted: string,
    public tittel: string,
    public tid: {
      start: [år: number, måned?: string, dag?: number];
      slutt?: [år: number, måned?: string, dag?: number];
    },
    public beskrivelse?: string,
    public emner?: string[],
    public logo?: string
  ) {
    this.sted = sted;
    this.tittel = tittel;
    this.beskrivelse = beskrivelse;
    this.tid = tid;
    this.emner = emner;
    this.logo = logo;
  }
}
