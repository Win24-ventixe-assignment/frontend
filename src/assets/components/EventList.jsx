import React, {useEffect, useState} from 'react'
import EventItem from './EventItem'

const EventList = () => {
const [events, setEvents] = useState([])

const getEvents = async () => {
  const res = await fetch("https://localhost:7265/api/events")

  if (res.ok) {
    const response = await res.json()
    setEvents(response.result)
  }
  
}

useEffect(() => {
  getEvents()
}, []
)

console.log(events)



  return (
    <section id="events">
      <div className="card-container">
        {events.map((event) => (
          <EventItem key={event.id} item={event} />
        ))}
      </div>
    </section>
  );
}

export default EventList