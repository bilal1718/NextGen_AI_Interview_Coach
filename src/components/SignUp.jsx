import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import banner3 from "../images/banner3.jpeg";
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="flex w-full flex-col md:w-1/2 p-6">
        <div className="lg:w-[30rem] mx-auto my-auto flex flex-col justify-center pt-2 md:justify-start md:px-6 md:pt-0">
          <p className="text-center text-5xl font-extrabold text-blue-700 mb-2">Start Your Journey</p>
          <p className="mb-8 text-center text-gray-500">Please enter your details to sign up.</p>

          <button className="mt-4 flex items-center justify-center rounded-md border px-4 py-2 text-base font-semibold text-gray-800 bg-white shadow-md transition hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
            <FcGoogle className="mr-2 h-6 w-6" />
            Continue with Google
          </button>

          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-md text-gray-500">
              or
            </div>
          </div>

          <form className="flex flex-col pt-3 md:pt-4">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                <input
                  type="email"
                  id="email"
                  className="w-full flex-1
                   appearance-none border-gray-300 bg-white px-4 py-4
                    text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                <input
                  type="text"
                  id="username"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex
               overflow-hidden border-b-2 transition focus-within:border-gray-500">
                <input
                  type="text"
                  id="first-name"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                <input
                  type="text"
                  id="second-name"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Second Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-gray-500">
                <input
                  type="password"
                  id="password"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-800 px-4 py-4 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              SIGN UP
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-blue-800 underline underline-offset-4"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src={banner3}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default SignUp;
