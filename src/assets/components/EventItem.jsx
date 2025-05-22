import React from 'react'

const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`}>
        <div className="event-card">
        <div>{item.title}</div>
       </div>
    </Link>
  )
}

export default EventItem