import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../../api/apiClient'
import { endPoints } from '../../config/config'

export const useGetEvents = () => {
  const [error, setError] = useState()

  const post_data = new FormData()
  post_data.append('action', 'get_events')

  const { isLoading, data, refetch } = useQuery(
    'getEvents',
    async () => {
      return await apiClient.post(endPoints['wp-admin'], post_data)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )
  console.log({ error, data })

  const events = data?.data || undefined

  return { events, isLoading, error, refetch }
}
