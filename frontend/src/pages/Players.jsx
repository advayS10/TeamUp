import React, { useEffect, useState } from 'react'
import PlayerInvite from '../components/PlayerInvite.jsx'
import { Container, Input, Select } from '../components/index.js'
import bg from '../assets/home-bg.avif'
import { resolvePath } from 'react-router-dom'

function Players() {

    const [playerData, setPlayerData] = useState()

    const loadData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/allplayerdata`, {
                method: "GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            
            const data = await response.json()

            if (data.success){
                setPlayerData(data.players)
            }
            else{
                console.log(data.success)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const [search, setSearch] = useState("")
    const [sport, setSport] = useState("")

    useEffect(() => {
        loadData()
    }, [])

  return (
    <>
        <div className='py-8 relative min-h-screen'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <div className='relative'>
        <Container>
            <div className='flex justify-center py-8 relative'>
                <h1 className='text-white text-4xl font-bold'>Invite Players</h1>
            </div>
            <div className='flex items-center px-24 w-full justify-between'>
                <div className='w-[40%]'>
                    <Input className="" placeholder="Search by name" value={search} 
                    onChange={(e) => {setSearch(e.target.value)}} />
                </div>
                <div className='w-[30%]'>
                    <Select 
                        placeholder="Search by Sport" 
                        id="sport"
                        options = {['Cricket', 'Football', 'Hockey', 'Valorant', 'Counter Strike', 'Kabaddi', 'Apex Legend', 'Badminton', 'FC25', 'Rocket League']} 
                        value={sport}
                        onChange={(e) => {setSport(e.target.value)}}
                    />
                </div>
            </div>
            <div className='relative'>
                {
                    playerData && playerData.length > 0 ? playerData
                    .filter((data) => sport === "" || data.interest.includes(sport))
                    .filter((data) => data.name.toLowerCase().includes(search))
                    .map((data) => (
                        <div key={data._id} className='pt-4'>
                            <PlayerInvite  data ={data}/>
                        </div>
                    )) : <div>Loading...</div>
                }   
            </div>
            
        </Container>
        </div>
        </div>
        
    </>
  )
}

export default Players