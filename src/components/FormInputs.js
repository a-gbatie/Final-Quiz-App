import React from 'react'
import { Box, FormControl, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleAmount } from '../redux/actions/actions'

const FormInputs = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(handleAmount(e.target.value))
  }

  return (
    <Box mt={3} width='100%'>
      <FormControl fullWidth size='small'>
        <TextField
        onChange={handleChange}
        variant='outlined'
        label='# of Questions'
        placeholder='Choose a number betwen 1 - 50'
        type='number'
        size='small'
        />
      </FormControl>
    </Box>
  )
}

export default FormInputs;