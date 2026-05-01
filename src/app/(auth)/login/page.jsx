"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { HiOutlineSun } from 'react-icons/hi';
import { LiaSunSolid } from 'react-icons/lia';
import { TbSunHigh } from 'react-icons/tb';


const LoginPage = () => {

    const [isShowPassword, setisShowPassword] = useState(false)

    return (
        <div className='min-h-screen bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10 overflow-hidden'>
            <div className='relative z-10 space-y-4 max-w-md mx-auto top-32 rounded-md bg-white shadow-sm p-9'>
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
                    <form>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" className="input w-full" placeholder="Enter Your Email" />
                            
                        </fieldset>

                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend">Password</legend>
                            <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Enter Your Password" />
                            <span className='absolute right-1 top-4 mr-2 cursor-pointer' onClick={()=>setisShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </fieldset>
                        <button className='btn w-full mt-3.5 bg-amber-500/70 font-semibold'>SignIn</button>
                    </form>
                    <p className='mt-3.5 text-center'>Don't have an account <Link className='text-yellow-500/70' href={'/register'}>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;