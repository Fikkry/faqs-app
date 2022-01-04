import React, { useReducer } from 'react'
import FaqContext from './faqContext'
import faqReducer from './faqReducer'
import { GET_QUESTIONS, CURRENT_QUESTION, ERROR_QUESTIONS } from '../types'

const FaqState = (props) => {
  const initialState = {
    questions: [],
    currentQuestion: null,
    currentNumber: 0,
    correct: null,
    score: 0,
    error: null,
  }

  const [state, dispatch] = useReducer(faqReducer, initialState)

  const getQuestions = () => {
    try {
      const data = [
        {
          question: 'Masalah gorilla',
          a: { answer: 'Untuk apa seekor gorilla di dalam air ?', score: 30 },
          b: {
            answer: 'Untuk apa seekor gorilla di dalam gentong ?',
            score: 10,
          },
          c: { answer: 'Untuk apa seekor gorilla di dalam toren ?', score: 20 },
          d: {
            answer: 'Untuk apa seekor gorilla shooting di spongebob ?',
            score: 5,
          },
        },
        {
          question: 'Masalah gorilla',
          a: { answer: 'Untuk apa seekor gorilla di dalam air ?', score: 30 },
          b: {
            answer: 'Untuk apa seekor gorilla di dalam gentong ?',
            score: 10,
          },
          c: { answer: 'Untuk apa seekor gorilla di dalam toren ?', score: 20 },
          d: {
            answer: 'Untuk apa seekor gorilla shooting di spongebob ?',
            score: 5,
          },
        },
        {
          question: 'Umur',
          a: { answer: '15 - 17', score: 5 },
          b: { answer: '18 - 20', score: 20 },
          c: { answer: '21 - 23', score: 15 },
          d: { answer: '24 - 26', score: 10 },
        },
        // {
        //   question: 'What year was JavaScript launched?',
        //   a: '1996',
        //   b: '1995',
        //   c: '1994',
        //   d: 'none of the above',
        //   correct: 'b',
        // },
      ]

      dispatch({ type: GET_QUESTIONS, payload: data })
      loadQuestion(data[0])
    } catch (err) {
      dispatch({ type: ERROR_QUESTIONS, payload: err.message })
    }
  }

  const loadQuestion = (data) =>
    dispatch({ type: CURRENT_QUESTION, payload: data })

  const submitQuestion = () => {
    const quiz = document.getElementById('quiz')

    const answer = getAnswer()

    if (answer) {
      state.score = parseInt(state.score) + parseInt(answer.score)

      state.currentNumber++

      if (state.currentNumber < state.questions.length) {
        loadQuestion(state.questions[state.currentNumber])
      } else {
        let product
        if (state.score <= 40) {
          product = 'Maneh kudu meuli produk A'
        } else {
          product = 'Maneh kudu meuli produk B'
        }
        quiz.innerHTML = `
          <h2>${product}</h2>
          <button onclick="location.reload()">Reload</button>
        `
      }
    }
  }

  const getAnswer = () => {
    const answerEls = document.querySelectorAll('.answer')

    let answer
    let score

    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answerEl.checked = false
        answer = answerEl.id
        score = answerEl.getAttribute('data-score')
      }
    })

    return { answer: answer, score: score }
  }

  return (
    <FaqContext.Provider
      value={{
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        currentNumber: state.currentNumber,
        score: state.score,
        correct: state.correct,
        error: state.error,
        getQuestions,
        loadQuestion,
        submitQuestion,
      }}
    >
      {props.children}
    </FaqContext.Provider>
  )
}

export default FaqState
