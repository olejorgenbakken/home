import './CVItem.css';

interface Props {
    place: string,
    title: string,
    start: number,
    end: number,
    description: string
}

const setMonth = (number: number) => {
    let name: string

    switch (number) {
        case 1:
            name = 'januar';
            return name;
        case 2:
            name = 'februar';
            return name;
        case 3:
            name = 'mars'
            return name;
        case 4:
            name = 'april'
            return name;
        case 5:
            name = 'mai'
            return name;
        case 6:
            name = 'juni'
            return name;
        case 7:
            name = 'juli';
            return name;
        case 8:
            name = 'august';
            return name;
        case 9:
            name = 'september'
            return name;
        case 10:
            name = 'oktober'
            return name;
        case 11:
            name = 'november'
            return name;
        case 12:
            name = 'desember'
            return name;
    }
}

const toDate = (t: number) => {
    let time = new Date(t - 1);

    let YYYYMM = `${time.getFullYear()}-${time.getMonth()}`;
    let text = `${setMonth(time.getMonth())} ${time.getFullYear()}`;

    return ({ YYYYMM, text })
}

const CVItem = ({ place, title, start, end, description }: Props) => {
    return (
        <article className="cv-item flex-column gap-1">
            <header>
                <h3 className="place">{place}</h3>
                <h4 className="role">{title}</h4>
                <p className="date">
                    <time dateTime={toDate(start).YYYYMM}>{toDate(start).text.charAt(0).toUpperCase()}{toDate(start).text.replace(toDate(start).text.charAt(0), '')}</time>
                    &nbsp;–&nbsp;
                    <time dateTime={toDate(end).YYYYMM}>{toDate(end).text.charAt(0).toUpperCase()}{toDate(end).text.replace(toDate(end).text.charAt(0), '')}</time>
                </p>
            </header>
            <p>{description}</p>
        </article>
    )
}

export default CVItem;