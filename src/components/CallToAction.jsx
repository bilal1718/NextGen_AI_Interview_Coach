import React from 'react';

const CallToAction = () => {
  return (
    <div className="relative w-full mb-20">
      <div className="p-12 bg-blue-800 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center
           justify-center gap-16 px-8 py-10 sm:px-16">
            <div className="lg:max-w-xl text-center lg:text-left">
              <h2 className="w-full pb-2 text-white font-semibold text-6xl sm:text-6xl">
              Enhance Your Interview Skills with AI Coaching
              </h2>
              <p className="my-4 font-medium leading-relaxed tracking-wide text-gray-400">
                Sign up now for personalized AI coaching and ace your next job interview effortlessly.
              </p>
            </div>
            <div>
              <button className="bg-red-500 text-white
               text-lg font-medium text-center rounded-lg shadow px-12 py-3 flex items-center justify-center">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
