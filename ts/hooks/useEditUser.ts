import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import apiClient from '../api/apiClient'
import { endPoints } from '../config/config'
import { sanitizeData } from '../utils/sanitizeData'
import { User } from './../interfaces/User'
import { useCurrentuser } from './useCurentUser'
import { userUserOptions } from './useUserOptions'

export const useEdituser = (onSuccess: () => void) => {
  const { currentUser, refetch } = useCurrentuser()
  const { options } = userUserOptions()
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
      onSuccess: () => {
        onSuccess()
        setError(undefined)
      },
    }
  )

  // Double mutation is needed to prevent closing the drawer when the picture is updated
  const {
    isLoading: isUserPictureLoading,
    data: userPictureData,
    mutate: editUserPicture,
  } = useMutation(
    'editUserMutation',
    async (updatedUser: User) => {
      return await apiClient.post(endPoints.users + '/me', updatedUser)
    },
    {
      onError: (err: AxiosError) => {
        setError(err.response?.data)
      },
      onSuccess: () => {
        setError(undefined)
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

  const editUserResponse: User | undefined = data?.data || userPictureData?.data || undefined
  const editPictureResponse: any = pictureData?.data || undefined

  useEffect(() => {
    if (editPictureResponse) {
      editUserPicture(
        sanitizeData(
          {
            ...currentUser,
            acf: { ...currentUser.acf, profile_picture: editPictureResponse.id },
          },
          options
        )
      )
    }
  }, [editPictureResponse])

  useEffect(() => {
    refetch()
  }, [editUserResponse])

  useEffect(() => {
    if (error) {
      console.error(error)
      // alert(
      //   'Something went wrong while updating your profile. Please contact support with the following error: ' +
      //     JSON.stringify(error)
      // )
    }
  }, [error])

  return {
    editPicture,
    editUser,
    editPictureResponse,
    editUserResponse,
    error,
    isLoading: isLoading || isPictureLoading || isUserPictureLoading,
  }
}
