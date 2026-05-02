import ProfileCard from '@/components/shared/ProfileCard';

import React from 'react';

const ProfilePage = () => {


    return (
        <div className='min-h-[calc(100vh-100px)] flex items-center justify-center bg-linear-to-tr from-blue-700/10 via-transparent to-yellow-700/10 overflow-hidden'>
            <ProfileCard></ProfileCard>
        </div>
    );
};

export default ProfilePage;