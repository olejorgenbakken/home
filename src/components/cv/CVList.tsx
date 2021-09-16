import CVItem from './CVItem/CVItem'

interface Props {
    title: string,
    section: {
        title: string,
        place: string,
        time: {
            start: number,
            end: number
        },
        description: string
    }[]
}

const CVList = ({ title, section }: Props) => {
    const dataList = section.map((entry) => (
        <CVItem title={entry.title} place={entry.place} start={entry.time.start} end={entry.time.end} description={entry.description} />
    ));

    return (
        <section className="flex-column gap-1">
            <header>
                <h2>{title}</h2>
            </header>
            <section className="flex-column gap-4">
                {dataList}
            </section>
        </section>
    );
}

export default CVList;