import React from 'react';
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
    return (
        <div id='about' className='py-32 -mt-[6rem]'>
            <div>
                <motion.div variants={textVariant()}>
                    <p className='section-subText'>Introduction</p>
                    <h3 className='section-headText'>About Me.</h3>
                </motion.div>
                
                <motion.p variants={fadeIn('', '', 0.1, 2)} className='text-lg leading-7'>
                    Hello! Interestingly, I got introduced to programming in my freshman year and since then I have been eager to explore and learn about the different fields in the world of computer science. <br />Currently, I am doing different projects to make myself stronger as a Full Stack Developer. <br />I love to accept challenges that will enhance my skills and facilitate me, to recognize and improve myself to grow.
                </motion.p>
            </div>

        </div>
    );
};

export default SectionWrapper(About, 'about');