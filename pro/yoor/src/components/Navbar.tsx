import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed xl:z-[999] text-[#212121] w-full p-4 md:px-20 md:py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
        <h1 className="text-xl xl:text-3xl font-bold">Hrshya</h1>
      </div>

      <div>
        {/* Mobile Menu Toggle */}
        <div className="xl:hidden z-[99]">
          <button className="text-black transition ease-in-out" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile and Desktop Navigation */}
        <div className={`absolute z-[-1] xl:z-[50] xl:relative top-0 left-0 h-screen transition-all ease-in-out duration-1000 w-screen xl:h-full xl:w-full flex justify-center items-center bg-[#CDEA68] xl:bg-transparent xl:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center gap-16 flex-col xl:flex-row">
            {['Work', 'About', 'Contact'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`} // Use Link for client-side routing
                className={`text-3xl xl:text-lg capitalize font-bold xl:font-light hover:cursor-pointer ${index === 2 && !isMobileMenuOpen && 'ml-32'}`}
                onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu when a link is clicked
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
