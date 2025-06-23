import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Container, EventForm } from '../components'

function EditForm() {

    const { id } = useParams()

    const [eventInfo, setEventInfo] = useState({})

    const getData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/eventData/${id}`, {
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

    const preloadedValues = {
        sport: eventInfo?.sport || "",
        location: eventInfo?.location || "",
        date: eventInfo?.date || "",
        players: eventInfo?.players || 0,
        time: eventInfo?.time || "",
        name: eventInfo?.name || "",
        description: eventInfo?.description || "",
        category: eventInfo?.category || ""
    }


  return (
    <div className='py-8 relative'>
        <Container>
            <EventForm preloadedValues={preloadedValues}/>
        </Container>
    </div>
  )
}

export default EditForm