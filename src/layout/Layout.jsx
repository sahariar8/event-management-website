import React from 'react';
import Navbar from '../component/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;