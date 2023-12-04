import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id='hero' className='h-screen bg-hero-pattern bg-cover text-center text-4xl font-bold py-60'>
            <h1>Hello, I'm</h1>
            <h1 className='first-letter:text-8xl text-[#62FBD8]'>Lamisa Ferdous Ritu</h1>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div
                    className="w-[35px] h-[64px] rounded-3xl border-4 
                     border-white flex
                    justify-center items-start p-2">
                    <motion.div
                        animate={{
                        y: [0, 24, 0],
                        }}
                        transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        }}
                        className="w-3 h-3 rounded-full bg-white mb-1"
                    />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Hero;