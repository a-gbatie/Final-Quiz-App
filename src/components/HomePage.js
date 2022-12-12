import React from 'react'
import { Button, Box, CircularProgress } from '@mui/material'

import Configure from './Configure'
import FormInputs from './FormInputs'
import AxiosHook from '../hooks/AxiosHook'


const HomePage = () => {
  const { res, error, loading } = AxiosHook({ url: '/api_category.php' })
  // console.log(res)
  
  if(loading){
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return (
      <h6 color='red'>Uh oh! Something's Not Right!</h6>
    )
  }

  const levels = [
    { id: 'easy', name: 'Easy'},
    { id: 'medium', name: 'Medium'},
    { id: 'hard', name: 'Hard'}
  ]

  const type = [
    { id: 'multiple', name: 'Multiple Choice'},
    { id: 'boolean', name: 'True/False'}
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Quiz App</h1>
      <Configure options={res.trivia_categories} label='Category'/>
      <Configure options={levels} label='Difficulty'/>
      <Configure options={type}label='Style'/>
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