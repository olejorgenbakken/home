import './link.css'

interface Props {
  image?: string,
  text: string
  link: string
}

const setImage = (altText: string, image?: string) => {
  if (image) {
    return (
      <section className="card-image">
        <img src={image} alt={altText} />
      </section>
    )
  } else {
    return null
  }
}

const setContent = (text: string) => {
  return (
    <section className="card-content">
      <p>{text}</p>
    </section>
  )
}

function Link({ image, text, link }: Props) {
  return (
    <a className="card card-link" href={link} title={`Gå til ${text}`}>
      {setImage(text, image)}
      {setContent(text)}
    </a >
  )
}

export default Link;