import { Button, Container, Typography } from '@mui/material'
import { CSThemeProvider } from '../../theme/ThemeProvider'

export const App = () => (
  <CSThemeProvider>
    <Container maxWidth={'xl'}>
      <Typography variant="h3">Hoi</Typography>
      <Button color="primary" variant="contained">
        Klik
      </Button>
      <Button color="secondary" variant="contained">
        Klik
      </Button>
    </Container>
  </CSThemeProvider>
)
