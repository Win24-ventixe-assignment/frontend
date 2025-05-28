import { Route, Routes} from 'react-router-dom'
import './App.css'

import BookingEventPage from './assets/pages/BookingEventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import PortalLayout from './assets/layouts/ProtalLayout.jsx'
import EventPage from './assets/pages/EventPage.jsx'


function App() {
 

  return (
     <>
      
      <Routes>
        <Route path='/' element={<PortalLayout />}>
          <Route index element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/booking" element={<BookingEventPage />} />
          <Route path='*' element={<div>Not found</div>} />
        </Route>
        


      </Routes>
      
    </>
  )
}

export default App
