import React from 'react';
import banner1 from "../images/1.webp";

const Home = () => {
  return (
    <section className="dark:bg-blue-800 dark:text-white bg-blue-800 h-screen">
      <div className="container flex flex-col justify-center p-6 mx-auto
       sm:py-12 lg:py-24 lg:flex-row lg:justify-between bg-blue-800 mt-40">
        <div className="flex flex-col text-white
        justify-center p-10 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-6xl font-bold leading-none tracking-wide sm:text-7xl">AI Powered Interview Mastery
          </h1>
          <p className="mt-6 mb-8 text-gray-400 text-lg sm:mb-12">Personalized Coaching for Interview Success
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a className="bg-red-500 justify-center text-lg font-medium
               text-center rounded-lg shadow px-10 py-3 flex items-center">
                Try for Free
              </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 lg:mt-0 h-96 sm:h-128 lg:h-160 xl:h-176 2xl:h-192">
          <img src={banner1} alt="" className="object-contain h-128 sm:h-128 lg:h-160 xl:h-176 2xl:h-192" />
        </div>
      </div>
    </section>
  );
}

export default Home;
