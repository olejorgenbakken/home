import './testItem.css';

interface Props {
    title: string,
    type: string,
    findings: {
        title: string,
        summary: string
    }[]
}

const getSegments = (findings: { title: string, summary: string }[]) => {
    const segment = findings.map(finding => {
        return (
            <article className="segment">
                <h4> {finding.title}</h4>
                <p>{finding.summary}</p>
            </article>
        )
    })
    return segment;
}

const TestItem = ({ title, type, findings }: Props) => {
    return (
        <article className="test flex-column gap-1 constrain padding">
            <header>
                <label className="method">{type}</label>
                <h3>{title}</h3>
            </header>
            <article className="results flex-column gap-4">{getSegments(findings)}</article>
        </article>
    )
}

export default TestItem;