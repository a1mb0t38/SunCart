"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TbSunHigh } from 'react-icons/tb';

const UpdateProfile = () => {

     const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

    const handleUpdate = async (data) =>{
        // console.log(data, "data from update")
        const {name, photo} = data;

       await authClient.updateUser({
        name: name,
        image: photo,
        callbackURL: "/profile",
       })
    }

    return (
        <div className='min-h-[calc(100vh-100px)] flex items-center justify-center bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10 overflow-hidden'>
            <div className='w-full space-y-4 max-w-md mx-auto rounded-md bg-white shadow-md p-9'>
                <div className='flex items-center justify-center'>
                    <TbSunHigh className='text-4xl font-light rounded-full bg-yellow-500/70 w-16 h-16 p-4' />
                </div>
                <h1 className='text-center text-3xl font-semibold text-yellow-500/70'>SunCart</h1>
              
                
                <hr className='text-gray-300' />
                <div>
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="enter your name" {...register("name", { required: "name is required" })} />
                            
                        </fieldset>

                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend">Photo</legend>
                            <input type="text" className="input w-full" placeholder="Enter Your Photo url" {...register("photo", { required: "Must put your photo" })} />
                           
                           
                        </fieldset>
                        <button className='btn w-full mt-3.5 bg-amber-500/70 font-semibold'>Update profile</button>
                    </form>
                    {/* <ToastContainer></ToastContainer> */}
                    
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;