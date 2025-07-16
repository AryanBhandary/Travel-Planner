
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
