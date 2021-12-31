import React from 'react'

const Form = ({ question }) => {
  return (
    <div className="quiz-header">
      <h2 id="question">{question.question}</h2>
      <ul>
        <li key="a">
          <input type="radio" name="answer" id="a" className="answer" />
          <label htmlFor="a" id="a_text">
            {question.a}
          </label>
        </li>

        <li key="b">
          <input type="radio" name="answer" id="b" className="answer" />
          <label htmlFor="b" id="b_text">
            {question.b}
          </label>
        </li>

        <li key="c">
          <input type="radio" name="answer" id="c" className="answer" />
          <label htmlFor="c" id="c_text">
            {question.c}
          </label>
        </li>

        <li key="d">
          <input type="radio" name="answer" id="d" className="answer" />
          <label htmlFor="d" id="d_text">
            {question.d}
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Form
