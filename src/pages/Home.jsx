import React from 'react'
import { Container, EventCard, Carousel } from '../components'
import appwriteService from '../appwrite/config'

function Home() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        appwriteService.getEvents([]).then((events) => {
            if(events){
                setEvents(events.documents)
            }
        })
    }, [])  


  return (
    <>
        <Carousel/>
        {/* // v0 by Vercel.
        // https://v0.dev/t/h0o0CkC5nZ9 */}

        <Container>
        <section className="px-4 py-12 md:px-6 lg:py-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest Events</h2>
                {/* <a className="text-primary hover:underline" href="#">
                    View all events
                </a> */}
            </div>
            <div className="flex flex-wrap -mx-3">
                {events.map((event)=>(
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
                        <EventCard {...event}/>
                    </div>
                ))}

                
                
            </div>
        </section>
        </Container>
    </>
  )
}

export default Home