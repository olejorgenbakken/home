import './PhotoItem.css';

interface Props {
    caption: string,
    image: string
}

const PhotoItem = ({ caption, image }: Props) => {
    return (
        <figure className="photo flex-column gap-1">
            <img src={image} />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default PhotoItem;