import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function PlayerInvite({data}) {

    const eventId = useParams().id
    const userId = localStorage.getItem("userid")

    const invite = async (playerId) => {
        try {
            const response = await fetch('http://localhost:5000/api/invite', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    event: eventId,
                    invited_by: userId,
                    invited_to: playerId
                })
            })

            const data = await response.json()

            console.log(data)

            if(data.success){
                toast.success("Invitation Sent!", {
                    theme: "dark"
                })
            }
            else{
                toast.warn(data.message, {
                    theme: "dark"
                })
            }
            

        } catch (error) {
            console.log(error.message)
        }
    }
    

  return (
    <>
        <div className='mx-24'>

        
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                </div>
                <div>
                <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
                <div className="flex ">
                    {
                        data.interest.map((interest) => (
                            <li className='text-sm list-disc pr-4'key={interest} >{interest}</li>
                        ))
                    }
                </div>
                </div>
            </div>
            <button 
            onClick={() => invite(data._id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                Invite
            </button>
            </div>
        </div>
    </>
  )
}

export default PlayerInvite