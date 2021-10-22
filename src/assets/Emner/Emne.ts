class Emne {
  constructor(
    public navn: string,
    public beskrivelse: string,
    public bilde?: string
  ) {
    this.navn = navn;
    this.beskrivelse = beskrivelse;
    this.bilde = bilde;
  }
}

export default Emne;
