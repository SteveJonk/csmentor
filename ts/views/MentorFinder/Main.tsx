import Button from '@mui/material/Button/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography/Typography'
import { useAllUsers } from '../../api/hooks/useAllUsers'
import { config } from '../../config/config'

export const Main = () => {
  const { users } = useAllUsers()
  console.log(users[0]?.name)

  return (
    <Container maxWidth={'xl'}>
      <Typography variant="h3">{config.nonce}</Typography>
      <Button color="primary" variant="contained">
        Klik
      </Button>
      <Button color="secondary" variant="contained">
        Klik
      </Button>
    </Container>
  )
}
