import { Close, Email, Language, LinkedIn, LocationOn } from '@mui/icons-material'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { TransitionProps } from '@mui/material/transitions'
import { ReactElement, forwardRef } from 'react'
import { config, paths } from '../config/config'
import { userUserOptions } from '../hooks/useUserOptions'
import { User } from '../interfaces/User'
import { CSThemeVars } from '../theme/CSThemeVars'
import { toSentence } from '../utils/toSentence'
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
  const { options } = userUserOptions()

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
              src={
                user?.acf?.profile_picture.sizes?.large
                  ? user?.acf?.profile_picture.sizes?.large
                  : `${config.themeFolder}/assets/PlaceholderProfilePicture.jpg`
              }
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
                {user.acf.job}
              </Typography>
              {/* <Typography variant="body2">€{user.acf.price} / hour</Typography> */}
              <Typography
                variant="body2"
                color="grey"
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                columnGap={1}
              >
                <span>
                  <LocationOn fontSize="small" />
                  {user.acf.city}, {user.acf.country}
                </span>
                <span>
                  <Language fontSize="small" sx={{ marginRight: 0.2 }} />
                  {user.acf.languages.join(', ')}
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
            {/* <Typography
              variant="h2"
              sx={{ display: 'flex', gap: 0.5, justifyContent: { sm: 'flex-end' } }}
            >
              <Star color="info" />
              4.5
            </Typography>
            <Typography variant="body1">6 Reviews</Typography> */}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{user.acf.about_me}</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container marginTop={1} gap={1}>
          <Grid container spacing={2} paddingTop={2}>
            {Object.keys(options?.acf?.properties || {}).map((field) => (
              <UserField key={field} field={field} user={user} />
            ))}
          </Grid>
          <Grid item xs={12} mt={3}>
            {user.acf.linkedin && (
              <Button
                variant="outlined"
                href={user.acf.linkedin}
                sx={{ marginRight: 1, marginBottom: 1 }}
              >
                <LinkedIn sx={{ marginRight: 1 }} />
                View Linkedin
              </Button>
            )}
            <Button
              variant="contained"
              href={config.userLoggedIn ? `mailto:${user.user_email}` : paths.login}
              sx={{ marginBottom: 1 }}
            >
              <Email sx={{ marginRight: 1 }} />
              {config.userLoggedIn ? 'Get in touch' : 'Log in to get in touch'} with {user.name}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  )
}

interface IUserField {
  field: string
  user: User
}

const UserField = ({ field, user }: IUserField) => {
  const fieldsToIgnore = [
    'profile_picture',
    'is_mentor',
    'about_me',
    'price',
    'city',
    'country',
    'languages',
    'job',
    'linkedin',
  ]
  if (fieldsToIgnore.find((fieldToIgnore) => fieldToIgnore === field)) {
    return null
  }
  let value = ''

  switch (typeof user.acf[field]) {
    case 'string':
      value = user.acf[field]
      break
    case 'object':
      if (Array.isArray(user.acf[field])) {
        value = user.acf[field].join(', ')
      }
      break
  }

  return (
    <Grid key={field} item xs={6} md={3}>
      <Typography variant="body1">{toSentence(field)}</Typography>
      <Typography variant="body2" mb={2}>
        {value}
      </Typography>
    </Grid>
  )
}
