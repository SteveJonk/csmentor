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

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { ReactElement, forwardRef, useEffect } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import { config } from '../config/config'
import { useCurrentuser } from '../hooks/useCurentUser'
import { useEdituser } from '../hooks/useEditUser'
import { userUserOptions } from '../hooks/useUserOptions'
import { User } from '../interfaces/User'
import { SelectData } from '../interfaces/UserOptions'
import { CSThemeVars } from '../theme/CSThemeVars'
import { toSentence } from '../utils/toSentence'

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
  const { currentUser } = useCurrentuser()
  const { editUser, editPicture } = useEdituser()
  const { options } = userUserOptions()
  const { register, handleSubmit, reset, watch } = useForm<User>()
  const isMentor = watch('acf.is_mentor')

  // Needed to do this with useEffect, because currentUser is async
  useEffect(() => {
    reset({
      ...currentUser,
      email: currentUser?.user_email,
      // @ts-ignore
      acf: {
        ...currentUser?.acf,
        price: currentUser?.acf.price || '0',
        // @ts-ignore
        profile_picture: currentUser?.acf?.profile_picture?.id,
      },
    })
  }, [currentUser])

  if (!currentUser) return null

  const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    editPicture(e.target.files[0])
  }

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
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src={
                  currentUser?.acf?.profile_picture.sizes?.large
                    ? currentUser?.acf?.profile_picture.sizes?.large
                    : `${config.themeFolder}/assets/PlaceholderProfilePicture.jpg`
                }
                width={150}
                height={150}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
              <Button
                variant="contained"
                component="label"
                sx={{ width: 'fit-content', marginY: 1 }}
              >
                Change Picture
                <input type="file" hidden onChange={handleProfilePicture} />
              </Button>
            </Grid>
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
            <Grid item xs={12} mb={2}>
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
  fieldMeta?: SelectData
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
          required={fieldMeta.required}
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
          {...register('acf.price')}
          required={fieldMeta.required}
          fullWidth
          type="number"
        />
      </Grid>
    )
  }

  if (fieldMeta.items) {
    const options = Object.keys(fieldMeta.items.enum)
    const value = user.acf?.[field]
    const isSingle = fieldMeta.maxItems === 1
    console.log(field, ': ', fieldMeta.maxItems, isSingle)
    return (
      <Grid key={field} item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel>{`${toSentence(field)}${fieldMeta.required ? ' *' : ''}`}</InputLabel>
          <Select
            required={fieldMeta.required}
            fullWidth
            multiple={!isSingle}
            label={toSentence(field)}
            defaultValue={
              value !== false ? (typeof value === 'object' ? value : [value]) : undefined
            }
            inputProps={register(`acf.${field}` as any)}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    )
  }

  return (
    <Grid key={field} item xs={12} md={4}>
      <TextField label={toSentence(field)} {...register(`acf.${field}` as any)} fullWidth />
    </Grid>
  )
}
