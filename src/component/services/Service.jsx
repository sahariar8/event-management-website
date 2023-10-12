import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/ContextProvider';

const Service = ({service}) => {
    const {user} = useContext(AuthContext);
    const {id,image,service_name,price,short_desc} = service;
    return (
        <div className='max-w-screen-xl mx-auto pt-20' data-aos="zoom-in">
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-emerald-400">
                {service_name}
              </h2>
              <p className="dark:text-gray-100 text-base">
                {short_desc.slice(0,92)}
              </p>
            </div>
            <div>
                <p>{price}</p>
            </div>
            {
                user ? <>
                            <Link to={`/details/${id}`}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-emerald-400 text-white"
                                        >
                                        Show Details
                                    </button>
                            </Link>
                
                        </>
                        :
                        <>
                            <Link to="/login">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-emerald-400 text-white"
                                        >
                                         Show Details
                                    </button>
                            </Link>
                        </>
            }
          </div>
        </div>
        </div>
    );
};

export default Service;