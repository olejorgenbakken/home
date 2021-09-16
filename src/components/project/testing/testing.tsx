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
    }[],
    message?: string
}

const getTests = (tests: { title: string, type: string, findings: { title: string, summary: string }[] }[]) => {
    const testArticles = tests.map(test => {
        return (<TestItem key={test.title} title={test.title} type={test.type} findings={test.findings} />)
    })
    return testArticles;
}

const Testing = ({ tests, message }: Props) => {
    if (tests.length > 0) {
        return (
            <section className="testing">
                <header className="contain">
                    <h2>Tester</h2>
                </header>
                <section className="tests">
                    {getTests(tests)}
                </section>
            </section>
        );
    } else {
        return null;
    }
}

export default Testing;