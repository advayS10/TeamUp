import React, { useEffect, useState } from 'react'
import { Container, EventCard, Input, Button } from '../components'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AllEvent() {

    const [cardData, setCardData] = useState([])

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const authStatus = useSelector((state) => state.auth.status)
    
    const loadData = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/eventData`, {
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        })

        response = await response.json()

        if (response.success){
            setCardData(response.events)
        }
        else{
            console.log(response.success)
        }
        
    }

    const filterByDate = (eventDate) => {
        const currentDate = new Date()
        const eventDateTime = new Date(eventDate)

        // Check if the event is today or in the future
        return eventDateTime >= currentDate.setHours(0, 0, 0, 0) // Keeps events from today or later
    }

    const { game } = useParams()
    
    useEffect(() => {
        loadData()
    }, [])

  return (
    <div className='w-full h-full py-8'>
        <Container>
            
            <div className="flex justify-between ">
                <div className='flex items-center'>
                    <div className='w-[450px] '>
                        <Input className="" placeholder={"Search by location"} value={search} 
                        onChange={(e) => { setSearch(e.target.value)}} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='pr-10'>
                        <Button className='bg-red-600' onClick={() => {navigate('/events/online')}}>Check online Games</Button>   
                    </div>
                    <div className=''>
                        <Button className='bg-blue-700' 
                        onClick={() => { 
                            if (authStatus == true){
                                navigate('/eventform')
                            }else{
                                toast.error("Please Login to Add Events!")
                            }
                            
                        }}
                        >Add Your Event</Button>   
                    </div>
                </div>
            </div>
            
            <div className='flex flex-wrap pt-8'>
                { 

                    cardData.length > 0 ? cardData.filter((data) => data.category === "Offline")

                    .filter((data) => data.location.toLowerCase().includes(search))
                    // .filter((data) => filterByDate(data.date))
                    // .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((event) => (
                    <div key={event._id} className='p-2 w-[400px] '>
                        <EventCard event={event} />
                    </div>
                    )) : <div>No Events Found</div>
                }
            </div>
        </Container>
    </div>
  )
}

export default AllEvent