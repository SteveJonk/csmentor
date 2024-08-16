import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

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
