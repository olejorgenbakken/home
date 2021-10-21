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
        <section className="tester gap-2">
            <header>
                <h2>Innsikt og testing</h2>
            </header>
            <div className="gap-8">
                {tester.map(test => {
                    return (<Test tittel={test.tittel} type={test.type} resultater={test.resultater} />)
                })}
            </div>
        </section >
    );
}

export default Tester;