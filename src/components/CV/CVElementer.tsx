import CVElement from './CVElement/CVElement';

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

const CVElementer = ({ section }: Props) => {
    const CVData = section.map((entry) => (
        <CVElement title={entry.title} place={entry.place} start={entry.time.start} end={entry.time.end} description={entry.description} />
    ));

    return (
        <section className="gap-8">
            {CVData}
        </section>
    );
}

export default CVElementer;