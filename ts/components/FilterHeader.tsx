import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FormSelect } from './form/FormSelect'
import { SearchBox } from './form/SearchBox'

export const FilterHeader = ({ filters }) => {
  const { filterState, filterStateChange, options } = filters
  return (
    <div className="white-bg">
      <Container maxWidth="xl" sx={{ paddingY: 4 }}>
        <Typography variant="h1" textAlign="center">
          Find a Customer Success Mentor That Fits Your Needs
        </Typography>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={12} sm={12}>
            <SearchBox
              onChange={filterStateChange.setName}
              label={'Search by name'}
              value={filterState.name}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={filterStateChange.setCompany}
              label="Company"
              options={options.companyOptions}
              selectedValue={filterState.company}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={filterStateChange.setCompanyType}
              label="Company type"
              options={options.companyTypeOptions}
              selectedValue={filterState.companyType}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={filterStateChange.setSpecialisations}
              label="Specialisations"
              options={options.specalisationsOptions}
              selectedValue={filterState.specialisations}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={filterStateChange.setLocation}
              label="Location"
              options={options.locationOptions}
              selectedValue={filterState.location}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormSelect
              onChange={filterStateChange.setFocus}
              label="Focus"
              options={options.focusOptions}
              selectedValue={filterState.focus}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
