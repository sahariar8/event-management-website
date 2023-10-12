import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai'
import { LuMessagesSquare } from 'react-icons/lu'
import { FaFilePen } from 'react-icons/fa6'
import { GiPartyPopper } from 'react-icons/gi'

const Stepper = () => {
    return (
      <div className="max-w-screen-xl mx-auto text-center pt-16">
                <div>
                <h1 className="text-2xl md:text-5xl font-semibold">
                    <span className="text-emerald-400">Hello! </span> We Are an Event
                    Management Agency
                </h1>
                <h3 className="text-sm font-semibold text-slate-500 py-6 w-2/3 mx-auto">
                    Event management is the process of planning, organizing, executing,
                    and evaluating events of various types and sizes. This field
                    encompasses a wide range of events, from small private gatherings to
                    large-scale conferences, concerts, weddings, and corporate
                    functions. 
                </h3>
                </div>
                <div className='grid md:grid-cols-4 pt-16 shadow-lg py-6'>
                    
                <div>
                    <div className='flex justify-center'>
                    <h1><AiTwotoneHome className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Find the Perfect Venue For Free</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>1</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><LuMessagesSquare className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Connect With the Best Vendors</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>2</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><FaFilePen className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Let us help you with the Event</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>3</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                    <h1><GiPartyPopper className='text-7xl text-emerald-400 mb-2'/></h1>
                    </div>
                    <h1 className='text-center text-lg font-semibold text-slate-600'>Enjoy the Party With Your Friends</h1>
                    <p className='text-center bg-emerald-400 rounded-full block w-[25px] text-white mx-auto mt-3'>4</p>
                </div>
                
                    
            </div>
       </div>
    );
};

export default Stepper;