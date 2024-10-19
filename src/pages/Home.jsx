import React, {useState, useEffect} from 'react'
import { Container, EventCard, Carousel } from '../components'
import heroImage from '../assets/neon-bg.avif'  // Import the image
import backgroundImage from '../assets/home-bg.avif'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {  
  const nagivate = useNavigate()

  return (
    <>
      
        <main className="">
        {/* Hero Section */}
        
        <section className="relative overflow-hidden py-36 min-h-screen flex items-center">
        <Container>
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
          ></div>
          <div className="container relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div className="hero-content max-w-2xl text-center md:text-left">
              <h2 className="text-6xl font-bold text-white leading-tight mb-5">
                Find Your Perfect Teammates
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're gaming online or playing sports outdoors, TeamUp helps
                you find the perfect teammates to match your skill level and interests.
              </p>
              <a
                className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:translate-y-1"
                onClick={() => nagivate('/signup')}
              >
                Get Started
              </a>
            </div>
            <img
              src={heroImage} // Use the imported image
              alt="Teams Interface"
              className="max-w-sm md:max-w-md rounded-xl shadow-lg mt-10 md:mt-0"
            />
          </div>
          </Container>
        </section>
        
        {/* How It Works Section */}
        <section className="relative py-24 bg-gray-900 text-white text-center" id="about">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Add background image for How It Works
          ></div>
          <Container>
            <div className="relative z-10 container">
              <h2 className="text-4xl font-bold mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="step bg-gray-800 p-8 rounded-lg hover:shadow-xl transition transform hover:translate-y-2">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-4">1. Sign Up</h3>
                  <p>Create an account to join TeamUp. It's quick and easy.</p>
                </div>
                <div className="step bg-gray-800 p-8 rounded-lg hover:shadow-xl transition transform hover:translate-y-2">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-4">2. Set Preferences</h3>
                  <p>Select your favorite games or sports, and let us find the right teammates for you.</p>
                </div>
                <div className="step bg-gray-800 p-8 rounded-lg hover:shadow-xl transition transform hover:translate-y-2">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-4">3. Team Up</h3>
                  <p>Connect with players who match your skill level and play style.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Game and Sport Options Section */}
        <section className="relative py-24 bg-gray-900 text-white text-center">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Add background image for Game Options
          ></div>
          <Container>
            <div className="relative z-10 container">
              <h2 className="text-4xl font-bold mb-12">Choose Your Team Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="option bg-gray-800 p-8 rounded-lg hover:shadow-xl transition transform hover:translate-y-2">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-4">Online Games</h3>
                  <p>Find your squad for the latest online multiplayer games.</p>
                  <Link
                    to={'/events/online'}
                    className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:translate-y-1"
                  >
                    Find Teammates
                  </Link>
                </div>
                <div className="option bg-gray-800 p-8 rounded-lg hover:shadow-xl transition transform hover:translate-y-2 ">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-4">Outdoor Sports</h3>
                  <p>Join players for real-world sports like soccer, basketball, and more.</p>
                  <Link
                    to={'/events'}
                    className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 transform hover:translate-y-1"
                  >
                    Find Players
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home