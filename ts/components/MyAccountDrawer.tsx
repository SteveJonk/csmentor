import { Close } from '@mui/icons-material'
import {
  AppBar,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Link,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, ReactElement } from 'react'
import { useCurrentuser } from '../hooks/useCurentUser'
import { CSThemeVars } from '../theme/CSThemeVars'

// TODO: Add account fields
// TODO: Add save account functionality
// TODO: Add changePassword functionality

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />
})

export const MyAccountDrawer = ({ isOpen, onClose }: Props) => {
  const { currentUser } = useCurrentuser()

  if (!currentUser) return null

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{ background: CSThemeVars.grey }}
    >
      <AppBar position="relative" color="inherit">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h2">My Account</Typography>
          <IconButton color="inherit" onClick={onClose} aria-label="close">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container marginTop={3} gap={1}>
          <Grid item xs={6} sm={4}>
            <Typography variant="h3">
              Work in progress: form for account management for {currentUser.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link underline="none" onClick={onClose}>
              Change password
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onClose}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  )
}
