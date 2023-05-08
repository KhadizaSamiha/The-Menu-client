import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(result=>{})
        .catch(error=>console.log(error))

    }
    return (
        <div className=' h-24 container mx-auto px-24'>
            <div className='flex justify-between p-5'>
                <div className='flex'>
                    <img className='h-16 w-16' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1683480632~exp=1683481232~hmac=73f2a5dad1a300f5d6eeda5a2a0c13f9def7ae512f15f563597fdd1937b9bcbe" alt="" />
                    <h1 className='text-3xl text-yellow-500 pt-3 '>The Menu</h1>
                </div>
                <div className='space-x-8 pt-3 text-yellow-500 font-semibold'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/login'>Login</Link>
                    {user ? <button className="btn btn-outline" onClick={handleLogOut}>LogOut</button> : <button className='btn btn-outline'>Login</button>}
                </div>
            </div>
        </div>
    );
};

export default Header;