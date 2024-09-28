import React, { useEffect, useState } from 'react'

function EventComp(event) {

    const [playerData, setPlayerData] = useState({})

    const loadplayer = async () => {
        try {
            let email = localStorage.getItem("email")

            let resp = await fetch('http://localhost:5000/api/profiledata', {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            
            const player = await resp.json()

            setPlayerData({name: player.name, email: email})

        } catch (error) {
            
        }
    }

    useEffect(() => {
        loadplayer()
    }, [setPlayerData])

    const addPlayer = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/eventUpdate', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: event.event._id, // Ensure you're passing the _id to identify the event
                    sport: event.event.sport,
                    location: event.event.location,
                    date: event.event.date,
                    time: event.event.time,
                    players: event.event.players,
                    name: event.event.name,
                    description: event.event.description,
                    useremail: event.event.useremail,
                    category: event.event.category,
                    player: playerData // This should be the new player being added to players_joined
                })
            });
    
            const data = await response.json();
            console.log(data);

            window.location.reload();

        } catch (error) {
            console.log(error.message)
        }
    }


    return (
    <div className="rounded-lg border relative bg-white text-card-foreground shadow-sm w-full max-w-4xl mx-auto" data-v0-t="card">
      <div className="space-y-1.5 p-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">{event.event.sport} Match</h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="2" x2="5" y1="12" y2="12"></line>
              <line x1="19" x2="22" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="2" y2="5"></line>
              <line x1="12" x2="12" y1="19" y2="22"></line>
              <circle cx="12" cy="12" r="7"></circle>
            </svg>
            <span className='text-xl'>{event.event.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <span>{event.event.date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>{event.event.time}</span>
        </div>
      </div>
      <div className="p-6 grid gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>{event.event.players} players required</span>
          </div>
          <button className="inline-flex items-center bg-black text-white hover:bg-gray-300 hover:text-black justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          onClick={() => {addPlayer()}}
          >
            Join Event
          </button>
        </div>
        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-bold">Description</h3>
            <p className="text-muted-foreground">
              {event.event.description}
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium">Players Joined</h4>
            <div className="grid gap-2">
                {
                    event.event && event.event.players_joined && event.event.players_joined.length > 0 ? 
                        event.event.players_joined.map((player, index) => (
                            <div key={index} className="flex items-center pt-2 gap-2">
                                <span className="relative flex h-6 w-10 shrink-0 overflow-hidden rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                                </span>
                                <div>
                                <p className="font-medium">{player.name}</p>
                                </div>
                            </div>
                        )) : ( 
                            <div>Players not joined yet... </div>
                        )
                    
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventComp