import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FormSelect } from './form/FormSelect'
import { SearchBox } from './form/SearchBox'

const NiceHeader = styled(Typography)`
  background-image: linear-gradient(90deg, #ff557c 0%, #1839f2 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
`

export const FilterHeader = ({ filters }) => {
  const {
    filterState: {
      name,
      country,
      languages,
      seniorityLevel,
      specialisations,
      csSkills,
      yearsOfExperience,
      extraSkills,
    },
    filterStateChange: {
      setName,
      setCountry,
      setLanguages,
      setSeniorityLevel,
      setSpecialisations,
      setCSSkills,
      setYearsOfExperience,
      setExtraSkills,
    },
    options: {
      countryOptions,
      languageOptions,
      seniorityLevelOptions,
      specalisationsOptions,
      csSkillsOptions,
      yearsOfExperienceOptions,
      extraSkillsOptions,
    },
  } = filters

  return (
    <div className="white-bg">
      <Container maxWidth="xl" sx={{ paddingY: 4 }}>
        <NiceHeader variant="h1" textAlign="center">
          Find a Customer Success Mentor That Fits Your Needs
        </NiceHeader>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={12} sm={12}>
            <SearchBox onChange={setName} label={'Search by name'} value={name} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setCountry}
              label="Country"
              options={countryOptions}
              selectedValue={country}
            />
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
              label="Customer Success Skills"
              options={csSkillsOptions}
              selectedValue={csSkills}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setYearsOfExperience}
              label="Years of Experience"
              options={yearsOfExperienceOptions}
              selectedValue={yearsOfExperience}
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
