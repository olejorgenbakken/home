import Test from "./Test/Test";

interface Props {
    tester: {
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
    }[]
}

const Tester = ({ tester }: Props) => {
    return (
        <section className="testing  gap-2">
            <header>
                <h2>Innsikt og testing</h2>
            </header>
            {tester.map(test => {
                return (<Test tittel={test.tittel} type={test.type} resultater={test.resultater} />)
            })}
        </section >
    );
}

export default Tester;