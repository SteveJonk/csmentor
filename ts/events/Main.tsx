import CircularProgress from '@mui/material/CircularProgress'
import { EventList } from './components/EventList'
import { useGetEvents } from './hooks/useGetEvents'

export const Main = () => {
  const { events, isLoading, error } = useGetEvents()

  const sortedEvents = events?.sort((a, b) => a.start.unix - b.start.unix)

  if (isLoading) return <Loader />

  if (error)
    return <h2 style={{ textAlign: 'center' }}>Something went wrong while retrieving events</h2>

  if (events.length === 0) return <h2 style={{ textAlign: 'center' }}>No events found</h2>
  return <EventList events={sortedEvents} />
}

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        margin: '0 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
      }}
    >
      <CircularProgress />
      <p>Retrieving events</p>
    </div>
  )
}
