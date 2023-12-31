import React from 'react';
import { initial } from '../assets/index';
import { navlinks } from '../constants/constants';

const Navbar = () => {
    return (
        <div className='sticky top-0 flex justify-between items-center bg-gradient-to-b from-[#1d3352] ... px-48 z-10'>
            <a href='#hero'><img src={initial} alt="LR" className='w-28' /></a>
            <ul className='flex gap-14'>
                {
                    navlinks.map(nav => 
                        <li 
                        key={nav.id}
                        className='hover:text-amber-200 text-lg tracking-wider font-bold leading-loose uppercase cursor-pointer py-6 nav-links'>
                            <a href={`#${nav.id}`} className=''>{nav.title}</a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Navbar;