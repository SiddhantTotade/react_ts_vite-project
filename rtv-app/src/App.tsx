import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserForm from './pages/UserForm'
import APIData from './pages/APIData'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserForm />} />
        <Route path='/data' element={<APIData />} />
      </Routes>
    </Router >
  )
}

export default App
