import Test from "./Test/Test";

import './Tester.css';

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
        <section className="gap-2">
            <h2>Innsikt og testing</h2>
            <section className="gap-8">
                {tester.map(test => {
                    return (<Test tittel={test.tittel} type={test.type} resultater={test.resultater} />)
                })}
            </section>
        </section >
    );
}

export default Tester;