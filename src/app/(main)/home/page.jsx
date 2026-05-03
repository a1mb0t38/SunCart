import React from 'react';

import Banner from '@/components/shared/Banner';
import { getProducts } from '@/lib/data';
import ProductCard from '@/components/shared/ProductCard';
import Link from 'next/link';

const HomePage = async () => {

    const products = await getProducts()
    console.log(products, "products");

    return (
        <div>
            <Banner></Banner>
            <div className='flex items-center justify-between container mx-auto mt-6'>
                    <div></div>
                    <div className='text-yellow-700'>
                        <Link href={'/products'}>All Product</Link>
                    </div>
                </div>
            <main className='container mx-auto flex flex-col md:flex-row items-center justify-evenly mt-6'>
                
                {
                    products.slice(0,3).map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })
                }
            </main>
        </div>
    );
};

export default HomePage;