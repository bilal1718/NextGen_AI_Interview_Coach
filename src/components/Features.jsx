import React from 'react';

const features = [
  {
    title: "Smart Matching",
    description: "Our system matches you with the best job opportunities based on your skills and experience.",
    icon: "🔍"
  },
  {
    title: "Interview Scheduling",
    description: "Easily schedule interviews with potential employers directly through our platform.",
    icon: "🗓️"
  },
  {
    title: "Feedback Collection",
    description: "Receive constructive feedback from your interviews to help you improve and succeed.",
    icon: "💬"
  },
  {
    title: "Profile Boosting",
    description: "Boost your profile visibility to top employers and get noticed faster.",
    icon: "🚀"
  },
  {
    title: "Real-Time Notifications",
    description: "Stay updated with real-time notifications about your job applications and interview status.",
    icon: "🔔"
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black sm:text-5xl">
            Why Choose Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the features that make our platform stand out.
          </p>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li key={index} className="col-span-1 bg-white rounded-lg shadow p-6">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
