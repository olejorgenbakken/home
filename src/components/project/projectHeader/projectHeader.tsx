import TagList from "../tagList/tagList";

import './projectHeader.css';

interface Props {
    content: {
        text: {
            heading: string,
            subheading?: string
        }
        tags?: string[],
    }
    styling?: {
        color?: string,
        background: string,
    }
}

const setText = (heading: string, subheading?: string) => {
    if (subheading) {
        return (
            <section className="opening">
                <h1>{heading}</h1>
                <p>{subheading}</p>
            </section>
        )
    } else {
        return (
            <section className="opening">
                <h1>{heading}</h1>
            </section>
        )
    }

}

const setBackground = (background: string) => {
    let style = {
        background: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    };

    if (background.includes(".")) {
        style.background = `url(${background})`;
        return style;
    }

    return style;
}


const setGradient = (color?: string) => {
    if (color) {
        let gradient = {
            background: `linear-gradient(180deg,${color}aa 0%, ${color}cc 30%, ${color} 100%)`,
        }
        return (<section className="gradient" style={gradient}></section>)
    } else {
        return null;
    }
}

const setTags = (tags?: string[]) => {
    if (tags) {
        return (<TagList tags={tags} />)
    } else {
        return null;
    }
}

function ProjectHeader({ styling, content }: Props) {
    if (styling) {
        return (
            <header className="project-header" style={setBackground(styling.background)}>
                {setGradient(styling.color)}
                <article className="project-header-content">
                    {setText(content.text.heading, content.text.subheading)}
                    {setTags(content.tags)}
                </article>
            </header>
        )
    } else {
        return (
            <header className="project-header">
                <article className="project-header-content">
                    {setText(content.text.heading, content.text.subheading)}
                    {setTags()}
                </article>
            </header>
        )
    }
}

export default ProjectHeader;