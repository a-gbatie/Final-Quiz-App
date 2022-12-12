import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import AxiosHook from '../hooks/AxiosHook'
import { useSelector } from 'react-redux'

const QuestionsApi = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    question_amount
  } = useSelector((state) => state)
  console.log(question_amount)

  let apiUrl = `/api.php?amount=15`
  const { res, loading } = AxiosHook({ url: apiUrl })
  console.log(res)

  return (
    <Box>
      <Typography variant='h4'>Questions 1</Typography>
      <Typography mt={5}>Question Asked</Typography>
      <Box mt={2}>
        <Button variant='contained'>Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant='contained'>Answer 2</Button>
      </Box>
      <Box mt={5}>Score: 2 / 6</Box>
    </Box>
  )
}

export default QuestionsApi