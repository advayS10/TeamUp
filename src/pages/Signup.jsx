import React from 'react'
import { Signup as SignupComponent } from '../components'
import bg from '../assets/home-bg.avif'

function Signup() {
  return (
    <div className='py-8 relative h-screen'>
      <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <SignupComponent />
    </div>
  )
}

export default Signup