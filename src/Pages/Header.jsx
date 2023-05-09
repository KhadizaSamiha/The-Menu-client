import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle, FaUser, FaUserSlash } from 'react-icons/fa';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))

    }
    return (
        <div className=' h-24 container mx-auto px-24'>
            <div className='flex justify-between p-5'>
                <div className='flex'>
                    <img className='h-16 w-16' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1683480632~exp=1683481232~hmac=73f2a5dad1a300f5d6eeda5a2a0c13f9def7ae512f15f563597fdd1937b9bcbe" alt="" />
                    <h1 className='text-3xl font-bold text-yellow-500 pt-3 '>The Menu</h1>
                </div>

                <div className='space-x-8 py-2 text-yellow-500 font-semibold flex'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <div className='tooltip ' data-tip={user?.displayName
                    }>
                        {user ? <img className='h-16 w-16 rounded-full' src={user?.photoURL} alt="" />
                            : <Link to='/login'><button className='btn btn-outline btn-warning'> <FaUser />Login</button></Link>}

                    </div>
                    {
                        // user && <button className='btn btn-circle '><FaUserCircle /></button>
                        user && <button className="btn btn-outline btn-warning" onClick={handleLogOut}><FaUserSlash />LogOut</button>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;