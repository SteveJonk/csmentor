import { Close } from '@mui/icons-material'
import {
  AppBar,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, ReactElement } from 'react'
import { User } from '../interfaces/User'
import { CSThemeVars } from '../theme/CSThemeVars'

// TODO: Add profile fields
// TODO: Add mail functionality only when logged in

interface Props {
  isOpen: boolean
  onClose: () => void
  user?: User
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />
})

export const ViewProfileDrawer = ({ isOpen, onClose, user }: Props) => {
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
          <Typography variant="h2">Profile Details</Typography>
          <IconButton color="inherit" onClick={onClose} aria-label="close">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container marginTop={3} gap={1}>
          <Grid item xs={6} sm={4}>
            <Typography variant="h3">Work in progress: All information about a profile</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" href={`mailto:${user?.user_email}`}>
              Get in touch with {user?.name}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  )
}
