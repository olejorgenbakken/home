import './Sidetittel.css';

interface Props {
    tittel: string,
    beskrivelse?: string
    bilde?: string,

}

const hentBilde = (bilde?: string) => {
    if (bilde) {
        return (
            <img
                src={bilde}
                className="bilde"
                alt=""
            />
        )
    } else {
        return null
    }
}

const hentBeskrivelse = (beskrivelse?: string) => {
    if (beskrivelse) {
        return (
            <p>{beskrivelse}</p>
        )
    } else {
        return null
    }
}

const Sidetittel = ({ tittel, beskrivelse, bilde }: Props) => {
    return (
        <header className="sidetittel gap-2">
            {hentBilde(bilde)}
            <section className="tekst">
                <h1>{tittel}</h1>
                {hentBeskrivelse(beskrivelse)}
            </section>
        </header>
    )
}

export default Sidetittel;