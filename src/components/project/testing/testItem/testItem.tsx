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
                <h4>{finding.title}</h4>
                <p>{finding.summary}</p>
            </article>
        )
    })
    return segment;
}

const TestItem = ({ title, type, findings }: Props) => {
    return (
        <article className="contain test">
            <header>
                <h3>{title}</h3>
                <label>{type}</label>
            </header>
            <article className="results">{getSegments(findings)}</article>
        </article>
    )
}

export default TestItem;