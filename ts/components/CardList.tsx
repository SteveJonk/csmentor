import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
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
      {users.length > 0 ? (
        users.map((user) => (
          <Grid item xs={12} sm={12} key={user.id}>
            <UserCard user={user} onClickViewProfile={onClickViewProfile} />
          </Grid>
        ))
      ) : (
        <Typography variant="h2" textAlign="center">
          Could not find a mentor with those filters
        </Typography>
      )}
    </Grid>
  </Container>
)
