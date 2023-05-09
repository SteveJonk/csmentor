import { Close } from '@mui/icons-material'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { ReactElement, forwardRef, useEffect } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import { useCurrentuser } from '../hooks/useCurentUser'
import { useEdituser } from '../hooks/useEditUser'
import { userUserOptions } from '../hooks/useUserOptions'
import { User } from '../interfaces/User'
import { Select } from '../interfaces/UserOptions'
import { CSThemeVars } from '../theme/CSThemeVars'
import { toSentence } from '../utils/toSentence'

// TODO: Add account fields
// TODO: Add save account functionality
// TODO: Add changePassword functionality

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />
})

export const MyAccountDrawer = ({ isOpen, onClose }: Props) => {
  const { currentUser, refetch } = useCurrentuser()
  const { editUser } = useEdituser()
  const { options } = userUserOptions()
  const { register, handleSubmit, reset, watch } = useForm<User>()
  const isMentor = watch('acf.is_mentor')

  // Needed to do this with useEffect, because currentUser is async
  useEffect(() => {
    reset({ ...currentUser, email: currentUser?.user_email })
  }, [currentUser])

  if (!currentUser) return null

  const onSubmit: SubmitHandler<User> = (data) => {
    editUser(data)
    onClose()
  }

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{ background: CSThemeVars.grey }}
    >
      <AppBar position="relative" color="inherit">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h2">My Account</Typography>
          <IconButton color="inherit" onClick={onClose} aria-label="close">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="xl">
          <Grid container marginTop={3} gap={1} rowGap={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Name" {...register('name')} fullWidth />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField label="Email" {...register('email')} fullWidth />
            </Grid>

            {Object.entries(options?.acf?.properties || {}).map(([key, value]) => (
              <UserField
                key={key}
                field={key}
                fieldMeta={value}
                user={currentUser}
                register={register}
                isMentor={isMentor}
              />
            ))}
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </Dialog>
  )
}

interface IUserField {
  field: string
  fieldMeta?: Select
  user: User
  register: UseFormRegister<User>
  isMentor: boolean
}

const UserField = ({ field, fieldMeta, user, register, isMentor }: IUserField) => {
  const fieldsToIgnore = [
    'profile_picture',
    // 'is_mentor',
    // 'about_me',
    // 'price',
    // 'city',
    // 'languages',
    // 'job',
    // 'linkedin',
  ]
  if (fieldsToIgnore.find((fieldToIgnore) => fieldToIgnore === field)) {
    return null
  }

  if (!isMentor && field !== 'is_mentor' && field !== 'linkedin') return null

  if (field === 'is_mentor') {
    return (
      <Grid key={field} item xs={12} md={12}>
        <FormControlLabel
          label="I am a mentor"
          control={
            <Checkbox {...register(`acf.${field}` as any)} defaultChecked={user.acf?.is_mentor} />
          }
        />
      </Grid>
    )
  }

  if (field === 'about_me') {
    return (
      <Grid key={field} item xs={12} md={4}>
        <TextField
          label={toSentence(field)}
          {...register(`acf.${field}` as any)}
          fullWidth
          multiline
          rows={6}
        />
      </Grid>
    )
  }

  if (field === 'price') {
    return (
      <Grid key={field} item xs={12} md={4}>
        <TextField
          label={toSentence(field)}
          {...register(`acf.${field}` as any)}
          fullWidth
          type="number"
        />
      </Grid>
    )
  }

  return (
    <Grid key={field} item xs={12} md={4}>
      <TextField label={toSentence(field)} {...register(`acf.${field}` as any)} fullWidth />
    </Grid>
  )
}
