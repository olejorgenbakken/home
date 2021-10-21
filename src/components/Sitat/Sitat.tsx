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
        <figure className="sitat gap-1">
            <blockquote cite={kilde.href}>
                <p>
                    {sitat}
                </p>
            </blockquote>
            <figcaption>
                <cite>
                    {kilde.navn}
                    <label>
                        {kilde.kredibilitet}
                    </label>
                </cite>
            </figcaption>
        </figure>
    )
}

export default Sitat;