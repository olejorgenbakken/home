interface Props {
    src: string,
    alt?: string,
    beskrivelse: string
}

const Figur = ({ src, alt, beskrivelse }: Props) => {
    return (
        <figure className="gap-1">
            <img src={src} alt={alt} />

            <figcaption>{beskrivelse}</figcaption>
        </figure>
    )
}

export default Figur;