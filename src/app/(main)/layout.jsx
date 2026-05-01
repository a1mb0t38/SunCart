import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;