import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../css/style.css'   
import { AuthContext } from '../../Provider/ContextProvider';
import Swal from 'sweetalert2';
import photo from '../../assets/user.png'

const Navbar = () => {

  const {user,userSignOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () =>{
    userSignOut()
    .then(()=>{
      Swal.fire(
        'Good job!',
        'LogOut Successfully',
        'success'
      )
      navigate('/login');
    })
    .catch((error)=>{
        console.log(error.message)
    })
  }
    const items =
             
                <div className='flex flex-col md:flex-row md:gap-4 text-lg font-semibold text-emerald-400'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {
                      user &&
                      <>
                          <NavLink to="/services">Services</NavLink>
                          <NavLink to="/gallery">Gallery</NavLink>
                      </>
                    }
                </div>
            
    
    
    return (
        <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {items}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-sm">
            <div >
            <h1 className='text-sm font-mono text-emerald-400'><span className='text-xl font-bold text-emerald-600'>Sk</span><p className='text-xsm'>creation</p></h1>
            {/* <p>We create,you <span className='text-emerald-400'>Celebrate</span></p> */}
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL? user.photoURL : photo} className='mr-4' />
                </div>
               
            </label>
            {
              user ? <>
                         <h1 className='md:font-bold text-emerald-500 text-sm md:text-base'>{user?.displayName ? user.displayName : ''}</h1>
                         <Link  className='bg-emerald-400 px-6 ml-3 py-2 text-white font-bold' onClick={handleLogOut}>LogOut</Link>
                     </>
              
              
                    :
                    <Link to='/login' className='bg-emerald-400 px-6 ml-3 py-2 text-white font-bold'>Login</Link>

            }
        </div>
      </div>
    );
};

export default Navbar;