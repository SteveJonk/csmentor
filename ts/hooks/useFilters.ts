import { useState } from 'react'
import { userUserOptions } from './useUserOptions'

export const useFilters = () => {
  const { options } = userUserOptions()

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [languages, setLanguages] = useState('')
  const [seniorityLevel, setSeniorityLevel] = useState('')
  const [specialisations, setSpecialisations] = useState('')
  const [csSkills, setCSSkills] = useState('')
  const [yearsOfExperience, setYearsOfExperience] = useState('')
  const [extraSkills, setExtraSkills] = useState('')
  const [validatedMember, setValidatedMember] = useState(false)

  //TODO: Later locatie implementeren
  const [location, setLocation] = useState('')

  const languageOptions = Object.values(options?.acf?.properties?.languages?.items?.enum || {})
  const countryOptions = Object.values(options?.acf?.properties?.country?.items?.enum || {})
  const seniorityLevelOptions = Object.values(
    options?.acf?.properties?.seniority_level?.items?.enum || {}
  )
  const specalisationsOptions = Object.values(
    options?.acf?.properties?.specialisations?.items?.enum || {}
  )
  const csSkillsOptions = Object.values(options?.acf?.properties?.cs_skills?.items?.enum || {})
  const yearsOfExperienceOptions = Object.values(
    options?.acf?.properties?.years_of_experience?.items?.enum || {}
  )
  const extraSkillsOptions = Object.values(
    options?.acf?.properties?.extra_skills?.items?.enum || {}
  )

  return {
    filterState: {
      name,
      country,
      languages,
      seniorityLevel,
      specialisations,
      csSkills,
      yearsOfExperience,
      extraSkills,
      validatedMember,
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
      setValidatedMember,
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
  }
}
