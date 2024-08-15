import React, { useState } from 'react'
import {Input, Button} from './index'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

function Profile() {
    const options = [
        {value: 'Cricket', label: 'Cricket'},
        {value: 'Footbal', label: 'Footbal'},
        {value: 'Hockey', label: 'Hockey'},
        {value: 'Valorant', label: 'Valorant'},
        {value: 'Call of Duty', label: 'Call of Duty'},
    ]
    

  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-3xl bg-gray-800 rounded-xl text-white p-10 border border-black/10`}>
            <div className='w-full block'>
                <h1 className='font-sans text-3xl'>Profile, </h1>
            </div>
            <form>
                <div className='flex items-center justify-evenly pt-4'>
                    <div className='w-[50%] pr-2'>
                        <Input
                        label = "Full Name: "
                        placeholder= "Your Name"
                        type = "name"
                        
                        />
                    </div>
                    <div className='w-[50%] pl-2'>
                        <Input
                        label = "Location: "
                        placeholder= "Your Location"
                        type="text"
                        />
                    </div>
                </div>
                <div className='w-full pt-2'>
                    <label htmlFor="">Interest:</label>
                    <Select options={options} isMulti placeholder="Interest" className='basic-multi-select text-black'/>
                </div>
                <div className='flex items-center justify-evenly pt-2'>
                    <div className='w-[50%] pr-2'>
                        <Input
                        label = "Phone: "
                        placeholder= "Your Phone Number"
                        type = "name"
                        
                        />
                    </div>
                    <div className='w-[50%] pl-2'>
                        <Input
                        label = "Email: "
                        placeholder= "Your Email"
                        type="text"
                        />
                    </div>
                </div>
                <div className='pt-2 w-full flex items-center justify-end'>
                    <Button
                    type='submit'
                    placeholder='Save'
                    className='bg-blue-500'
                    >Edit</Button>
                </div>

            </form>
        </div>
        
    </div>
  )
}

export default Profile