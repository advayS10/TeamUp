import React from 'react'
import Container from './Container/Container'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm md:text-base mb-4 md:mb-0">
            &copy; 2024 TeamUp. All rights reserved.
            </p>
            <nav>
            <ul className="flex space-x-6 text-sm md:text-base">
                <li>
                <a
                    href="#"
                    className="hover:text-pink-500 transition duration-300"
                >
                    Privacy Policy
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="hover:text-pink-500 transition duration-300"
                >
                    Terms of Service
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="hover:text-pink-500 transition duration-300"
                >
                    Contact Us
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </Container>
        </footer>
  )
}

export default Footer