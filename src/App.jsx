import { Route, Routes} from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import BookingEventPage from './assets/pages/BookingEventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<EventPage />}/>
       <Route path="/events/:id" element={<EventDetailsPage />}/>
       <Route path="/events/bookig/:id" element={<BookingEventPage />}/>
    </Routes>
  )
}

export default App
