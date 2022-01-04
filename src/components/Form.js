import React from 'react'

const Form = ({ question }) => {
  return (
    <div className="quiz-header">
      <h2 id="question">{question.question}</h2>
      <ul>
        <li key="a">
          <input
            type="radio"
            name="answer"
            id="a"
            className="answer"
            data-score={question.a.score}
          />
          <label htmlFor="a" id="a_text">
            {question.a.answer}
          </label>
        </li>

        <li key="b">
          <input
            type="radio"
            name="answer"
            id="b"
            className="answer"
            data-score={question.b.score}
          />
          <label htmlFor="b" id="b_text">
            {question.b.answer}
          </label>
        </li>

        <li key="c">
          <input
            type="radio"
            name="answer"
            id="c"
            className="answer"
            data-score={question.c.score}
          />
          <label htmlFor="c" id="c_text">
            {question.c.answer}
          </label>
        </li>

        <li key="d">
          <input
            type="radio"
            name="answer"
            id="d"
            className="answer"
            data-score={question.d.score}
          />
          <label htmlFor="d" id="d_text">
            {question.d.answer}
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Form
