import React, { useState } from 'react'
import { Box } from '@mui/system'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleCategory, handleDifficulty, handleType } from '../redux/actions/actions'

const Configure = (props) => {
  const { label, options } = props
  const [value, setValue]= useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
    switch(label) {
      case 'Category':
        dispatch(handleCategory(e.target.value))
        break;
        case 'Difficulty':
          dispatch(handleDifficulty(e.target.value))
          break;
          case 'Type':
            dispatch(handleType(e.target.value))
            // console.log(handleType(e.target.value))
        break;
      default:
        return
    }
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

export default Configure;