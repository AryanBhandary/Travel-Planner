
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style/App.css'
import Home from './HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Cities from './Cities'
import Bookings from './pages/Bookings'
import CityDetails from './pages/CityDetails'
import Profile from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
