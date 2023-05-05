import { useState } from 'react'
import { userUserOptions } from './useUserOptions'

export const useFilters = () => {
  const { options } = userUserOptions()

  const [name, setName] = useState('')
  const [languages, setLanguages] = useState('')
  const [seniorityLevel, setSeniorityLevel] = useState('')
  const [specialisations, setSpecialisations] = useState('')
  const [csSkills, setCSSkills] = useState('')
  const [experience, setExperience] = useState('')
  const [extraSkills, setExtraSkills] = useState('')

  //TODO: Later locatie implementeren
  const [location, setLocation] = useState('')

  const languageOptions = Object.values(options?.acf?.properties?.extra_skills?.items?.enum || {})
  const seniorityLevelOptions = Object.values(
    options?.acf?.properties?.seniority_level?.items?.enum || {}
  )
  const specalisationsOptions = Object.values(
    options?.acf?.properties?.specialisations?.items?.enum || {}
  )
  const csSkillsOptions = Object.values(options?.acf?.properties?.cs_skills?.items?.enum || {})
  const experienceOptions = Object.values(
    options?.acf?.properties?.years_of_experience?.items?.enum || {}
  )
  const extraSkillsOptions = Object.values(
    options?.acf?.properties?.extra_skills?.items?.enum || {}
  )

  return {
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
  }
}
