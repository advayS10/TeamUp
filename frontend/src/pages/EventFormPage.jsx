import React from 'react'
import { Container, EventForm } from '../components'
import bg from '../assets/home-bg.avif'

function EventFormPage() {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-contain bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <Container>
            <EventForm />
        </Container>
    </div>
  )
}

export default EventFormPage