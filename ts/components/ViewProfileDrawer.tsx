import { Close, Email, Language, LocationOn, Star } from '@mui/icons-material'

import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, ReactElement } from 'react'
import { config, paths } from '../config/config'
import { User } from '../interfaces/User'
import { CSThemeVars } from '../theme/CSThemeVars'

// TODO: Add profile fields

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
  if (!user) return null

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
        <Grid container spacing={2} paddingBottom={3} marginTop={3}>
          <Grid item xs={12} sm={9} sx={{ display: 'flex', gap: 2 }}>
            <img
              src={`${config.themeFolder}/assets/PlaceholderProfilePicture.jpg`}
              width={150}
              height={150}
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
            <Box>
              <Typography variant="h2" marginBottom={1}>
                {user.name}
              </Typography>
              <Typography variant="h3" marginBottom={1} color="grey">
                Functie titel hier
              </Typography>
              <Typography
                variant="body2"
                color="grey"
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                columnGap={1}
              >
                <span>
                  <LocationOn fontSize="small" />
                  Haarlem
                </span>
                <span>
                  <Language fontSize="small" sx={{ marginRight: 0.2 }} />
                  Dutch, English
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              textAlign: { xs: 'left', sm: 'right' },
            }}
          >
            <Typography
              variant="h2"
              sx={{ display: 'flex', gap: 0.5, justifyContent: { sm: 'flex-end' } }}
            >
              <Star color="info" />
              4.5
            </Typography>
            <Typography variant="body1">6 Reviews</Typography>
            <Typography variant="body2">€10,- / hour</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container marginTop={1} gap={1}>
          <Grid container spacing={2} paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h2">{user.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Someting about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                facilisis nisl, id pretium massa. Fusce ultricies malesuada justo vitae bibendum.
                Aliquam eleifend mauris vel erat varius, eu luctus urna tincidunt. Aenean vitae
                risus iaculis, ultricies nibh non, finibus ante.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body1">Company</Typography>
              <Typography variant="body2" mb={2}>
                iO
              </Typography>
              <Typography variant="body1">Years of experience</Typography>
              <Typography variant="body2">3-5 years</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body1">Specalisations</Typography>
              <Typography variant="body2" mb={2}>
                IT, Design
              </Typography>
              <Typography variant="body1">CS Skills</Typography>
              <Typography variant="body2">Engagement</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body1">Seniority Level</Typography>
              <Typography variant="body2" mb={2}>
                Teamlead
              </Typography>
              <Typography variant="body1">Extra skills</Typography>
              <Typography variant="body2">Presenting</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={3}>
            <Button
              variant="contained"
              href={config.userLoggedIn ? `mailto:${user.user_email}` : paths.login}
            >
              <Email sx={{ marginRight: 1 }} />
              Get in touch with {user.name}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  )
}
