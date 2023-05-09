import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from '../interfaces/User'

export const useCurrentuser = () => {
  const [error, setError] = useState()

  const { isLoading, data, refetch } = useQuery(
    'currentUserQuery',
    async () => {
      return await apiClient.get(endPoints.users + '/me')
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const currentUser: User | undefined = data?.data || undefined

  return { currentUser, isLoading, error, refetch }
}
