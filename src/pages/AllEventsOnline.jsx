import React, { useEffect, useState } from 'react'
import { Container, EventCard, Input, Button } from '../components'
import { useNavigate } from 'react-router-dom'


function AllEventsOnline() {

    const [cardData, setCardData] = useState([])

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    
    const loadData = async () => {
        let response = await fetch('http://localhost:5000/api/eventData', {
        // let response = await fetch('https://backend-4baz8jqe8-advays-projects-48a8343d.vercel.app/api/eventData', {
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
    

    useEffect(() => {
        loadData()
    }, [])

  return (
    <div className='w-full py-8'>
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
                        <Button className='bg-red-600' onClick={() => {navigate('/events')}}>Check offline Games</Button>   
                    </div>
                    <div className=''>
                        <Button className='bg-blue-700' onClick={() => {navigate('/eventform')}}>Add Your Event</Button>   
                    </div>
                </div>
            </div>
            
            <div className='flex flex-wrap pt-8'>
                { 
                    cardData.length > 0 ? cardData.filter((data) => data.category === "Online")
                    .filter((data) => data.location.toLowerCase().includes(search))
                    // .filter((data) => filterByDate(data.date))
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

export default AllEventsOnline