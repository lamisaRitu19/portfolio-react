import React from 'react';
import { motion } from "framer-motion"
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { mail } from '../assets/index';

const Contact = () => {
    return (
        <div id='contact' className='w-2/3 py-32 -mt-[6rem] overflow-hidden'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='bg-black rounded-2xl bg-gradient-to-r from-flirt to-russian p-2'>
                <div className='bg-black rounded-2xl px-8 py-10'>
                    <p className='section-subText'>Get In Touch</p>
                    <h3 className='section-headText'>Contact.</h3>
                    
                    <form action="">
                        <label htmlFor="" className='form-label'>Your Name</label><br />
                        <input type="text" name="" id="" placeholder="What's your name?" className='form-input' />
                        <label htmlFor="" className='form-label'>Your Email</label><br />
                        <input type="text" name="" id="" placeholder="What's your email?" className='form-input' />
                        <label htmlFor="" className='form-label'>Your Message</label><br />
                        <textarea name="" id="" cols="30" rows="6" placeholder="What's your message?" className='form-input resize-none'></textarea>
                        <button className='bg-[#0a1130] hover:bg-[#38405f] text-lg font-semibold uppercase rounded-lg transition duration-700 ease-in-out px-6 py-3'>Send <img src={mail} alt="" className='inline w-6 ml-2' /></button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');