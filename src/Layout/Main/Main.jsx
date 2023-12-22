import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Main = () => {
    const [open, setOpen]=useState(false)
    const handleOpen = () => {
        setOpen(!open)
      }
    return (
        <div className='font-poppins'>
            {/* For sidebar */}
            <span onClick={handleOpen} className="text-color2 text-3xl  p-1 fixed md:hidden top-2 z-40 left-2">
                {
                open?<RxCross2 />:<MdOutlineMenu />
                }
            </span>
            <div className={`fixed top-0 left-0  z-20 md:hidden transition-transform duration-700 ease-in-out ${open ? 'translate-x-0':'-translate-x-full'}`}>        
                <Sidebar handleOpen={handleOpen}></Sidebar>
            </div>
            <nav className='w-full h-16 hidden md:block bg-bg1 z-20 fixed top-0 left-0'>
                <Navbar/>
            </nav>

            <section className='md:mt-16'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Main;