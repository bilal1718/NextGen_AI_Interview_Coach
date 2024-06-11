import React from 'react';

const CallToAction = () => {
  return (
    <div className="relative mx-auto w-full mt-20 mb-20">
    <div
      className="rounded-xl p-4 bg-blue-600"
    >
      <div className="rounded-lg bg-blue-500 backdrop-blur">
        <div className="flex w-full flex-wrap
        items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
          <div className="lg:max-w-xl">
            <h2 className="block w-full pb-2 text-white font-bold text-4xl sm:text-4xl">
              Enhancing Productivity with Artificial Intelligence
            </h2>
            <p className="my-4 font-medium leading-relaxed tracking-wide
             text-white">
              Natural Language Processing (NLP): The SmartAI Assistant understands
              and interprets natural language commands, allowing users to
              communicate with it effortlessly.
            </p>
          </div>
          <div>
            <button className="bg-black
             text-white button-text flex items-center justify-center
              whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-lg
               sm:text-sm">
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
