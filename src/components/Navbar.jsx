import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import initial from '../assets/images/LR-removebg-preview.png';
import { navlinks } from '../constants/constants';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 flex justify-between items-center bg-gradient-to-b from-[#1d3352] ... px-48'>
            <Link><img src={initial} alt="LR" className='w-28' /></Link>
            <ul className='flex gap-14'>
                {
                    navlinks.map(nav => 
                        <li 
                        key={nav.id}
                        className='hover:text-amber-200 text-lg tracking-wider font-bold leading-loose uppercase cursor-pointer py-6 nav-links'>
                            <NavLink className=''>{nav.title}</NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Navbar;