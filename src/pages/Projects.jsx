import React from 'react';
import { projects } from '../constants/constants';
import { motion } from "framer-motion"
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ index, name, image }) => {
    return (
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="bg-nobel xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={image} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    );
  };

const Projects = () => {
    return (
        <div id='projects' className='py-32'>
            <motion.div variants={textVariant()}>
                <p className='section-subText'>Case Studies</p>
                <h3 className='section-headText'>Projects.</h3>
            </motion.div>

            <div className="mt-20 flex gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, 'projects');