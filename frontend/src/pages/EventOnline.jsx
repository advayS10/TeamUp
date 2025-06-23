import React from 'react'
import { Container } from '../components'
import bg from '../assets/home-bg.avif'
import AllEventsOnline from './AllEventsOnline'

function EventOnline() {
    return (
      <div className='relative'>
          <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
          <Container>
              <div className='h-screen relative'>
                  <AllEventsOnline/>
              </div>
          </Container>
      </div>
    )
}

export default EventOnline