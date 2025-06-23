import React, { useEffect, useState } from 'react'
import EventComp from '../components/EventComp'
import { Container } from '../components'
import { useParams } from 'react-router-dom'
import bg from '../assets/home-bg.avif'

function EventPage() {

    

  return (
    <>
        <div className='py-8 min-h-screen relative'>
            <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
            <Container>
                <EventComp className="relative"/>
            </Container>
        </div>
    </>
  )
}

export default EventPage