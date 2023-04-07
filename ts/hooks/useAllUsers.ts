import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from '../interfaces/User'
import useDebounce from './useDebounce'

export const useAllUsers = (filters) => {
  const { company, companyType, specialisations, location, name, focus } = filters

  const [error, setError] = useState()
  const debouncedName = useDebounce(name, 300)

  const { isLoading, data, refetch } = useQuery(
    'allUsersQuery',
    async () => {
      return await apiClient.get(`${endPoints.users}?search=${name}`)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  useEffect(() => {
    refetch()
  }, [debouncedName, company, companyType, specialisations, location, focus])

  const users: User[] | undefined = data?.data || []

  return { users, isLoading, error }
}
