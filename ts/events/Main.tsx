import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { EventList } from './components/EventList'
import { Filters } from './components/Filters'
import { useGetEvents } from './hooks/useGetEvents'
import { IFilters } from './types/Filters'

export const Main = () => {
  const { events, isLoading, error } = useGetEvents()
  const [filters, setFilters] = useState<IFilters>({
    name: '',
    location: '',
    date: '',
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (isLoading) return <Loader />

  if (error)
    return <h2 style={{ textAlign: 'center' }}>Something went wrong while retrieving events</h2>

  if (events.length === 0) return <h2 style={{ textAlign: 'center' }}>No events found</h2>

  const locationOptions = Array.from(
    new Set(events.map((event) => event.venue.name).filter((location) => location !== null))
  ).sort((a, b) => a.localeCompare(b))

  const dateOptions = Array.from(new Set(events.map((event) => event.start.formatted)))

  const sortedEvents = events?.sort((a, b) => a.start.unix - b.start.unix)

  const filteredEvents = sortedEvents.filter((event) => {
    const isNameMatch = event.name.toLowerCase().includes(filters.name.toLowerCase())
    const isLocationMatch = filters.location ? event.venue.name === filters.location : true
    const isDateMatch = filters.date ? event.start.formatted === filters.date : true

    return isNameMatch && isLocationMatch && isDateMatch
  })

  return (
    <>
      <Filters
        onChange={handleFilterChange}
        location={filters.location}
        date={filters.date}
        dateOptions={dateOptions}
        locationOptions={locationOptions}
      />
      {filteredEvents.length > 0 ? (
        <EventList events={filteredEvents} />
      ) : (
        <h2 style={{ textAlign: 'center' }}>No events found, try another filter</h2>
      )}
    </>
  )
}

const Loader = () => {
  return (
    <div
      style={{
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
