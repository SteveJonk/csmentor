import SearchIcon from '@mui/icons-material/Search'
import { Box, TextField } from '@mui/material'

interface Props {
  onChange: (event: string) => void
  label: string
  value: string
}

export const SearchBox = ({ label, onChange, value }: Props) => {
  const handleChange = (event: any) => {
    onChange(event.target.value)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 3 }}>
      <SearchIcon color="primary" sx={{ marginRight: 1 }} />
      <TextField label={label} variant="standard" value={value} onChange={handleChange} fullWidth />
    </Box>
  )
}
