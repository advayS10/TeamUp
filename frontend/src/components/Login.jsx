import React, { useState } from 'react'

import { login as authLogin } from '../store/authSlice'
import { Button, Input } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()

    

    const login = async (data) => {

        try {
            let response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })

            const json = await response.json()

            if(!json.success){
                alert("Enter Valid Credentials.")
            }
            else{
                localStorage.setItem("authToken", json.authToken)
                localStorage.setItem("email", data.email)
                dispatch(authLogin())
                navigate('/')
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    

  return (
    <div 
        className='flex items-center justify-center w-full relative'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
            
                    </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Log in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)}
            className='mt-8'
            >
                <div className='space-y-5'>
                    <Input 
                    label = "Email :"
                    placeholder = "Enter your Email"
                    type = "email"
                    {...register("email", {
                        required: true
                    })}
                    />
                    <Input 
                    label = "Password: "
                    placeholder = "Enter your password"
                    type = "password"
                    {...register("password", {
                        required: true
                    })}
                    />
                    <Button 
                    type = "submit"
                    className = "w-full bg-black"
                    >Login</Button>
                </div>
            </form>
            </div>
        </div>
  )
}

export default Login