import './Sitat.css';

interface Props {
    sitat: string
    kilde: {
        navn: string,
        kredibilitet: string
        href?: string,
    }

}

const Sitat = ({ sitat, kilde }: Props) => {
    return (
        <figure className="sitatblokk gap-1">
            <blockquote cite={kilde.href}>
                <p className="sitat">
                    {sitat}
                </p>
            </blockquote>
            <figcaption>
                <cite>
                    <p className="navn">
                        {kilde.navn}
                    </p>
                    <label className="kredibilitet">
                        {kilde.kredibilitet}
                    </label>
                </cite>
            </figcaption>
        </figure>
    )
}

export default Sitat;