import React from 'react'
import { Button, Container, Input } from '../components'
import AllEvent from './AllEvent.jsx'
import { useNavigate } from 'react-router-dom'
import EventComp from '../components/EventComp.jsx'
import bg from '../assets/home-bg.avif'

function Event() {
    const navigate = useNavigate()

  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <Container>
            <div className='min-h-screen relative'>
                <AllEvent/>
            </div>
        </Container>
    </div>
  )
}

export default Event