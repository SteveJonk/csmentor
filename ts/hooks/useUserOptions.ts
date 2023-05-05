import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { UserOptions } from '../interfaces/UserOptions'

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

  const options: UserOptions | undefined = data?.data?.schema?.properties || []

  return { options, isLoading, error }
}
