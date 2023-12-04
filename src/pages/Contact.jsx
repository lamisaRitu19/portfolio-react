import React from 'react';
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import mail from '../assets/images/mail.png';

const Contact = () => {
    return (
        <div id='contact' className='w-2/3 py-32 mx-auto -mt-[6rem]'>
            <div className='bg-[#1d3352] rounded-2xl px-8 py-10'>
                <motion.div variants={textVariant()}>
                    <p className='section-subText'>Get In Touch</p>
                    <h3 className='section-headText'>Contact.</h3>
                </motion.div>
                
                
                <form action="">
                    <label htmlFor="" className='form-label'>Your Name</label><br />
                    <input type="text" name="" id="" placeholder="What's your name?" className='form-input' />
                    <label htmlFor="" className='form-label'>Your Email</label><br />
                    <input type="text" name="" id="" placeholder="What's your email?" className='form-input' />
                    <label htmlFor="" className='form-label'>Your Message</label><br />
                    <textarea name="" id="" cols="30" rows="6" placeholder="What's your message?" className='form-input resize-none'></textarea>
                    <button className='bg-[#0a1130] text-lg font-semibold uppercase rounded-lg px-6 py-3'>Send <img src={mail} alt="" className='inline w-6 ml-2' /></button>
                </form>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');