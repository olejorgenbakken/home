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
}

const getTests = (tests: { title: string, type: string, findings: { title: string, summary: string }[] }[]) => {
    const testArticles = tests.map(test => {
        return (<TestItem key={test.title} title={test.title} type={test.type} findings={test.findings} />)
    })
    return testArticles;
}

const Testing = ({ tests }: Props) => {
    if (tests.length > 0) {
        return (
            <section className="testing flex-column gap-2">
                <header className="constrain padding">
                    <h2>Innsikt</h2>
                </header>
                <section className="flex-column gap-12">
                    {getTests(tests)}
                </section>
            </section>
        );
    } else {
        return null;
    }
}

export default Testing;