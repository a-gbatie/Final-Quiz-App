import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmount, handleScore } from '../redux/actions/actions'

const ScorePage = () => {
  const { score } = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleHome = () => {
    dispatch(handleAmount(50))
    dispatch(handleScore(0))
    history('/')
  }

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight='bold' mb={3}>Final Score: {score}</Typography>
      <Button onClick={handleHome} variant='outlined'>Home</Button>
    </Box>
  )
}

export default ScorePage;