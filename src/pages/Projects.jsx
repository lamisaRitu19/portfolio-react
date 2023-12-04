import React from 'react';
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Projects = () => {
    return (
        <div id='projects' className='py-32'>
            <motion.div variants={textVariant()}>
                <p className='section-subText'>Case Studies</p>
                <h3 className='section-headText'>Projects.</h3>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Projects, 'projects');