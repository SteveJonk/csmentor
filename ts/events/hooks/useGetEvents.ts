import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import apiClient from '../../api/apiClient'
import { endPoints } from '../../config/config'
import { Event } from '../types/Events'

export const useGetEvents = () => {
  const [error, setError] = useState()

  const post_data = new FormData()
  post_data.append('action', 'get_events')

  const { isLoading, data, refetch } = useQuery<Event>(
    'getEvents',
    async () => {
      const apiResponse = await apiClient.post(endPoints['wp-admin'], post_data)
      if (apiResponse?.data.success === false) {
        console.error('Error fetching events:', apiResponse?.data)
        setError(apiResponse?.data)
      }

      return apiResponse?.data
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const events = data?.data || undefined

  return { events, isLoading, error, refetch }
}
