import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import AxiosHook from '../hooks/AxiosHook'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScore } from '../redux/actions/actions'
import {decode} from 'html-entities';


const getNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const QuestionsApi = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    question_amount,
    score
  } = useSelector((state) => state)
  const history = useNavigate()
  const dispatch = useDispatch()

  let apiUrl = `/api.php?amount=${question_amount}`
  const { res, loading } = AxiosHook({ url: apiUrl })
  // console.log(res)
  const [ showQuestions, setShowQuestions ] = useState(0)
  const [ answers, setAnswers ] = useState([])
  console.log(res)

  useEffect(() => {
    if(res?.results.length){
      const trivia = res.results[showQuestions]
      let responses = [...trivia.incorrect_answers]
      answers.splice(getNum(trivia.incorrect_answers.length), 0, trivia.correct_answer)
      setAnswers(responses)
    }
  }, [res, showQuestions])
  
  if(question_category){
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_type){
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }
  if(question_difficulty){
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  // console.log(res)

  if(loading){
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    )
  }
  
  const handleAnswer = (e) => {
    const trivia = res.results[showQuestions]

    if(e.target.textContent === trivia.correct_answer){
      dispatch(handleScore(score + 1))
    }

    if(showQuestions + 1 < res.results.length) {
      setShowQuestions(showQuestions + 1)
    } else {
      history('/score')
    }
  }
  return (
    <Box>
      <Typography variant='h4'>Question {showQuestions + 1}</Typography>
      <Typography mt={5}>{decode(res.results[showQuestions].question)}</Typography>
      {answers.map((data, id) => (
        <Box mt={2}>
          <Button onClick={handleAnswer} variant='contained'>{decode(data)}</Button>
      </Box>
      ))}
      <Box mt={5}>Score: {score}/{res.results.length}</Box>
    </Box>
  )
}

export default QuestionsApi