import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { config, paths } from '../../config/config'
import { User } from '../../interfaces/User'

interface Props {
  user: User
  onClickViewProfile: (user: User) => void
}

export const UserCard = ({ user, onClickViewProfile }: Props) => (
  <Paper elevation={1} sx={{ marginBottom: 2 }}>
    <Box padding={2}>
      <Grid container spacing={2} paddingBottom={3}>
        <Grid item xs={12} sm={9} sx={{ display: 'flex', gap: 2 }}>
          <img
            src={
              user?.acf?.profile_picture.sizes?.thumbnail
                ? user?.acf?.profile_picture.sizes?.thumbnail
                : `${config.themeFolder}/assets/PlaceholderProfilePicture.jpg`
            }
            width={72}
            height={72}
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
            <Typography
              variant="body2"
              color="grey"
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              columnGap={1}
            >
              <span>
                <LocationOnIcon fontSize="small" />
                {user.acf.city}
              </span>
              <span>
                <LanguageIcon fontSize="small" sx={{ marginRight: 0.2 }} />
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
            <StarIcon color="info" />
            4.5
          </Typography>
          <Typography variant="body1">6 Reviews</Typography> */}
          {/* <Typography variant="body2">{`€${user.acf.price} / hour`}</Typography> */}
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={12}>
          <Typography variant="body2">{user.acf.about_me}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1">Company</Typography>
          <Typography variant="body2" mb={2}>
            {user.acf.company}
          </Typography>
          <Typography variant="body1">Years of experience</Typography>
          <Typography variant="body2">{user.acf.years_of_experience}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1">Specalisations</Typography>
          <Typography variant="body2" mb={2}>
            {user.acf.specialisations.join(', ')}
          </Typography>
          <Typography variant="body1">CS Skills</Typography>
          <Typography variant="body2">{user.acf.cs_skills.join(', ')}</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body1">Seniority Level</Typography>
          <Typography variant="body2" mb={2}>
            {user.acf.seniority_level}
          </Typography>
          <Typography variant="body1">Extra skills</Typography>
          <Typography variant="body2">{user.acf.extra_skills.join(', ')}</Typography>
        </Grid>
        <Grid item xs={12} md={3} position="relative">
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            position={{ md: 'absolute' }}
            bottom={0}
            right={0}
            gap={0.5}
          >
            <Button variant="outlined" onClick={() => onClickViewProfile(user)}>
              View Profile
            </Button>
            <Button
              variant="contained"
              href={config.userLoggedIn ? `mailto:${user?.user_email}` : paths.login}
            >
              <EmailIcon sx={{ marginRight: 1 }} />
              {config.userLoggedIn ? 'Get in touch' : 'Log in to get in touch'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Paper>
)
