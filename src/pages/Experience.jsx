import React from 'react';
import { motion } from "framer-motion"
import { experiences } from '../constants/constants';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { download, docs } from '../assets';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: 'linear-gradient(90deg, rgba(120,40,80,1) 0%, rgba(0,0,40,1) 100%)',
            color: '#f0f0f0',
            boxShadow:
                '0px 2px 100px 2px #28283d',
            borderRadius: '20px'
        }}
        contentArrowStyle={{
            borderRight: '6px solid #782850',
        }}
        date={
            <div>
                <h3 className="text-lightGrey text-lg font-bold">
                    {experience.date}
                </h3>
            </div>
        }
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="w-full h-full flex justify-center items-center">
                <img
                src={experience.icon}
                alt={experience.company_name}
                />
            </div>
        }>
        <div>
            <h3 className="text-2xl font-bold tracking-widest mb-2">
                {experience.title}
            </h3>
            <p
                className="text-lightGrey" style={{ margin: 0 }}>
                {experience.company_name}
            </p>
        </div>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <div id='experience' className='py-32 -mt-[6rem]'>
            <motion.div variants={textVariant()}>
                <p className='section-subText'>What I've done so far</p>
                <h3 className='section-headText'>Experience.</h3>
            </motion.div>

            <div className="flex flex-col mt-14">
                <VerticalTimeline className="vertical-timeline-custom-line">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
                    <VerticalTimelineElement
                        contentStyle={{
                            background: 'linear-gradient(90deg, rgba(120,40,80,1) 0%, rgba(0,0,40,1) 100%)',
                            color: '#f0f0f0',
                            boxShadow:
                                '0px 2px 100px 2px #28283d',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        contentArrowStyle={{
                            borderRight: '6px solid #782850',
                        }}
                        iconStyle={{ background: '#f0f0f0' }}
                        icon={
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                src={docs}
                                alt="docs"
                                className="w-2/5"
                                />
                            </div>
                        }>
                        <button
                        className="flex justify-between items-center bg-whiteSmoke hover:bg-slate-300 text-[#000050] text-lg font-bold rounded-xl px-5 py-3 transition duration-500 ease-in-out"
                        onClick={() =>
                            window.open(
                            'resume link', //paste the link to your resume here
                            '_blank'
                            )
                        }
                        onMouseOver={() => {
                            document
                            .querySelector('.download-btn')
                            .setAttribute('src', downloadHover);
                        }}
                        onMouseOut={() => {
                            document
                            .querySelector('.download-btn')
                            .setAttribute('src', download);
                        }}>
                        MY RESUME
                        <img
                            src={download}
                            alt="download"
                            className="w-8"
                        />
                        </button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, 'experience');

// rgba(0, 0, 0, 0.3) 4px 10px 15px 3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px