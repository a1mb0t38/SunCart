import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10'>
            <div className='space-y-3'>
                <h2>Page Not Found 404</h2>
                <button className='btn text-yellow-800 bg-amber-500/70'><Link href={'/home'}>Go to Home page</Link></button>
            </div>
        </div>
    );
};

export default NotFoundPage;