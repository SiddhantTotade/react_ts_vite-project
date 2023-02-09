import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserForm from './components/UserForm'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserForm />} />
      </Routes>
    </Router >
  )
}

export default App
