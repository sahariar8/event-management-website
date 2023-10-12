import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const details = useLoaderData([]);
    console.log(details)
    
    const value = details.find(detail=> detail.id == id);
    console.log(value)
    const { image,service_name,title1,title2,price,short_desc,long_desc1,long_desc2 } = value;

    return (
        <div className='max-w-screen-xl mx-auto py-10 rounded-lg'>
            <img src={image} alt=""  className='w-full'/>
            <div className='bg-emerald-50 p-10 shadow-lg'>
                <h1 className='text-2xl md:text-7xl text-center py-5 font-semibold text-emerald-400'>{service_name}</h1>
                <div className='flex justify-end py-3'>
                    <h3 className='mr-10 px-10 text-2xl block bg-emerald-400 font-bold text-white py-2'>{price}</h3>
                </div>
                <h1 className='text-xl md:text-3xl font-bold text-slate-600 pt-5'>{title1}</h1>
                <p className='text-sm pt-5'>{long_desc1}</p>
                <h1 className='text-xl md:text-3xl font-bold text-slate-600 pt-5'>{title2}</h1>
                <p className='text-sm pt-5'>{long_desc2}</p> 
                <div className='pt-12'>
                    <Link to='/'><button className='block mx-auto px-4 bg-emerald-400 py-2 font-bold text-white'>Go Home</button></Link>
                </div>
            </div> 
        </div>
    );
};

export default Details;