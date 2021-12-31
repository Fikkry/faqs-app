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
          question: 'Which language runs in a web browser?',
          a: 'Java',
          b: 'C',
          c: 'Python',
          d: 'JavaScript',
          correct: 'd',
        },
        {
          question: 'What does CSS stand for?',
          a: 'Central Style Sheets',
          b: 'Cascading Style Sheets',
          c: 'Cascading Simple Sheets',
          d: 'Cars SUVs Sailboats',
          correct: 'b',
        },
        {
          question: 'What does HTML stand for?',
          a: 'Hypertext Markup Language',
          b: 'Hypertext Markdown Language',
          c: 'Hyperloop Machine Language',
          d: 'Helicopters Terminals Motorboats Lamborginis',
          correct: 'a',
        },
        {
          question: 'What year was JavaScript launched?',
          a: '1996',
          b: '1995',
          c: '1994',
          d: 'none of the above',
          correct: 'b',
        },
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
      if (answer === state.questions[state.currentNumber].correct) {
        state.score++
      }

      state.currentNumber++

      if (state.currentNumber < state.questions.length) {
        loadQuestion(state.questions[state.currentNumber])
      } else {
        quiz.innerHTML = `
              <h2>You answered ${state.score}/${state.questions.length} questions correctly</h2>
              <button onclick="location.reload()">Reload</button>
          `
      }
    }
  }

  const getAnswer = () => {
    const answerEls = document.querySelectorAll('.answer')

    let answer

    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answerEl.checked = false
        answer = answerEl.id
      }
    })

    return answer
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
