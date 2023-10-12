import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/ContextProvider';


const ErrorPage = () => {
    const {user} = useContext(AuthContext);
    return (
      <div className="text-center mt-60 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-red-800 sm:text-9xl dark:text-white">
          404
        </h1>
        <h1 className="block text-2xl font-bold text-white"></h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find your page.
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            {
                user ?  <Link to='/' className='btn bg-emerald-400 text-white hover:bg-emerald-600'>Go Home</Link>
                :
                <Link to='/login' className='btn bg-emerald-400 text-white hover:bg-emerald-600'>Go Back</Link>

            }
         
        </div>
      </div>
    );
};

export default ErrorPage;