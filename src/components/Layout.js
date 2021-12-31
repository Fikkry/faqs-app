import React, { useContext, useEffect, useState } from 'react'
import FaqContext from '../context/faqs/faqContext'

import Button from './Button'
import Form from './Form'

const Layout = () => {
  const faqContext = useContext(FaqContext)

  const { questions, currentQuestion, getQuestions, submitQuestion } =
    faqContext

  const [question, setQuestion] = useState({
    question: 'Question Next',
    a: 'Question',
    b: 'Question',
    c: 'Question',
    d: 'Question',
  })

  useEffect(() => {
    getQuestions()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (questions.length !== 0) {
      setQuestion(currentQuestion)
    }
    // eslint-disable-next-line
  }, [currentQuestion])

  return (
    <div className="quiz-container" id="quiz">
      <Form question={question} />
      <Button onClick={submitQuestion} />
    </div>
  )
}

export default Layout
