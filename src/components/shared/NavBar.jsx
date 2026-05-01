import Image from 'next/image';
import React from 'react';
import Img from '@/assets/user.png';
import Link from 'next/link';
import { TbSunHigh } from 'react-icons/tb';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10 rounded-sm'>
            <div>
                <div className='flex items-center gap-3.5 p-4'>
                    <TbSunHigh className='text-4xl font-light rounded-full bg-yellow-500/70 w-16 h-16 p-4' />
                    <h1 className='text-2xl font-semibold text-yellow-500/70'><Link href={'/home'}>SunCart</Link></h1>
                </div>
            </div>
            <div>
                <ul className='flex items-center gap-3 text-yellow-700'>
                    <li><NavLink href={'/home'}>Home</NavLink></li>
                    <li><NavLink href={'/products'}>Products</NavLink></li>
                    <li><NavLink href={'/profile'}>Profile</NavLink></li>
                </ul>
            </div>
            <div className='flex items-center gap-3 p-4'>
                <span className='text-yellow-700'>Hello</span>
                <Image src={Img} alt='user image'></Image>
                <button className='btn text-yellow-800 bg-amber-500/70'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;