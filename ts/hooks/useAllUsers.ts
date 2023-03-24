import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from '../interfaces/User'

export const useAllUsers = () => {
  const [error, setError] = useState()

  const { isLoading, data } = useQuery(
    'allUsersQuery',
    async () => {
      return await apiClient.get(endPoints.users)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const users: User[] | undefined = data?.data || []

  return { users, isLoading, error }
}
