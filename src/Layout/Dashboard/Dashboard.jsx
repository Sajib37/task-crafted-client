import React from 'react';
import Aside from './Aside/Aside';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='font-poppins flex'>
            <Aside></Aside>
            <div className='w-72 hidden lg:block'></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;