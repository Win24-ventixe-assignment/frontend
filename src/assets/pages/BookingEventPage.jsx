import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const [formData, setFormData] = useState({ 
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
      const res = await fetch(`https://eventprovider-ventixe-d3eah8behdb4gpe3.swedencentral-01.azurewebsites.net/api/events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event")

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
      const res = await fetch(`https://bookingprovider-ventixe-d3csdgdrgjfjabee.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
  const errorData = await res.json()
  console.error("Reservation failed", errorData)
  setSuccessMessage('Something went wrong. Please try again.')

      } else {
        setSuccessMessage('Your reservation was successful!')
        
      }
    } catch (err) {
      console.error("Error submitting booking", err)
      setSuccessMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="booking-form">
      <h1>Book Event - {event.title}</h1>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

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

        <div className="form-group">
          <label htmlFor="ticketQuantity">Ticket Quantity</label>
          <input
            type="number"
            id="ticketQuantity"
            name="ticketQuantity"
            min="1"
            max="10"
            value={formData.ticketQuantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Reserve tickets</button>
      </form>
    </div>
  )
}

export default BookingEventPage
