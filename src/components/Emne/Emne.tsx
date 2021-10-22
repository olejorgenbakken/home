import './Emne.css';

interface Props {
    tekst: string
    ikon?: string
}

const hentIkon = (ikon?: string) => {
    if (ikon) {
        return ikon
    }
}

const Emne = ({ tekst, ikon }: Props) => {
    return (
        <label className="emne">{hentIkon(ikon)} {tekst}</label>
    )
}

export default Emne;