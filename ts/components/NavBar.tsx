import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'

import LoginIcon from '@mui/icons-material/Login'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { config, paths } from '../config/config'
import { MyAccountDrawer } from './MyAccountDrawer'

interface NavBarProps {
  refetchAll: () => void
}

export const NavBar = ({ refetchAll }: NavBarProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  const handleAccountClose = () => {
    refetchAll()
    setIsAccountOpen(false)
  }

  return (
    <>
      <AppBar position="relative" color="inherit">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={`${config.themeFolder}/assets/logo-cropped.png`} height={50} />
          </Box>

          <Button
            component={Link}
            href="/"
            variant="text"
            color="secondary"
            sx={{ marginRight: 1 }}
          >
            Home
          </Button>
          {config.userLoggedIn ? (
            <Button
              onClick={() => setIsAccountOpen(true)}
              variant="contained"
              color="secondary"
              startIcon={<PersonIcon />}
            >
              My account
            </Button>
          ) : (
            <Button
              component={Link}
              href={paths.login}
              variant="contained"
              color="secondary"
              startIcon={<LoginIcon />}
            >
              Login / Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <MyAccountDrawer isOpen={isAccountOpen} onClose={handleAccountClose} />
    </>
  )
}
