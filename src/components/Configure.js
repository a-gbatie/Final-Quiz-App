import React, { useState } from 'react'
import { Box } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Configure = ({ label, options }) => {
  const [value, setValue]= useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <Box mt={3} width='100%'>
      <FormControl fullWidth size='small'>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) =>(
            <MenuItem value={id} key={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Configure