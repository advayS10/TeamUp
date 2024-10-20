import React, { useState, useEffect } from 'react'
import {Input, Button} from './index'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

function Profile({preloadedValues}) {
    const options = [
        {value: 'Cricket', label: 'Cricket'},
        {value: 'Football', label: 'Football'},
        {value: 'Kabaddi', label: 'Kabaddi'},
        {value: 'Valorant', label: 'Valorant'},
        {value: 'FC25', label: 'FC25'},
        {value: 'Badminton', label: 'Badminton'},
        {value: 'Counter Strike', label: 'Counter Strike'},
        {value: 'Basketball', label: 'Basketball'},
        {value: 'Hockey', label: 'Hockey'},
        {value: 'Apex Legend', label: 'Apex Legend'},
    ]

    const [editable, setEditable] = useState(false)
    const [readonly, setReadonly] = useState(true)
    
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: preloadedValues
    })

    useEffect(() => {
        if (preloadedValues) {
            reset(preloadedValues)
        }
    }, [preloadedValues, reset])


    const createProfile = async (data) => {
        try {
            let response = await fetch("http://localhost:5000/api/profile", {
            // let response = await fetch("https://backend-aa41itfm7-advays-projects-48a8343d.vercel.app/api/profile", {
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    location: data.location,
                    interest: data.interest,
                    phone: data.phone,
                    email: data.email,
                })
            })

            const json = await response.json()
            console.log(json)

        } catch (error) {
            console.log(error.message)
        }

    }

    const handleEdit = (e) => {
        e.preventDefault()
        setEditable(true)
        setReadonly(false)

    }



    return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-3xl bg-gray-800 rounded-xl text-white p-10 border border-black/10`}>
            <div className='w-full block'>
                <h1 className='font-sans text-3xl'>Profile, </h1>
            </div>
            <form onSubmit={handleSubmit(createProfile)}>
                <div className='flex items-center justify-evenly pt-8'>
                    <div className='w-[50%] pr-2'>
                        <Input
                        label = "Name: "
                        placeholder= "Your Name"
                        type = "name"
                        className = "mt-2"
                        readOnly = {readonly}
                        {...register("name", {
                            required: true
                        })}
                        />
                    </div>
                    <div className='w-[50%] pl-2'>
                        <Input
                        label = "Location: "
                        placeholder= "Your Location"
                        type="name"
                        className = "mt-2"
                        readOnly = {readonly}
                        {...register("location", {
                            required: true
                        })}
                        />
                    </div>
                </div>
                <div className='w-full pt-6'>
                    <label htmlFor="">Interest:</label>
                    <Controller 
                    control={control}
                    name="interest"
                    
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select 
                        isDisabled={readonly}
                        options={options} 
                        isMulti 
                        placeholder="Interest"
                        className='basic-multi-select text-black mt-2'
                        // value={options.filter(option => field.value.includes(option.value))} 
                        value={field.value && Array.isArray(field.value) ? options.filter(option => field.value.includes(option.value)) : []}//this is use to display pre values
                        onChange={(selectedOptions) => { 
                            const selectedValue = selectedOptions ? selectedOptions.map(option => option.value) : []
                            field.onChange(selectedValue) 
                        }}
                        />
                    )}
                    />
                    
                </div>
                <div className='flex items-center justify-evenly pt-6'>
                    <div className='w-[50%] pr-2'>
                        <Input
                        label = "Phone: "
                        placeholder= "Your Phone Number"
                        type = "phone"
                        className = "mt-2"
                        readOnly = {true}
                        {...register("phone", {
                            required: true
                        })}
                        />
                    </div>
                    <div className='w-[50%] pl-2'>
                        <Input
                        label = "Email: "
                        placeholder= "Your Email"
                        type="email"
                        className = "mt-2"
                        readOnly = {true}
                        {...register("email", {
                            required: true
                        })}
                        />
                    </div>
                </div>
                <div className='pt-2 w-full flex items-center justify-end'>
                    {editable ? 
                    <Button
                    type='submit'
                    className='bg-blue-500 mt-2'
                    onClick = {() => {
                        setEditable(false)
                        setReadonly(true)
                    }}
                    >Save</Button>
                    : 
                    <Button
                    type='button'
                    className='bg-blue-500 mt-2'
                    onClick = {handleEdit}
                    >Edit</Button>
                    }
                    
                </div>

            </form>
        </div>
        
    </div>
  )
}

export default Profile