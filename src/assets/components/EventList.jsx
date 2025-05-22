import React, {useEffect, useState} from 'react'

const EventList = () => {
const [events, setEvents] = useState([])

const getEvents = async () => {
  const res = await fetch("")

  if (res.ok) {
    const response = await res.json()
    setEvents(response.result)
  }
  
}

useEffect(() => {
  getEvents()
}, [])


  return (
    <section id="events"> 
    {
      events.map(event => ( <EventItem key={event.id} item={event} />))
    }
    
    </section>
  )
}

export default Events