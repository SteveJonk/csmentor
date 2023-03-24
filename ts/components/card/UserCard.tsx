import { Grid, Paper, Typography } from '@mui/material'
import { User } from '../../interfaces/User'

interface Props {
  user: User
}

export const UserCard = ({ user }: Props) => (
  <Paper elevation={1} sx={{ marginBottom: 2 }}>
    <Grid container padding={2} spacing={2}>
      <Grid item>
        <Typography variant="h2">{user.name}</Typography>
      </Grid>
    </Grid>
  </Paper>
)
