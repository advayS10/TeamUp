import React from 'react'
import badminton from '../assets/badminton.avif'
import cricket from '../assets/cricket.avif'
import kabaddi from '../assets/kabaddi.avif.jpg'
import football from '../assets/fb.avif'
import tennis from '../assets/Tennis.avif.png'
import valorant from '../assets/valorant.avif'
import rl from '../assets/RL.avif'
import cs2 from '../assets/cs2.avif'
import fortnite from '../assets/Fortnite.avif'
import apex from '../assets/apex.avif'
import fc25 from '../assets/fc25.avif'
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
                Choose a Games to TeamUp
                </h2>

                {/* Grid for Games */}
                <div className="grid grid-cols-2 gap-16">
                {/* Game 1 - Football */}
                <a className="game-card transform transition-transform hover:scale-105">
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
                <a className="game-card transform transition-transform hover:scale-105">
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

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={valorant}
                        alt="Valorant"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Valorant</span>
                    </div>
                    </div>
                </a>

                {/* Game 3 - Tennis */}
                <a className="game-card transform transition-transform hover:scale-105">
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
                <a className="game-card transform transition-transform hover:scale-105">
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

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={rl}
                        alt="Rocket League"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Rocket League</span>
                    </div>
                    </div>
                </a>

                {/* Game 5 - Badminton */}
                <a className="game-card transform transition-transform hover:scale-105">
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

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={apex}
                        alt="apex"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Apex legend</span>
                    </div>
                    </div>
                </a>

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={cs2}
                        alt="cs2"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Counter Strike 2</span>
                    </div>
                    </div>
                </a>

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={fc25}
                        alt="fc25"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">FC 25</span>
                    </div>
                    </div>
                </a>

                <a className="game-card transform transition-transform hover:scale-105">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={fortnite}
                        alt="fortnite"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xl font-semibold">Fortnite</span>
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