import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import BlackLogo from '../assets/Black Logo.svg';
import Call from '../assets/Call.svg';
import Dropdown from './ui/Dropdown';
import { Link } from 'react-router-dom';

function Navbar({ color }: { color?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[20vw] md:h-[13vw] xl:h-[10vw] mt-4 font-['Inter'] absolute z-[9999] flex justify-between flex-col">
      {/* Top section with logo and contact info */}
      <div className="flex justify-between items-center h-full xl:h-[5.2vw] px-10 xl:px-28">
        <div className="h-[5.2vw] size-11 mt-6 xl:mt-0 xl:size-11 flex items-center">
          <img src={color === "black" ? BlackLogo : Logo} alt="Logo" />
        </div>
        <div className="flex items-start justify-between gap-4 xl:gap-16">
          <div className={`flex items-center text-${color === "black" ? "black" : "white"} gap-2 xl:gap-12`}>
            <div className="flex items-center h-[3.3vw] size-5 md:size-10">
              <img src={Call} alt="Call" />
            </div>
            <div>
              <h1 className="text-[2.5vw] xl:text-[.8vw]">Call Now</h1>
              <div className="text-[2.5vw] xl:text-[1.5vw]">0330 133 6343</div>
            </div>
          </div>
          <div className="flex flex-col justify-between xl:h-[4.8vw]">
            <h1 className="text-[2vw] text-white xl:text-[.8vw]">Interested In Modelling?</h1>
            <Link to={"/apply"}>
              <button className="px-2 xl:px-4 py-1 xl:py-2 text-[2vw] xl:text-[1.5vw] bg-dark-pink font-semibold rounded-lg gap-1 xl:gap-4 text-white-wheat flex justify-center items-center">
                Apply Now
                <svg className='size-3 xl:size-8' width="40" height="14" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0607 12.5607C39.6464 11.9749 39.6464 11.0251 39.0607 10.4393L29.5147 0.893398C28.9289 0.307611 27.9792 0.307611 27.3934 0.893398C26.8076 1.47919 26.8076 2.42893 27.3934 3.01472L35.8787 11.5L27.3934 19.9853C26.8076 20.5711 26.8076 21.5208 27.3934 22.1066C27.9792 22.6924 28.9289 22.6924 29.5147 22.1066L39.0607 12.5607ZM0 13H38V10H0V13Z" fill="#FFFDFD"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="xl:hidden z-[9] flex justify-end px-10">
        <button className="text-white bg-dark-pink px-2 py-2 mt-8 transition rounded-full ease-in-out" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                              ) : 
          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          )}
        </button>
      </div>

      {/* Main menu, visible on larger screens, toggled on mobile */}
      <div className={`absolute w-full xl:h-[3vw] top-[-4vw] xl:top-[7vw] p-36 xl:p-0 h-screen md:h-[200vh] bg-dark-pink xl:px-20 ${isMobileMenuOpen ? 'block' : 'hidden'} xl:flex`}>
          <div className='flex flex-col font-extrabold xl:font-medium justify-center gap-2 items-center xl:flex-row'>
            {["Home", ["Become a Model", "Modelling Management", "Fashion-modelling", "Catalogue-modelling", "Petite-modelling", "glamour-modelling.php", "Plus Size Modelling", "Commercial Modelling", "Fitness Model", "Instagram Fitness Model", "Instagram Modelling"], ["Male Modelling"], ["Female Modelling"], ["Kids Modelling"], ["Part Modelling"], "About Us", "Contact Us"].map((item, index) => (
              Array.isArray(item) ? (
                <div className="relative h-full whitespace-nowrap px-2" key={index}>
                  <Dropdown content={item} />
                </div>
              ) : (
                <div key={index} className="text-white whitespace-nowrap xl:mr-4 text-[5vw] xl:text-[1vw] h-full hover:bg-light-blue hover:bg-opacity-50 flex items-center hover:cursor-pointer">
                  {item}
                </div>
              )
            ))}
          </div>
        </div>

    </div>
  );
}

export default Navbar;

