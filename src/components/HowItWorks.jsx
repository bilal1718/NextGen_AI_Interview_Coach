import React from 'react';

const steps = [
  {
    title: "Sign Up",
    description: "Create an account using your email or social media.",
    icon: "👤"
  },
  {
    title: "Complete Profile",
    description: "Fill in your personal and professional details.",
    icon: "📄"
  },
  {
    title: "Get Matched",
    description: "We match you with suitable job opportunities.",
    icon: "🔍"
  },
  {
    title: "Interview",
    description: "Schedule and attend interviews with employers.",
    icon: "🗓️"
  },
  {
    title: "Get Hired",
    description: "Receive job offers and start your new career.",
    icon: "🎉"
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl">
            Our Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow these simple steps to start your journey with us.
          </p>
        </div>
        <div className="mt-10 flex space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-shrink-0 w-64 ">
              <div className="absolute inset-y-0 left-1/2 w-1/2 border-b-4 border-indigo-600 transform -translate-x-1/2"></div>
              <div className="relative flex items-center justify-center bg-indigo-600 w-12 h-12 rounded-full text-white mx-auto mb-4">
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
