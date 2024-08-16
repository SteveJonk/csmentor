import { EventData } from '../types/Events'
import { EventCard } from './EventCard'

interface EventListProps {
  events: EventData[]
}

export const EventList = ({ events }: EventListProps) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.name + ' ' + event.start.unix}
          title={event.name}
          dateTime={event.start.formatted}
          location={event.venue.name}
          url={event.url}
          imgUrl={event?.images.thumbnail}
          buttonText={event?.call_to_action}
        />
      ))}
    </div>
  )
}
