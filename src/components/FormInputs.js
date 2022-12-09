import React from 'react'
import { Box, FormControl, TextField } from '@mui/material'

const FormInputs = () => {
  const handleChange = () => {}

  return (
    <Box mt={3} width='100%'>
      <FormControl fullWidth size='small'>
        <TextField
        onChange={handleChange}
        variant='outlined'
        label='# of Questions'
        placeholder='Choose a number betwen 1 - 30'
        type='number'
        size='small'
        />
      </FormControl>
    </Box>
  )
}

export default FormInputs;