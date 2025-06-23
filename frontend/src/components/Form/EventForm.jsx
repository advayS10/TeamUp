import React, {useCallback, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'


function EventForm({ preloadedValues }) {

    const navigate = useNavigate()

    const email = localStorage.getItem('email')

    const { id } = useParams()

    const {register, handleSubmit, reset} = useForm({
        defaultValues: preloadedValues
    })

    useEffect(() => {
        if (preloadedValues) {
            reset(preloadedValues)
        }
    }, [preloadedValues, reset])


    const submit = async (data) => {
        try {
            if ( id ){
                const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/eventUpdate`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        _id: id, // Ensure you're passing the _id to identify the event
                        sport: data.sport,
                        location: data.location,
                        date: data.date,
                        time: data.time,
                        players: data.players,
                        name: data.name,
                        description: data.description,
                        category: data.category,
                        useremail: email,
                    })
                });
        
                const data1 = await response.json();
                console.log(data1);
            }
            else{

            
                let response = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/event`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        
                        ...data, 
                        useremail : email,
                    })
                })

                const json = await response.json()
                console.log(json)

            }

            if (data.category === "Offline"){
                navigate('/events')
            }else{
                navigate('/events/online')
            }

        } catch (error) {
            console.log(error.message)
        }
    }


    return (
    
        // v0 by Vercel.
        // https://v0.dev/t/FqMaUaJxB5Q
        
        <div className="rounded-lg border-2 relative border-gray-500 bg-gray-300 text-card-foreground shadow-sm w-full max-w-2xl m-auto" data-v0-t="card">
            
            <form onSubmit={handleSubmit(submit)}>
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Create New Event</h3>
                    <p className="text-sm text-muted-foreground">Fill out the details to post your event.</p>
                </div>
                <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="sport">
                                Sport
                            </label>
                            <Select
                                id="sport"
                                options = {['Cricket', 'Football', 'Hockey', 'Valorant', 'Counter Strike', 'Kabaddi', 'Apex Legend', 'Badminton', 'FC25', 'Rocket League']}
                                // value={}
                                // onChange={handleChange}
                                className="flex h-10 w-full items-center justify-between rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("sport", {required: true})}
                            ></Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="location">
                                Location
                            </label>
                            <Input
                                className="flex h-10 w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="location"
                                // value={formData.location}
                                // onChange={handleChange}
                                placeholder="Enter location"
                                {...register("location", {required: true})}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="date">
                                Date
                            </label>
                            <Input
                                type="date"
                                id="date"
                                // value={formData.date}
                                // onChange={handleChange}
                                className="flex h-10 w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("date", {required: true})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="time">
                                Time
                            </label>
                            <Input
                                type="time"
                                id="time"
                                // value={formData.time}
                                // onChange={handleChange}
                                className="flex h-10 w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("time", {required: true})}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="players">
                                Players Needed
                            </label>
                            <Input
                                type="number"
                                id="players"
                                // value={formData.players}
                                // onChange={handleChange}
                                className="flex h-10 w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="eg. 10"
                                {...register("players", {required: true})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                                Your Name
                            </label>
                            <Input
                                className="flex h-10 w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="Name"
                                {...register("name", {required: true})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="category">
                                Category
                            </label>
                            <Select
                                id="category"
                                options = {['Offline', 'Online']}
                                // value={}
                                // onChange={handleChange}
                                className="flex h-10 w-full items-center justify-between rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("category", {required: true})}
                            ></Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="description">
                            Event Description
                        </label>
                        <textarea
                            id="description"
                            {...register("description", {required: true})}
                            // value={formData.description}
                            // onChange={handleChange}
                            className="flex w-full rounded-md border-2 border-gray-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                            placeholder="Describe your event details here..."
                        ></textarea>
                    </div>
                </div>
                <div className="items-center p-6 flex justify-end">
                    <Button type="submit" className="bg-black hover:bg-gray-200 hover:text-black px-4 py-2 rounded-md transition-colors">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default EventForm