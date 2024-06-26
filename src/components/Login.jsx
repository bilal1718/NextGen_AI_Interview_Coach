import React, { useState } from 'react';
import banner4 from "../images/banner4.jpeg";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { auth } from "../config/firebase-config";
import { signInWithCustomToken } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
            console.log('Custom token:', response.data.token);
            // Sign in with the custom token
            await signInWithCustomToken(auth, response.data.token);
            console.log('User logged in successfully');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.error('User not found. Please check your email.');
            } else if (error.response && error.response.status === 401) {
                console.error('Incorrect password. Please try again.');
            } else {
                console.error('Error logging in:', error.message);
            }
        }
    };

    return (
        <div className="flex flex-wrap min-h-screen">
            <div className="flex w-full flex-col md:w-1/2 p-6">
                <div className="lg:w-[30rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                    <p className="text-center text-5xl font-extrabold text-blue-700 mb-2">Welcome Back</p>
                    <p className="mb-8 text-center text-gray-500">Log in to your account to continue.</p>
                    
                    <button className="mt-4 flex items-center justify-center rounded-md border px-4 py-2 text-base font-semibold text-gray-800 bg-white shadow-md transition hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                        <FcGoogle className="mr-2 h-6 w-6" />
                        Log in with Google
                    </button>
                    
                    <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                        <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                            or
                        </div>
                    </div>
                    
                    <div className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                                <input
                                    type="email"
                                    id="login-email"
                                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pt-4 mb-2">
                            <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                                <input
                                    type="password"
                                    id="login-password"
                                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-2 mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                <span className="ml-2 text-gray-700">Remember Me</span>
                            </label>
                            <Link to="/forgot-password" className="text-md text-blue-800 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                        <button
                            onClick={handleLogin}
                            className="w-full rounded-lg bg-blue-800 px-4 py-4 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                        >
                            LOG IN
                        </button>
                    </div>
                    
                    <div className="py-12 text-center">
                        <p className="whitespace-nowrap text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="underline-offset-4 font-semibold text-blue-800 underline"
                            >
                                Sign up for free.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                <img
                    className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
                    src={banner4}
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Login;
