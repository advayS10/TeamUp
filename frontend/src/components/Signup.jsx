import React, {useState} from 'react'
import { login as authlogin } from '../store/authSlice'
import { Button, Input } from './index'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form' 


function Signup() {
     

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async (data) => {
        try {
            
            const response = await fetch(`${import.meta.env.VITE_API_URL}/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                })
            })

            const json = await response.json()
            
            console.log(json)

            if(!json.success){
                alert("Enter valid credentials")
            }
            else{
                localStorage.setItem("authToken", json.authToken)
                localStorage.setItem("email", data.email)
                dispatch(authlogin())
                navigate('/')
            }
            

        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className="flex items-center justify-center relative">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input 
                        label = "Full name: "
                        placeholder = "Enter your full name"
                        type = "name"
                        {...register("name", {
                            required: true
                        })}
                        />
                        <Input 
                        label = "Phone Number: "
                        placeholder = "Enter your Phone Number"
                        type = "phone"
                        {...register("phone", {
                            required: true
                        })}
                        />
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
                        type="submit"
                        className = "w-full bg-black"
                        >Create Account</Button>
                    </div>
                </form>
                
            </div>
        </div>

    )
}

export default Signup