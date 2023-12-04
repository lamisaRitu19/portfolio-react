import React from 'react';
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Skills = () => {
    return (
        <div id='skills' className='py-32'>
            <motion.div variants={textVariant()}>
                <p className='section-subText'>My Skills</p>
                <h3 className='section-headText'>Technologies.</h3>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Skills, 'skills');