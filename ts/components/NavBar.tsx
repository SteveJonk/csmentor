import { Box, Button, Link, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

import { config } from '../config/config'

export const NavBar = () => (
  <AppBar position="relative" color="inherit">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <img src={`${config.themeFolder}/assets/logo-cropped.png`} height={50} />
      </Box>

      <Button component={Link} href="/" variant="text" color="secondary" sx={{ marginRight: 1 }}>
        Home
      </Button>
      <Button variant="contained" color="secondary">
        Login
      </Button>
    </Toolbar>
  </AppBar>
)
