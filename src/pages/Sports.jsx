import React from 'react'
import badminton from '../assets/badminton.avif'
import cricket from '../assets/cricket.avif'
import kabaddi from '../assets/kabaddi.avif.jpg'
import football from '../assets/fb.avif'
import tennis from '../assets/Tennis.avif.png'
import bg from '../assets/home-bg.avif'
import { Container } from '../components'

function Sports() {
  return (
    <>
        <section className="py-16 relative" >
            <div className='absolute inset-0 bg-contain bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <Container>
        {/* Container */}
            <div className="w-[70%] max-w-[1200px] mx-auto px-5 relative z-10" >
                {/* Heading */}
                <h2 className="text-white text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-12">
                Choose a Sport to TeamUp
                </h2>

                {/* Grid for Games */}
                <div className="grid grid-cols-2 gap-16">
                {/* Game 1 - Football */}
                <a href="/find-teammates/Football" className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={football}
                        alt="Football"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Football</span>
                    </div>
                    </div>
                </a>

                {/* Game 2 - Cricket */}
                <a href="/find-teammates/Cricket" className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={cricket}
                        alt="Cricket"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Cricket</span>
                    </div>
                    </div>
                </a>

                {/* Game 3 - Tennis */}
                <a href="/find-teammates/Tennis" className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={tennis}
                        alt="Tennis"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Tennis</span>
                    </div>
                    </div>
                </a>

                {/* Game 4 - Kabaddi */}
                <a href="/find-teammates/Kabaddi" className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={kabaddi}
                        alt="Kabaddi"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Kabaddi</span>
                    </div>
                    </div>
                </a>

                {/* Game 5 - Badminton */}
                <a href="/find-teammates/Badminton" className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={badminton}
                        alt="Badminton"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Badminton</span>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            </Container>
        </section>
        
    </>
  )
}

export default Sports