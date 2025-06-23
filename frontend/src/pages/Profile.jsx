import React, { useEffect, useState } from 'react'
import { Profile as ProfileComponent} from '../components'
import bg from '../assets/home-bg.avif'

function Profile() {

    const [preloadedData, setPreloadedData] = useState({})

    const data = async () => {
        try {
            let email = localStorage.getItem("email")


            let resp = await fetch(`${import.meta.env.VITE_API_URL}/api/profiledata`, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })

            const profileData = await resp.json()

            console.log(profileData)
            localStorage.setItem("userid", profileData._id)

            if(profileData){
                const preloadedValues = {
                    name: profileData.name,
                    location: profileData.location,
                    interest: profileData.interest,
                    phone: profileData.phone,
                    email: profileData.email
                }
                console.log(preloadedValues)
                setPreloadedData(preloadedValues)

            }
            else{
                let response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
                    method: "POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email: email
                    })
                })
        
                const userData = await response.json()
        
                const preloadedValues = {
                    name: userData.name,
                    location: "",
                    interest: [],
                    phone: userData.phone,
                    email: userData.email
                }

                console.log(preloadedValues)

                setPreloadedData(preloadedValues)
            }
    
        } catch (error) {
            console.log(error.message)
        }
    }

    

    console.log(localStorage.getItem("userid"))

    useEffect(() => {
        data()
    }, [])

   

  return (
    <div className='relative'>
        <div className='absolute inset-0 bg-cover bg-center brightness-50' style={{ backgroundImage: `url(${bg})` }}></div>
        <div className='py-16 h-screen relative'>
            <ProfileComponent preloadedValues={preloadedData} />
        </div>
    </div>
    
  )
}

export default Profile