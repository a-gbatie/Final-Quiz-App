import React from 'react'
import { Button, Box } from '@mui/material'

import Configure from './Configure'
import FormInputs from './FormInputs'
import AxiosHook from '../hooks/AxiosHook'


const HomePage = () => {
  const { res, error, loading } = AxiosHook({ url: 'value' })
  console.log(res)
  // console.log(url)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Quiz App</h1>
      <Configure label='Category'/>
      <Configure label='Difficulty'/>
      <Configure label='Style'/>
      <FormInputs />
      <Box mt={3} width='100%'>
        <Button fullWidth variant='contained' type='submit'>
          Play
        </Button>
      </Box>
    </form>
  )
}

export default HomePage;