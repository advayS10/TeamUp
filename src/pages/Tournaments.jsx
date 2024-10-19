import React from 'react'
import bg from '../assets/home-bg.avif'

function Tournaments() {
  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="flex flex-col  relative items-center justify-center min-h-screen bg-gradient-to-b from-primary to-primary-foreground">
        <div className="max-w-xl px-16 bg-white rounded-xl py-12 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground">Coming Soon</h1>
            <p className="mt-4 text-lg text-primary-foreground">
            Get ready for our exciting new tournaments feature, coming soon to our platform. Stay tuned for updates!
            </p>
        </div>
        </div>
    </div>
  )
}

export default Tournaments