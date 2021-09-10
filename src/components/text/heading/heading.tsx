interface Props {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    text: string,
    className?: string
}

function Heading({ level, text, className }: Props) {
    if (level === "h1") {
        return (<h1 className={className}>{text}</h1>);
    } else if (level === 'h2') {
        return (<h2 className={className}>{text}</h2>);
    } else if (level === 'h3') {
        return (<h3 className={className}>{text}</h3>);
    } else if (level === 'h4') {
        return (<h4 className={className}>{text}</h4>);
    } else if (level === 'h5') {
        return (<h5 className={className}>{text}</h5>);
    } else {
        return null
    }
}

export default Heading;