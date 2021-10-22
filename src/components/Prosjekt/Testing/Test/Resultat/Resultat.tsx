import Sitat from "../../../../Sitat/Sitat";

import './Resultat.css';

interface Props {
    tittel: string,
    beskrivelse: string,
    sitat?: {
        sitat: string,
        kilde: {
            navn: string,
            kredibilitet: string,
        }
    }
}

const sitatElement = (sitat?: { sitat: string, kilde: { navn: string, kredibilitet: string } }) => {
    if (sitat) {
        return (
            <footer className="sitat">
                <Sitat sitat={sitat.sitat} kilde={sitat.kilde} />
            </footer>
        )
    } else {
        return null;
    }
}

const Resultat = ({ tittel, beskrivelse, sitat }: Props) => {
    return (
        <article className="resultat">
            <h4>{tittel}</h4>
            <p>{beskrivelse}</p>
            {sitatElement(sitat)}
        </article>
    );
};

export default Resultat;