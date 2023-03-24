import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'
import { User } from '../interfaces/User'
import { UserCard } from './card/UserCard'

interface Props {
  users: User[]
}

export const CardList = ({ users }: Props) => (
  <Container maxWidth="xl">
    <Grid container marginTop={2} spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={12} key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  </Container>
)
