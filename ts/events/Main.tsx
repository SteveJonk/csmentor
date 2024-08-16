import { useGetEvents } from './hooks/useGetEvents'

export const Main = () => {
  const { events, isLoading } = useGetEvents()
  return <h1>Eventjeeszz</h1>
}
