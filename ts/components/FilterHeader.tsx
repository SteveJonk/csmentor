import { Container, Grid, Typography } from '@mui/material'
import { useFilters } from '../hooks/useFilters'
import { FormSelect } from './form/FormSelect'
import { SearchBox } from './form/SearchBox'

export const FilterHeader = () => {
  const {
    company,
    setCompany,
    companyOptions,
    companyType,
    setCompanyType,
    companyTypeOptions,
    specialisations,
    setSpecialisations,
    specalisationsOptions,
    location,
    setLocation,
    locationOptions,
    name,
    setName,
    focus,
    setFocus,
    focusOptions,
  } = useFilters()

  return (
    <div className="white-bg">
      <Container sx={{ paddingY: 4 }}>
        <Typography variant="h1" textAlign="center">
          Find a Customer Success Mentor That Fits Your Needs
        </Typography>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={12} sm={12}>
            <SearchBox onChange={setName} label={'Search by name'} value={name} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setCompany}
              label="Company"
              options={companyOptions}
              selectedValue={company}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setCompanyType}
              label="Company type"
              options={companyTypeOptions}
              selectedValue={companyType}
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
              onChange={setLocation}
              label="Location"
              options={locationOptions}
              selectedValue={location}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={setFocus}
              label="Focus"
              options={focusOptions}
              selectedValue={focus}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
