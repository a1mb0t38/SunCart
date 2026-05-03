import ProductCard from '@/components/shared/ProductCard';
import { getProducts } from '@/lib/data';
import React from 'react';

const ProductsPage = async () => {

    const products = await getProducts()

    return (
        <div>
           <main className='container mx-auto grid grid-cols-3 gap-4 mt-6'>
                
                {
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })
                }
            </main>
        </div>
    );
};

export default ProductsPage;