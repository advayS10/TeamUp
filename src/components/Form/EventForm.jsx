import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config'

function EventForm({ event }) {

    const {register, handleSubmit, setValue, watch, getValues, control } = useForm({
        defaultValues: {
            sport: event?.sport || "",
            location: event?.location || "",
            date: event?.date || 0,
            total_players: event?.total_players || 0,
            time: event?.time || 0,
            // user_id: event?.user_id || "",
            user_name: event?.user_name || "",
            // players_joined: event?.players_joined || [],
            // event_id: event?.event_id || "",
            event_description: event?.event_description || "",
        }
    })

    // const navigate = useNavigate()
    // const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        if(event){
            const dbEvent = await appwriteService.updateEvent(event.$id, {
                ...data
            })

            if(dbEvent){
                // navigate(`/event/${dbEvent.$id}`)
            }
        } else {
            const dbEvent = await appwriteService.createEvent({
                ...data,
                user_id: userData.$id,
                // user_name: userData.$user_name
            })

            if(dbEvent){
                // navigate(`/event/${dbEvent.$id}`)
            }
        }
    }


    return (
    
        // v0 by Vercel.
        // https://v0.dev/t/FqMaUaJxB5Q
        
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl m-auto" data-v0-t="card">
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
                                options = {['Cricket', 'Football']}
                                // value={}
                                // onChange={handleChange}
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("sport", {required: true})}
                            ></Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="location">
                                Location
                            </label>
                            <Input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="2"
                                {...register("total_players", {required: true})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                                Your Name
                            </label>
                            <Input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="John Doe"
                                {...register("user_name", {required: true})}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="description">
                            Event Description
                        </label>
                        <textarea
                            id="description"
                            {...register("event_description", {required: true})}
                            // value={formData.description}
                            // onChange={handleChange}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
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