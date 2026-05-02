"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbSunHigh } from 'react-icons/tb';
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {

    const [isShowPassword, setisShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handleLoginFunc = async (data) =>{
        // console.log(data, "data")
        const {data:res, error} = await authClient.signIn.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: '/',
        })

         if(error){
            toast.error(error.message);
        }
        if(res){
            alert("Wellcome to our news site")
        }
    }

    return (
        <div className='min-h-[calc(100vh-100px)] flex items-center justify-center bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10 overflow-hidden'>
            <div className='w-full space-y-4 max-w-md mx-auto rounded-md bg-white shadow-md p-9'>
                <div className='flex items-center justify-center'>
                    <TbSunHigh className='text-4xl font-light rounded-full bg-yellow-500/70 w-16 h-16 p-4' />
                </div>
                <h1 className='text-center text-3xl font-semibold text-yellow-500/70'>SunCart</h1>
                <p className='text-center text-base text-gray-800'>Login to your account</p>
                <div className='flex items-center justify-center'>
                <button className='btn border border-blue-500 text-blue-500'>Continue With Google</button>
                </div>
                <hr className='text-gray-300' />
                <div>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" className="input w-full" placeholder="Enter Your Email" {...register("email",{ required: "Email is required" })} />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend">Password</legend>
                            <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Enter Your Password" {...register("password",{ required: "Must put your password" })} />
                            <span className='absolute right-1 top-4 mr-2 cursor-pointer' onClick={()=>setisShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </fieldset>
                        <button className='btn w-full mt-3.5 bg-amber-500/70 font-semibold'>SignIn</button>
                    </form>
                    <ToastContainer></ToastContainer>
                    <p className='mt-3.5 text-center'>Don't have an account <Link className='text-yellow-500/70' href={'/register'}>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;