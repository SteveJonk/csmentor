import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface Props {
  onChange: (event: string) => void
  label: string
  multiple?: boolean
  options: string[]
  selectedValue: string
}

export const FormSelect = ({ label, multiple, onChange, options, selectedValue }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        multiple={multiple}
        value={selectedValue}
        label={label}
        onChange={handleChange}
        size="small"
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
