import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        setError('')

        if (password < 6) {
            setError('your password should be atleast 6 character')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-yellow-100">
            <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold text-yellow-500">Register Now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-red-600">{error}</p>
                            <p>Already have an account? <Link to='/login'><button className='btn btn-link text-yellow-500'>Login</button></Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Register</button>
                            </div>
                            <button className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Google</button>
                            <button className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Github</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;