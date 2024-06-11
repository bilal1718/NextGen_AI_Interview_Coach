import { QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Personalized Interview Questions',
    description:
      'Receive tailored interview questions based on your profile and job role to ensure relevant and effective preparation.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Real-time Feedback',
    description:
      'Get instant feedback and improvement suggestions after each practice session to enhance your performance.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Performance Analytics',
    description:
      'Track your progress with detailed analytics and performance reports to identify strengths and areas for improvement.',
    icon: ChartBarIcon,
  },
  {
    name: 'Interactive AI Avatar',
    description:
      'Engage with a lifelike AI avatar for a realistic interview experience that boosts your confidence and readiness.',
    icon: UserCircleIcon,
  },
];

export default function Features() {
  return (
    <div id='features' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h1 className="text-center text-blue-700 text-6xl font-bold mb-4 mt-10">
            EXPLORE OUR <span className='text-black text-6xl underline-offset-4'>FEATURES</span>
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.name} 
              className="relative flex flex-col bg-white rounded-lg shadow-md p-10 mb-12 mr-12">
                <dt className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="ml-4 text-2xl font-bold leading-7 text-blue-700">{feature.name}</p>
                </dt>
                <dd className="mt-6 text-lg leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
