import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import { useGetEvents } from './hooks/useGetEvents'

export const Main = () => {
  const { events, isLoading, error } = useGetEvents()
  if (isLoading) return <Loader />
  if (error)
    return <h2 style={{ textAlign: 'center' }}>Something went wrong while retrieving events</h2>

  if (events.length === 0) return <h2 style={{ textAlign: 'center' }}>No events found</h2>
  return <h1>Eventjeeszz</h1>
}

const Loader = () => {
  return (
    <Grid container marginY={2} justifyContent="center" sx={{ position: 'absolute' }}>
      <CircularProgress />
    </Grid>
  )
}
