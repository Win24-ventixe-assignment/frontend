import { Route, Routes} from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import BookingEventPage from './assets/pages/BookingEventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import PortalLayout from './assets/layouts/ProtalLayout.jsx'

function App() {
 

  return (
     <>
      
      <Routes>
        <Route element={<PortalLayout />}></Route>
        <Route path="/" element={<EventPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/booking" element={<BookingEventPage />} />
      </Routes>
      
    </>
  )
}

export default App
