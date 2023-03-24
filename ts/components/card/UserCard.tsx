import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { config } from '../../config/config'
import { User } from '../../interfaces/User'

interface Props {
  user: User
}

export const UserCard = ({ user }: Props) => (
  <Paper elevation={1} sx={{ marginBottom: 2 }}>
    <Box padding={2}>
      <Grid container spacing={2} paddingBottom={3}>
        <Grid item xs={12} sm={9} sx={{ display: 'flex', gap: 2 }}>
          <img
            src={`${config.themeFolder}/assets/PlaceholderProfilePicture.jpg`}
            width={72}
            height={72}
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          <Box>
            <Typography variant="h2">{user.name}</Typography>
            <Typography variant="h3" color="grey">
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
                <LocationOnIcon fontSize="small" />
                Haarlem
              </span>
              <span>
                <LanguageIcon fontSize="small" sx={{ marginRight: 0.2 }} />
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
            <StarIcon color="info" />
            4.5
          </Typography>
          <Typography variant="body1">6 Reviews</Typography>
          <Typography variant="body2">€10,- / hour</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={12}>
          <Typography variant="body2">
            Someting about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            facilisis nisl, id pretium massa. Fusce ultricies malesuada justo vitae bibendum.
            Aliquam eleifend mauris vel erat varius, eu luctus urna tincidunt. Aenean vitae risus
            iaculis, ultricies nibh non, finibus ante.
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
            <Button variant="outlined">Get in touch</Button>
            <Button variant="contained">View Profile</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Paper>
)
