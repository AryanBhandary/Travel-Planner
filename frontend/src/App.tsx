
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './user/style/App.css'
import Home from './HomePage'
import Login from './user/pages/Login'
import Register from './user/pages/Register'
import Admin from './admin/pages/Admin'
import Cities from './Cities'
import Bookings from './user/pages/Bookings'
import CityDetails from './user/pages/CityDetails'
import Profile from './user/pages/Profile'
import BookingForm from './user/components/BookingForm'

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
        <Route path="/bookingForm" element={<BookingForm />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
