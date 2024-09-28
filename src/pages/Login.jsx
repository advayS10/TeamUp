import React from 'react'
import { Login as LoginComponent } from '../components/index'
import bg from '../assets/home-bg.avif'

function Login() {
  return (
    <div className='py-8 relative h-screen'>
      <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <LoginComponent />
    </div>
  )
}

export default Login