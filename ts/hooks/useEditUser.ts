import { AxiosError } from 'axios'
import { useState } from 'react'
import { useMutation } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from './../interfaces/User'

export const useEdituser = () => {
  const [error, setError] = useState()

  const {
    isLoading,
    data,
    mutate: editUser,
  } = useMutation(
    'editUserMutation',
    async (updatedUser: User) => {
      return await apiClient.post(endPoints.users + '/me', updatedUser)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const editUserResponse: User | undefined = data?.data || undefined
  if (error) console.error(error)

  return { editUserResponse, isLoading, error, editUser }
}
