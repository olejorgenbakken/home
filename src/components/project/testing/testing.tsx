import TestItem from "./testItem/testItem";
import './testing.css';

interface Props {
    tests: {
        title: string,
        type: string,
        findings: {
            title: string,
            summary: string
        }[]
    }[]
}

const getTests = (tests: { title: string, type: string, findings: { title: string, summary: string }[] }[]) => {
    const testArticles = tests.map(test => {
        return (<TestItem key={test.title} title={test.title} type={test.type} findings={test.findings} />)
    })
    return testArticles;
}

const Testing = ({ tests }: Props) => {
    return (
        <section className="flow testing">
            <header className="contain">
                <h2>Tester</h2>
            </header>
            <section className="tests">
                {getTests(tests)}
            </section>
        </section>
    )
}

export default Testing;