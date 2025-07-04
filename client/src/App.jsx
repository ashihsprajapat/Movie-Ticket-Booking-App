import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/user/HomePage';
import Details from './pages/user/Details';
import MyBooking from './pages/user/MyBooking';
import SeatSelection from './pages/user/SeatSelection';
import MainDashborde from './pages/admin/MainDashborde';
import Dashbord from './pages/admin/Dashbord';
import AddShow from './pages/admin/AddShow';
import ListShow from './pages/admin/ListShow';
import ListBookings from './pages/admin/ListBookings';
import MoviesAll from './pages/user/MoviesAll'

function App() {
  const [count, setCount] = useState(0)

  const isAdminRoute = useLocation().pathname.startsWith("/admin")
 

  return (


    <div className='bg-black'>

      {!isAdminRoute &&
        <Navbar />}

      <Routes>



        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/movies/:id/:date" element={<SeatSelection />} />
        <Route path="/movies" element={<MoviesAll />} />

        <Route path='/admin' element={<MainDashborde />}>

          <Route path='' element={<Dashbord />} />
          <Route path='add-shows' element={<AddShow />} />
          <Route path='list-shows' element={<ListShow />} />
          <Route path='list-booking' element={<ListBookings />} />

        </Route>

      </Routes>


      {!isAdminRoute &&
        <Footer />}
    </div>
  )
}

export default App
