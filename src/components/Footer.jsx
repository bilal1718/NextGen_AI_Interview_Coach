import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function MyFooter() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-blue-800">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">How can we help you. get in touch</h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-white font-normal">
            Empowering you to ace interviews with AI-driven coaching. Elevate your career with our innovative interview preparation platform.
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <a className="bg-red-500 justify-center text-lg font-medium
               text-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact US
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <a className="hidden text-xl font-semibold md:block cursor-pointer text-white uppercase">
                About
              </a>
              <a className="hidden text-xl font-semibold  md:block cursor-pointer text-white uppercase">
                Features
              </a>
              <a className="hidden text-xl font-semibold  md:block cursor-pointer text-white uppercase">
                Why us
              </a>
              <a className="hidden text-xl font-semibold  md:block cursor-pointer text-white uppercase">
                Contact
              </a>
              <div className="flex flex-row space-x-8 items-center text-2xl justify-between">
                <a href="https://github.com/bilal1718" target="_blank"
                 rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://twitter.com/bilal1718" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/muhammad-bilal-61bb43266/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <hr className="border-white" />
            <p className="w-full text-center my-12 text-white">
              Copyright © 2024 NEXTGEN AI Interview Coach
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
