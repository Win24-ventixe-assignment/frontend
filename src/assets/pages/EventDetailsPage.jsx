import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const EventDetailsPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  /*Got this code from Chat GPT*/
  const formatDateTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString("sv-SE", {
      weekday: "long",   // måndag, tisdag
      day: "numeric",    // 1, 2, 3
      month: "long",     // januari, februari
      year: "numeric",   // 2025
      hour: "2-digit",   // 08, 18
      minute: "2-digit", // 00, 30
    })
  }

  const getEvent = async () => {
    const res = await fetch(`https://localhost:7265/api/events/${id}`)

    if (res.ok) {
      const response = await res.json()
      setEvent(response.result)
    } else {
      console.error("Failed to fetch event")
    }
  }

  useEffect(() => {
    getEvent()
  }, [id])

  if (!event) {
    return <p>Laddar evenemangsdetaljer...</p>/* Chat GPT recommended using this code*/
  }

  return (
    <div className="event-details">
      <img src={event.imageUrl || "/images/pexels-joshsorenson-154147.jpg"} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Plats: {event.location}</p>
      <p>Datum: {formatDateTime(event.date)}</p>
      <Link to={`/events/booking/${id}`}>Boka detta evenemang</Link>
    </div>
  )
}

export default EventDetailsPage
