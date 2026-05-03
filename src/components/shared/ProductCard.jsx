import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="card bg-white w-96 shadow-md">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className='border border-yellow-500 text-black cursor-pointer px-3.5 py-2 rounded-md font-semibold'>{product.brand}</h2>
                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className='flex justify-between items-center'>
                    <p>Price: $15</p>
                    <p className='text-right pr-2'>Rating: 4.7</p>
                </div>
                <p>In Stoke: 90</p>
                <div className="card-actions justify-end">
                    <button className="btn text-yellow-800 bg-amber-500/70">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;