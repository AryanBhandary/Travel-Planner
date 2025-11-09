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
import Unauthorized from './Unauthorized'
import AdminRoute from './admin/components/AdminRoute'
import UserRoute from './user/components/UserRoute'
import CityManipulation from './admin/pages/CityManipulation'
import BookingRequests from './admin/pages/BookingRequests'
import AdminProfile from './admin/pages/AdminProfile'
import GetStarted from './user/pages/GetStarted'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Logged in users Routes */}
        <Route element={<UserRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/city/:id" element={<CityDetails />} />
          <Route path="/bookingForm" element={<BookingForm />} />
        </Route>
        
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin Protected Route */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/cityManipulation" element={<CityManipulation />} />
          <Route path="/bookingRequests" element={<BookingRequests />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
