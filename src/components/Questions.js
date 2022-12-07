import React, { useState } from "react";
import '../css/Questions.css'

export function Questions() {
  const questions = [
    {
      question: 'What colors make green?',
      answerChoices: [
        { answer: 'Blue & Yellow', isCorrect: true },
        { answer: 'Red & Yellow', isCorrect: false },
        { answer: 'White & Red', isCorrect: false },
        { answer: 'Red & Blue', isCorrect: false }
      ],
    },
    {
      question: 'Which house was Harry Potter almost sorted into?',
      answerChoices: [
        { answer: 'Hufflepuff', isCorrect: false },
        { answer: 'Gryffindor', isCorrect: false },
        { answer: 'Ravenclaw', isCorrect: false },
        { answer: 'Slytherin', isCorrect: true }
      ],
    },
    {
      question: 'How many bones are in the human body?',
      answerChoices: [
        { answer: '135', isCorrect: false },
        { answer: '200', isCorrect: false },
        { answer: '206', isCorrect: true },
        { answer: '156', isCorrect: false }
      ],
    },
    {
      question: 'Which U.S. State is the largest?',
      answerChoices: [
        { answer: 'Texas', isCorrect: false },
        { answer: 'Alaska', isCorrect: true },
        { answer: 'California', isCorrect: false },
        { answer: 'New York', isCorrect: true }
      ],
    },
    {
      question: 'Who founded Microsoft?',
      answerChoices: [
        { answer: 'Elon Musk', isCorrect: false },
        { answer: 'Steve Jobs', isCorrect: false },
        { answer: 'Bill Gates', isCorrect: false },
        { answer: 'Mark Zuckerburg', isCorrect: true }
      ]
    }
  ];
  const [score, setScore] = useState(0)
  const [viewScore, setViewScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleClick = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }

    const next = currentQuestion + 1
    if(next < questions.length){
      setCurrentQuestion(next)
    } else {
      setViewScore(true)
    }
  }

  return (
    <section className="main">
      {viewScore ? (
        <div className="score_display">
          You got {score} out of {questions.length} correct!
        </div>
      ) : (
        <>
        <div>
          <div>
            <span className="q_tracker">Question {currentQuestion + 1}/{questions.length}</span>
          </div>
          <div className="question">{questions[currentQuestion].question}</div>
        </div>
        <div className="btnParent">
          {questions[currentQuestion].answerChoices.map((answer) => (
            <button className='btn' onClick={() => handleClick(answer.isCorrect)}>{answer.answer}</button> 
          ))}
        </div>
        </>
      )}
    </section>
  )
}

export default Questions;