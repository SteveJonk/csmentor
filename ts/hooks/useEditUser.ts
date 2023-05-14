import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { User } from './../interfaces/User'
import { useCurrentuser } from './useCurentUser'

export const useEdituser = () => {
  const { currentUser, refetch } = useCurrentuser()
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

  const {
    isLoading: isPictureLoading,
    data: pictureData,
    mutate: editPicture,
  } = useMutation(
    'editPictureMutation',
    async (newPicture: Blob) => {
      const formData = new FormData()
      formData.append('file', newPicture)
      return await apiClient.post(endPoints.media, formData)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
    }
  )

  const editUserResponse: User | undefined = data?.data || undefined
  const editPictureResponse: any = pictureData?.data || undefined

  useEffect(() => {
    if (editPictureResponse) {
      editUser({
        ...currentUser,
        acf: { ...currentUser.acf, profile_picture: editPictureResponse.id },
      })
    }
  }, [editPictureResponse])

  useEffect(() => {
    refetch()
    // refetchAll()
  }, [editUserResponse])

  if (error) console.error(error)

  return {
    editPicture,
    editUser,
    editPictureResponse,
    editUserResponse,
    error,
    isLoading: isLoading || isPictureLoading,
  }
}
