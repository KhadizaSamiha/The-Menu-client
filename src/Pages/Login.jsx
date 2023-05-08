import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-yellow-100">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-yellow-500">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Don't have an account? <Link to='/register'><button className='btn btn-link text-yellow-500'>Register</button></Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <button className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Google</button>
                            <button className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;