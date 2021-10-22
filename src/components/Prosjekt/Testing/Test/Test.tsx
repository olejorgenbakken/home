import Resultat from "./Resultat/Resultat";

import './Test.css';

interface Props {
    tittel: string,
    type: string,
    resultater: {
        tittel: string,
        beskrivelse: string,
        sitat?: {
            sitat: string,
            kilde: {
                navn: string,
                kredibilitet: string
                href?: string
            }
        }
    }[]
}

const Test = ({ tittel, type, resultater }: Props) => {
    return (
        <div className="test gap-2">
            <header>
                <h3>{tittel}</h3>
                <label>{type}</label>
            </header>
            <section className="gap-4">
                {
                    resultater.map((resultat) => {
                        return (
                            <Resultat key={resultat.tittel} tittel={resultat.tittel} beskrivelse={resultat.beskrivelse} sitat={resultat.sitat} />
                        )
                    })
                }
            </section>
        </div>
    );
}

export default Test;