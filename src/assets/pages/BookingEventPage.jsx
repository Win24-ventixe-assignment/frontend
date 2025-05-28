import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState ({ 
    eventId: id,
    firstName: '',
    lastName: '',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    ticketQuantity: 1
  })

  useEffect(() => {
  getEvent()
}, [])

const getEvent = async () => {
  try {
          const res = await fetch(`https://localhost:7265/api/events/${id}`)
        if (res.ok) throw new Error("Failed to fetch event")

      const data = await res.json()
    setEvent(data.result)
  } catch (err) {
    console.error(err)
  }
 
}

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const res = await fetch(``, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        if (!res.ok) {
          console.error("Booking failed")
        } else {
          console.log("Booking successful")
          navigate('/')
        }
        } catch (err) {
          console.error("Error submitting booking", err)
        }

}



 return (
  <div className="booking-form">
    <h1>Book Event - {event.title}</h1>

    <form onSubmit={handleSubmit} noValidate>

      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="streetName">Street Name</label>
        <input type="text" id="streetName" name="streetName" value={formData.streetName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
      </div>

      <button type="submit">Book Now</button>
    </form>
  </div>
);

}

export default BookingEventPage