import Funn from "./Funn/Funn";

interface Props {
    tittel: string,
    type: string,
    funn: {
        tittel: string,
        beskrivelse: string,
        sitat: {
            sitat: string,
            kilde: {
                navn: string,
                kredibilitet: string
            }
        }
    }[]
}

const Test = ({ tittel, type, funn }: Props) => {
    return (
        <article className="test gap-1">
            <header>
                <label className="type">{type}</label>
                <h3>{tittel}</h3>
            </header>
            <article className="results gap-4">
                {
                    funn.map((f) => {
                        return (
                            <Funn key={f.tittel} tittel={f.tittel} beskrivelse={f.beskrivelse} sitat={f.sitat} />
                        )
                    })
                }
            </article>
        </article>
    );
}

export default Test;