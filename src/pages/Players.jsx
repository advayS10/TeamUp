import React, { useEffect, useState } from 'react'
import PlayerInvite from '../components/PlayerInvite.jsx'
import { Container } from '../components/index.js'
import bg from '../assets/home-bg.avif'
import { resolvePath } from 'react-router-dom'

function Players() {

    const [playerData, setPlayerData] = useState()

    const loadData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/allplayerdata', {
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

    useEffect(() => {
        loadData()
    }, [])

  return (
    <>
        <div className='py-8 relative'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <div className='relative'>
        <Container>
            <div className='flex justify-center py-8 relative'>
                <h1 className='text-white text-4xl font-bold'>Invite Players</h1>
            </div>
            <div className='relative'>
                {
                    playerData && playerData.length > 0 ? playerData.map((data) => (
                        <div key={data._id} className='pt-4'>
                            <PlayerInvite data = {data}/>
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