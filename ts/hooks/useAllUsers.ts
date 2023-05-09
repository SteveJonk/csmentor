import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from '../interfaces/User'
import { toSnakeCase } from '../utils/toSnakeCase'
import useDebounce from './useDebounce'

export const useAllUsers = (filters) => {
  const {
    name,
    languages,
    seniorityLevel,
    specialisations,
    csSkills,
    yearsOfExperience,
    extraSkills,
  } = filters

  const [error, setError] = useState()
  const debouncedName = useDebounce(name, 300)

  /**
    specialisations
    seniority_level
    experience
    cs_skills
    languages
    extra_skills
   */

  const queryString = Object.entries({
    languages,
    seniorityLevel,
    specialisations,
    csSkills,
    yearsOfExperience,
    extraSkills,
  }).reduce(
    (acc, [key, value]) =>
      value ? acc + `&${toSnakeCase(key)}=${encodeURIComponent(value as string)}` : acc,
    ''
  )

  const { isLoading, data, refetch, isRefetching } = useQuery(
    'allUsersQuery',
    async () => {
      return await apiClient.get(
        `${endPoints.users}?acf_format=standard${queryString}&search=${name}`
      )
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  useEffect(() => {
    refetch()
  }, [
    debouncedName,
    languages,
    seniorityLevel,
    specialisations,
    csSkills,
    yearsOfExperience,
    extraSkills,
  ])

  const users: User[] | undefined = data?.data || []

  return { users, isLoading, isRefetching, error, refetch }
}
