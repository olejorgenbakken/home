import './PhotoItem.css';

interface Props {
    caption: string,
    image: string,
    altText: string
}

const PhotoItem = ({ caption, image, altText }: Props) => {
    return (
        <figure className="photo flex-column gap-1">
            <img src={image} alt={altText} />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default PhotoItem;