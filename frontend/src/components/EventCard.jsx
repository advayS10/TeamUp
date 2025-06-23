import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

function EventCard(event) {
    // const joined = players_joined.length
    const navigate = useNavigate()
    const email = localStorage.getItem('email')

    const authStatus = useSelector((state) => state.auth.status)

  return (
    
        // v0 by Vercel.
        // https://v0.dev/t/gAnWD5uGGsM

        <div className="rounded-lg border bg-card text-card-foreground  shadow-sm w-full max-w-md bg-white" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 px-6 pt-6">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">   
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{event.event.sport} Match</h3>
            </div>
            <div className="bg-muted bg-gray-300 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">Upcoming</div>
            </div>
        </div>
        <div className="p-6 text-sm grid gap-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"              
                className="w-4 h-4"
                >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{event.event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"              
                className="w-4 h-4"
                >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
                </svg>
                <span>{event.event.date} - {event.event.time}</span>
            </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"              
                className="w-4 h-4"
                >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>{event.event.players} players</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"              
                className="w-4 h-4"
                >
                <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>{event.event.players_joined.length} joined</span>
            </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center  gap-2">
                    <div>
                    <p className="text-lg  font-medium">{event.event.name}</p>
                    <p className="text-xs text-muted-foreground">Organizer</p>
                    </div>
                </div>
                <div>
                    {
                        !(event.event.players === event.event.players_joined.length) ? <Button className='inline-flex items-center justify-center mr-2 bg-black hover:bg-gray-300 hover:text-black whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' 
                        onClick = { () => { 
                            if (authStatus == true){
                                navigate(`/events/${event.event._id}`)
                            }else{
                                toast.error("Please Login to Join!")
                            }
                                
                        }}>
                        Join
                        </Button> : 
                        <Button className='inline-flex items-center mr-2 justify-center bg-black hover:bg-gray-300 hover:text-black whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' onClick = {()=>{navigate(`/events/${event.event._id}`)}}>
                        Full
                        </Button>
                    }
                    
                </div>
            </div>
        </div>
        </div>
  )
}

export default EventCard