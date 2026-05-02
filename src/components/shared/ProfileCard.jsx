"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Img from '@/assets/user.png';

const ProfileCard = () => {

   
     const {data:session} = authClient.useSession()
    const user = session?.user;

    return (
        <div className='w-full max-w-[400vh] flex items-center justify-center gap-8 p-9'>
                <div className='flex flex-col items-center bg-white shadow-md p-3 rounded-sm p-3'>
                    <Image src={user?.image || Img} alt='user photo' width={400} height={400}></Image>
                    <p>{user?.name}</p>
                </div>
                <div className='space-y-2 bg-white shadow-md p-3 rounded-sm max-w-[100vh] h-[50vh] w-full p-9'>
                    <h1 className='font-bold text-4xl'>Personal Details</h1>
                    <p className='font-semibold text-2xl'>Full Name:</p>
                    <div className='bg-gray-100 rounded-md shadow-md p-2'>
                        <p className='text-base'>{user?.name}</p>
                    </div>
                    <p className='font-semibold text-2xl'>Email Address:</p>
                    <div className='bg-gray-100 shadow-md p-2'>
                        <p className='text-base'>{user?.email}</p>
                    </div>
                    <p className='font-semibold text-2xl'>ID:</p>
                    <div className='bg-gray-100 shadow-md p-2'>
                        <p className='text-base'>{user?.id}</p>
                    </div>
                    <button className='btn text-yellow-800 bg-amber-500/70 mt-3.5'><Link href={'/profile/update'}>Update Profile</Link></button>
                </div>
            </div>
    );
};

export default ProfileCard;