import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from '../interfaces/User'

export const userUserOptions = () => {
  const [error, setError] = useState()

  const { isLoading, data } = useQuery(
    'userOptions',
    async () => {
      return await apiClient.options(endPoints.users)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const options: User[] | undefined = data?.data || []

  return { options, isLoading, error }
}
