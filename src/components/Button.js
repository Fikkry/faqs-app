import React from 'react'

const Button = ({ onClick }) => {
  return (
    <>
      <button id="submit" onClick={() => onClick()}>
        Submit
      </button>
    </>
  )
}

export default Button
