import React from 'react';
import banner from '@/assets/banner.png';

const Banner = () => {
    return (
        <div
            className="hero container mx-auto rounded-lg min-h-1/3 mt-4 bg-white shadow-md"
            style={{
                backgroundImage: `url(${banner.src})`,
            }}
        >
            <div className="hero-overlay bg-black/40"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-white space-y-4">
                    <h1 className="mb-5 text-5xl font-bold">It's Time for Summer Vibe</h1>
                    <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                        Limited Time Offer
                    </p>
                    <h1 className='text-4xl font-bold '>
                        Summer Sale <br />
                        <span className='text-yellow-400'>Up to 50% oFF</span>
                    </h1>
                    <p className='text-base md:text-lg text-gray-200'>
                        Grab your summer essentials at unbeatable prices. <br />
                        Stay cool, Stay stylish
                    </p>
                    <button className="btn bg-amber-500/70">Shop Now</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;