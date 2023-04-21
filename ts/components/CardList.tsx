import Grid from '@mui/material/Grid'
import Container from '@mui/system/Container'
import { User } from '../interfaces/User'
import { UserCard } from './card/UserCard'

interface Props {
  users: User[]
  onClickViewProfile: (user: User) => void
}

export const CardList = ({ users, onClickViewProfile }: Props) => (
  <Container maxWidth="xl">
    <Grid container marginTop={2} spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={12} key={user.id}>
          <UserCard user={user} onClickViewProfile={onClickViewProfile} />
        </Grid>
      ))}
    </Grid>
  </Container>
)
