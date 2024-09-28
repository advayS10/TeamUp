import React from 'react'
import { Container, EventForm } from '../components'
import bg from '../assets/home-bg.avif'

function AddEvent() {
  return (
    <div className='py-8 relative'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <Container>
            <EventForm/>
        </Container>
    </div>
  )
}

export default AddEvent