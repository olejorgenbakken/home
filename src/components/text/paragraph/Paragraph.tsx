import './paragraph.css';

import Heading from '../heading/heading';

interface Props {
    text: string,
    heading?: {
        level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
        text: string
    },
    styling?: {
        alignContent: 'left' | 'center',
        color: string
    }
}

function Paragraph({ text, heading, styling }: Props) {
    if (heading) {
        return (
            <section className="paragraph" style={styling}>
                <Heading level={heading.level} text={heading.text} />
                <p>{text}</p>
            </section>
        )
    } else {
        return (
            <section className="paragraph">
                <p>{text}</p>
            </section>
        )
    }

}

export default Paragraph;