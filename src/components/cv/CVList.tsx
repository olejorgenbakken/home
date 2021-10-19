import CVItem from './CVItem/CVItem'

interface Props {
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

const CVList = ({ section }: Props) => {
    const CVEntries = section.map((entry) => (
        <CVItem title={entry.title} place={entry.place} start={entry.time.start} end={entry.time.end} description={entry.description} />
    ));

    return (
        <section className="flex-column gap-8">
            {CVEntries}
        </section>
    );
}

export default CVList;