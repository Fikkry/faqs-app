import React from 'react'

import './App.css'
import Layout from './components/Layout'
import FaqState from './context/faqs/FaqState'

const App = () => {
  return (
    <FaqState>
      <Layout />
    </FaqState>
  )
}

export default App
