import React, { useEffect, useState } from 'react'
import EventComp from '../components/EventComp'
import { Container } from '../components'
import { useParams } from 'react-router-dom'
import bg from '../assets/home-bg.avif'

function EventPage() {

    const { id } = useParams()

    const [eventInfo, setEventInfo] = useState({})

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/eventData/${id}`, {
                method: "GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const data = await response.json()

            if (data.success){
                setEventInfo(data.event)
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])


  return (
    <>
        <div className='py-8 h-screen relative'>
            <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
            <Container>
                <EventComp event={eventInfo} className="relative"/>
            </Container>
        </div>
    </>
  )
}

export default EventPage