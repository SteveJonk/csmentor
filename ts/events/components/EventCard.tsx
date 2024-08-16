interface EventCardProps {
  title: string
  dateTime: string
  location?: string
  imgUrl: string
  url: string
  buttonText?: string
}

export const EventCard = ({
  title,
  dateTime,
  location,
  imgUrl,
  buttonText,
  url,
}: EventCardProps) => (
  <div className="event-card">
    <img className="event-card__image" src={imgUrl} alt={title} />
    <div className="event-card__info">
      <h2>{title}</h2>
      <div className="event-card__info__datelocation">
        <p>{dateTime}</p>
        {location && <p>{location}</p>}
      </div>
    </div>
    <a className="event-card__button" href={url} target="_blank">
      {buttonText ? buttonText : 'Buy tickets'}
    </a>
  </div>
)
