
import { getProducts } from '@/lib/data';
import Image from 'next/image';
import React from 'react';




const ProductsDetails = async ({ params }) => {

    const { id } = await params;
    const productId = parseInt(id);
    // console.log(id, "id of the card")
    const products = await getProducts();
    // console.log(detials, "details")
    const product = products.find(p => p.id === productId);
    // console.log(product, "product")



    return (
        <div className='bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10'>
            <div className='container mx-auto flex flex-col md:flex-row items-center gap-9 mt-4 shadow-[0_4px_20px_rgba(252,191,36,0.3)] p-9 mb-9'>
                <div className='space-y-3'>
                    <div>
                        <Image className='rounded-2xl' src={product.image} alt={product.name} width={600} height={800}></Image>
                    </div>
                    <button className='border border-yellow-500 text-black cursor-pointer px-3.5 py-2 rounded-md font-semibold'>{product.brand}</button>
                </div>
                <div className='space-y-3 bg-white w-2/5 h-2/5 p-6 rounded-md shadow-[0_4px_20px_rgba(252,191,36,0.3)] w-full'>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>price: ${product.price}</p>
                    <button className='btn bg-yellow-500/70 text-yellow-800'>Buy Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default ProductsDetails;