import { useState } from 'react'

import LoginIcon from '@mui/icons-material/Login'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { config, paths } from '../../config/config'
import { MyAccountDrawer } from './MyAccountDrawer'

interface AccountButtonProps {
  refetchAll: () => void
}

export const AccountButton = ({ refetchAll }: AccountButtonProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  const handleAccountClose = () => {
    refetchAll()
    setIsAccountOpen(false)
  }

  return (
    <div style={{ right: 20, bottom: 20, zIndex: 1, position: 'fixed' }}>
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
      <MyAccountDrawer isOpen={isAccountOpen} onClose={handleAccountClose} />
    </div>
  )
}
