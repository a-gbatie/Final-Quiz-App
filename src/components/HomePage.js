import React from 'react'
import { Button, Box, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Configure from './Configure'
import FormInputs from './FormInputs'
import AxiosHook from '../hooks/AxiosHook'



const HomePage = () => {
  const { res, error, loading } = AxiosHook({ url: '/api_category.php' })
  // console.log(res)
  const history = useNavigate()

  if(loading){
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return (
      <Typography variant='h4' mt={25} color='red'>
        Uh oh! Something's Not Right!
      </Typography>
    )
  }

  const levels = [
    { id: 'easy', name: 'Easy'},
    { id: 'medium', name: 'Medium'},
    { id: 'hard', name: 'Hard'}
  ]

  const types = [
    { id: 'multiple', name: 'Multiple Choice'},
    { id: 'boolean', name: 'True/False'}
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    history('/quiz')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Quiz App</h1>
      <Configure options={res.trivia_categories} label='Category'/>
      <Configure options={levels} label='Difficulty'/>
      <Configure options={types} label='Style'/>
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