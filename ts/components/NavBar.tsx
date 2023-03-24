import LoginIcon from '@mui/icons-material/Login'
import { Box, Button, Link, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

import { config, paths } from '../config/config'

export const NavBar = () => (
  <AppBar position="relative" color="inherit">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <img src={`${config.themeFolder}/assets/logo-cropped.png`} height={50} />
      </Box>

      <Button component={Link} href="/" variant="text" color="secondary" sx={{ marginRight: 1 }}>
        Home
      </Button>
      <Button
        component={Link}
        href={paths.login}
        variant="contained"
        color="secondary"
        startIcon={<LoginIcon />}
      >
        Login / Register
      </Button>
    </Toolbar>
  </AppBar>
)