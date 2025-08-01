import React from 'react'
import { useState } from 'react';
import { Container } from '..'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { InvitationsModal } from '../index'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem("authToken")
        localStorage.removeItem("email")
        navigate('/login')
    }

    const authStatus = useSelector((state) => state.auth.status)

    // console.log(authStatus)

    // console.log(localStorage.getItem('email'))
    // console.log(localStorage.getItem('authToken'))

    // const authStatus = true

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const userid = localStorage.getItem("userid")

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
        // {
        //     name: "Players",
        //     slug: "/players",
        //     active: true
        // },
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
            name: "Games",
            slug: "/games",
            active: authStatus
        },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus
        },
        // {
        //     name: "Invitations",
        //     slug: "/invitations",
        //     active: authStatus
        // }

    ]


    return (
    <nav className="bg-gray-800 p-4">
      <Container>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          TeamUp
        </div>
        <div className="hidden md:flex space-x-4 text-white">
            <ul className='flex ml-auto gap-2'>
                {navItems.map((item) => item.active ? (
                    <li key={item.name}>
                        <NavLink to={item.slug}
                        // onClick={() => navigate(item.slug)}
                        className={({isActive}) => isActive ? "inline-block px-6 py-2 text-gray-800 duration-200 bg-blue-200 rounded-full" : "inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-gray-800 rounded-full" } 
                        >{item.name}</NavLink>
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
                {authStatus && (
                    <button
                    onClick={handleOpenModal}
                    className="inline-block px-6 py-2 text-white  duration-200 hover:bg-blue-200 hover:text-gray-800 rounded-full"
                >
                    Invitations
                </button>
                )}
            </ul>
            <div className="">
                <InvitationsModal
                    userId={userid}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
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
                        onClick={() => navigate(item.slug)}
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
                {authStatus && (
                    <button
                    onClick={handleOpenModal}
                    className="inline-block px-6 py-2 text-white  duration-200 hover:bg-blue-200 hover:text-gray-800 rounded-full"
                >
                    Invitations
                </button>
                )}
            </ul>
        </div>
      )}
      </Container>
    </nav>
    );
}

export default Header