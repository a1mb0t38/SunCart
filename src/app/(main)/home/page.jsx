import React from 'react';

import Banner from '@/components/shared/Banner';
import { getProducts } from '@/lib/data';
import ProductCard from '@/components/shared/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';

const HomePage = async () => {

    const products = await getProducts()


    return (
        <div className='animate__animated animate__backInUp'>
            <Banner></Banner>
            <div className='flex items-center justify-between container mx-auto mt-6'>
                <div></div>
                <div className='text-yellow-700'>
                    <Link href={'/products'}>All Product</Link>
                </div>
            </div>
            <main className='container mx-auto flex flex-col md:flex-row items-center justify-evenly mt-6'>

                {
                    products.slice(0, 3).map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })
                }
            </main>
            <div className='container mx-auto flex flex-col md:flex-row items-center gap-9 mt-4 shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-9 mb-9'>
                <div className='space-y-3'>
                    <div>
                        <Image className='rounded-2xl' src={'https://images.unsplash.com/photo-1556942040-df93bd3bdd19?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='beauti tips' width={400} height={400}></Image>
                    </div>
                    <button className='border border-yellow-500 text-black cursor-pointer px-3.5 py-2 rounded-md font-semibold'>Beauty tips</button>
                </div>
                <div className='space-y-2 bg-white shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-3 rounded-sm max-w-[100vh] h-[50vh] w-full p-9'>
                    <p className='font-semibold text-2xl'>Beauty Tips</p>
                    <div className='bg-white rounded-md shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-2'>
                        <ul className='space-y-1 p-1.5'>
                            <li>use sun screen cream</li>
                            <li>Reapply every 3/4 hours</li>
                            <li>Don't forget neck,ear and hand</li>
                        </ul>
                    </div>

                    <div className='bg-white shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-2'>
                        <ul className='space-y-1 p-1.5'>
                            <li>Drink 2/3 liters of water daily</li>
                            <li>Use lightweight cloths</li>
                            <li>spray water on you face</li>
                        </ul>
                    </div>

                    <div className='bg-white shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-2'>
                        <ul className='space-y-1 p-1.5'>
                            <li>Wash face daily 2x times</li>
                            <li>Use oil free products</li>
                            <li>Go for light makeup or no makeup </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HomePage;