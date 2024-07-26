import React from 'react'
import { useState } from 'react';
import { Container } from '..'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useSelector } from 'react-redux';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }

    // const authStatus = useSelector((state) => state.auth.status)
    const authStatus = true


    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Events",
            slug: "/events",
            active: true
        },
        {
            name: "Tournaments",
            slug: "/tournaments",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus
        }

    ]


    return (
    <nav className="bg-gray-800 p-4">
      <Container>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          TeamUp
        </div>
        <div className="hidden md:flex space-x-4 text-white">
            <ul className='flex ml-auto'>
                {navItems.map((item) => item.active ? (
                    <li key={item.name}>
                        <button
                        // onClick={() => navigate(item.slug)}
                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-gray-800 rounded-full'
                        >{item.name}</button>
                    </li>
                ) : null
                )}
                {authStatus && (
                    <li>
                        <button
                        onClick={logoutHandler}
                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-gray-800 rounded-full'
                        >Logout</button>
                    </li>
                )}
            </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden items-center">
          <ul className='flex flex-col items-center'>
                {navItems.map((item) => item.active ? (
                    <li key={item.name}>
                        <button
                        // onClick={() => navigate(item.slug)}
                        className='block text-white mt-2'
                        >{item.name}</button>
                    </li>
                ) : null
                )}
                {authStatus && (
                    <li>
                        <button
                        onClick={logoutHandler}
                        className='block text-white mt-2'
                        >Logout</button>
                    </li>
                )}
            </ul>
        </div>
      )}
      </Container>
    </nav>
    );
}

export default Header