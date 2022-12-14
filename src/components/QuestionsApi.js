import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Typography, Button, CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {decode} from 'html-entities';
import { handleScore } from '../redux/actions/actions'
import AxiosHook from '../hooks/AxiosHook'
import icon from '../css/icon.png'


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
  
  if (question_category){
    apiUrl = apiUrl.concat(`&category=${question_category}`)
    console.log(question_category)
  }
  
  if (question_difficulty){
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  
  if (question_type){
    apiUrl = apiUrl.concat(`&type=${question_type}`)
    console.log(question_type)
  }

  const { res, loading } = AxiosHook({ url: apiUrl })
  const [ showQuestions, setShowQuestions ] = useState(0)
  const [ answers, setAnswers ] = useState([])

  useEffect(() => {
    if(res?.results.length){
      const trivia = res.results[showQuestions]
      let responses = [...trivia.incorrect_answers]
      responses.splice(getNum(trivia.incorrect_answers.length), 0, trivia.correct_answer)
      setAnswers(responses)
    }
  }, [res, showQuestions])

  // console.log(res)
  if(loading){
    return (
      <Box mt={20}>
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
      <Typography variant='h4'>Question {showQuestions + 1}/{question_amount}</Typography>
      <Typography mt={5}>{decode(res.results[showQuestions].question)}</Typography>
      {answers.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleAnswer} variant='contained'>{decode(data)}</Button>
      </Box>
      ))}
      <Box mt={5}>Score: {score}</Box>
      <div id='quiz_footer'>
        <a href='https://github.com/a-gbatie/Final-Quiz-App' target='_blank'><img src={icon} alt='icon' width='50' height='50'/></a>
      </div>
    </Box>
  )
}

export default QuestionsApi