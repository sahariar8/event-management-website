import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
      <div>
        <h1 className="text-2xl text-center font-bold md:text-7xl pb-5 pt-20">
          Our <span className="text-emerald-400">Services</span>
        </h1>
        <h1 className="text-xl text-center font-bold md:text-2xl pb-5">
          It’s simple. You have an event to plan and we have{" "}
          <span className="text-emerald-400">the solutions</span>
          <div className='max-w-screen-xl mx-auto grid md:grid-cols-3'>
            {
                services.map(service=><Service service={service} key={service.id}></Service>)
            }
          </div>
        </h1>
      </div>
    );
};

export default Services;