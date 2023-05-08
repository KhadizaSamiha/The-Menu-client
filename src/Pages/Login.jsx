import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleGoogleSignIn= () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
           navigate('/')
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const handleGithubSignIn =() =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const user = result.user;
           navigate('/')
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-yellow-100">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-yellow-500">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Don't have an account? <Link to='/register'><button className='btn btn-link text-yellow-500'>Register</button></Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Google</button>
                            <button onClick={handleGithubSignIn} className='btn btn-outline btn-block btn-warning text-yellow-500'>Continue With Github</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;