import React, { useEffect, useState } from 'react'
import { Container, EventCard } from '../components'
import appwriteService from '../appwrite/config'

function AllEvent() {

    const [events, setEvents] = useState([])

    useEffect(() => {

        // Add query for to render 6 events
        appwriteService.getEvents([]).then((events) => {
            if(events){
                setEvents(events.documents)
            }
        })
    }, [])



  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {events.map((event) => (
                    <div key={event.$id} className='p-2 w-1/4'>
                        <EventCard {...event}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllEvent