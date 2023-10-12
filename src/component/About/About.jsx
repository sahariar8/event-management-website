import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai'
import { LuMessagesSquare } from 'react-icons/lu'
import { FaFilePen } from 'react-icons/fa6'
import { GiPartyPopper } from 'react-icons/gi'
import Staff from '../Home/Staff';
import Stepper from '../Home/Stepper';
import Hero from './Hero';

const About = () => {
   
    
        return (
          <div className="max-w-screen-xl mx-auto text-center pt-16">
            <h1 className='text-7xl font-bold text-slate-600 mb-3'>About <span className='text-emerald-400'>US</span></h1>
            <Hero></Hero>
            <Staff></Staff>
            <div className='my-10'>
            <Stepper></Stepper>
            </div>
            
          </div>
        );

};

export default About;