import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container'
import { useAllUsers } from '../../api/hooks/useAllUsers'
import { FilterHeader } from '../../components/FilterHeader'
import { NavBar } from '../../components/NavBar'

export const Main = () => {
  const { users } = useAllUsers()

  return (
    <div className="grey-bg full-page">
      <NavBar />
      <FilterHeader />
      <Container maxWidth="xl">
        <Button color="primary" variant="contained">
          Klik
        </Button>
        <Button color="secondary" variant="contained">
          Klik
        </Button>
      </Container>
    </div>
  )
}
