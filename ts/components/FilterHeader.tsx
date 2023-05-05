import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FormSelect } from './form/FormSelect'
import { SearchBox } from './form/SearchBox'

export const FilterHeader = ({ filters }) => {
  const {
    filterState: {
      name,
      languages,
      seniorityLevel,
      specialisations,
      csSkills,
      experience,
      extraSkills,
    },
    filterStateChange: {
      setName,
      setLanguages,
      setSeniorityLevel,
      setSpecialisations,
      setCSSkills,
      setExperience,
      setExtraSkills,
    },
    options: {
      languageOptions,
      seniorityLevelOptions,
      specalisationsOptions,
      csSkillsOptions,
      experienceOptions,
      extraSkillsOptions,
    },
  } = filters

  return (
    <div className="white-bg">
      <Container maxWidth="xl" sx={{ paddingY: 4 }}>
        <Typography variant="h1" textAlign="center">
          Find a Customer Success Mentor That Fits Your Needs
        </Typography>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={12} sm={12}>
            <SearchBox onChange={setName} label={'Search by name'} value={name} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setLanguages}
              label="Languages"
              options={languageOptions}
              selectedValue={languages}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setSeniorityLevel}
              label="Seniority Level"
              options={seniorityLevelOptions}
              selectedValue={seniorityLevel}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setSpecialisations}
              label="Specialisations"
              options={specalisationsOptions}
              selectedValue={specialisations}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setCSSkills}
              label="CS Skills"
              options={csSkillsOptions}
              selectedValue={csSkills}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setExperience}
              label="Years of Experience"
              options={experienceOptions}
              selectedValue={experience}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setExtraSkills}
              label="Extra skills"
              options={extraSkillsOptions}
              selectedValue={extraSkills}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
