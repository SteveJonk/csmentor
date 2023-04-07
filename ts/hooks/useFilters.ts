import { useState } from 'react'

export const useFilters = () => {
  const [company, setCompany] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [specialisations, setSpecialisations] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [focus, setFocus] = useState('')

  // TODO: Now testdata, but this should be filled with actual company options coming from users
  const companyOptions = ['iO', 'Customer Success Snack']
  const companyTypeOptions = ['IT', 'Marketing', 'CS']
  const specalisationsOptions = ['CS', 'Other specialisation', 'one more']
  const locationOptions = ['Haarlem', 'Amsterdam', 'Utrecht', 'Rotterdam']
  const focusOptions = ['Growth', 'Money', 'Expansion']

  return {
    filterState: {
      company,
      companyType,
      specialisations,
      location,
      name,
      focus,
    },
    filterStateChange: {
      setCompany,
      setCompanyType,
      setSpecialisations,
      setLocation,
      setName,
      setFocus,
    },
    options: {
      companyOptions,
      companyTypeOptions,
      specalisationsOptions,
      locationOptions,
      focusOptions,
    },
  }
}
