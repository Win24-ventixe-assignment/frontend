import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventItem from '../components/EventItem'




 const PortalLayout = () => {
  return (
    <div className= "portal-wrapper">
      <Nav />
      <Header />
      <EventItem />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  )
 }

 export default PortalLayout