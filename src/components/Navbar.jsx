import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaArrowRight } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { link: "Features", path: "features" },
    { link: "How It Works", path: "howitworks" },
    { link: "About", path: "about" },
    { link: "Login", path: "login" },
  ];

  return (
    <header className='w-full  bg-blue-800 md:bg-blue-800 fixed h-33 top-0  left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white text-black duration-300" : "text-white"}`}>
        <div className='flex h-32 justify-between items-center text-base gap-8'>
          <a href='' className={`text-3xl font-bold flex items-center space-x-3 ${isSticky ? "text-black" : "text-white"}`}>
            <img src={logo} className='w-20 inline-block items-center' alt='' />
            <span>AI Interview Coach</span>
          </a>
          {/* Navbar for large devices */}
          <ul className='md:flex space-x-12 hidden mr-6'>
            {
              navItems.map(({ link, path }) => (
                <Link to={path} spy={true} smooth={true} offset={-100}
                 key={path} className={`block text-2xl font-medium cursor-pointer
                 ${isSticky ? "text-black" : "text-white"}`}>
                  {link === "Login" ? (
                    <span className='flex items-center space-x-1'>
                      <span>{link}</span>
                      <span className='circle-arrow'>
                        <FaArrowRight />
                      </span>
                    </span>
                  ) : (
                    link
                  )}
                </Link>
              ))
            }
          </ul>
          {/* Menu Button for mobile devices */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className={`focus:outline-none ${isSticky ? "text-black" : "text-white"}`}>
              {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
            </button>
          </div>
        </div>
        {/* Nav Items for mobile devices */}
        <div className={`space-y-6 px-4 mt-20 py-7 bg-blue-800 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItems.map(({ link, path }) => (
              <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-xl text-white font-medium'>
                {link === "Login" ? (
                  <span className='flex items-center space-x-1'>
                    <span>{link}</span>
                    <span className='circle-arrow'>
                      <FaArrowRight />
                    </span>
                  </span>
                ) : (
                  link
                )}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
