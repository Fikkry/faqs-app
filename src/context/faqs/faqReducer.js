import { GET_QUESTIONS, CURRENT_QUESTION, ERROR_QUESTIONS } from '../types'

const faqReducer = (state, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      }
    case CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      }
    case ERROR_QUESTIONS:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default faqReducer
