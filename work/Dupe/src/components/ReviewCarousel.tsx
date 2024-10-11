import { useEffect, useState } from 'react';
import { ModelReviews } from '../Data/ModelReviews';

function ReviewCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ModelReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? ModelReviews.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % ModelReviews.length);
  };

  return (
    <div className="relative w-full z-0 min-h-screen flex items-center justify-center overflow-hidden bg-[#242037]">
      <div className="relative flex justify-center items-center w-full h-full">
        {/* Left arrow (Previous) */}
        <div
          className="text-dark-pink w-[10%] flex items-center justify-center absolute left-0 h-full hover:cursor-pointer"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        {/* Slide content */}
        {ModelReviews.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'} absolute w-full h-full flex flex-col md:flex-row justify-center items-center`}
            style={{ zIndex: currentSlide === index ? 10 : -1 }}
          >
            <div className="scale-90 z-[-1] lg:scale-100">
              <img src={item.image} alt="Not Available" className="max-h-[50vh] md:max-h-[100vh] object-contain" />
            </div>
            <div className="text-center md:text-left mt-5 z-1 w-[40vw] ml-[-10vw] md:ml-0">
              <h1 className="text-[4vw] md:text-[5vw] leading-none font-bold text-white">{item.title}</h1>
              <p className="text-[2vw] md:text-[1.5vw] font-bold text-white mt-4">{item.review}</p>
              <h2 className="text-[5vw] md:text-[2vw] text-[#F26C92] font-bold mt-2">{item.name}</h2>
            </div>
          </div>
        ))}

        {/* Right arrow (Next) */}
        <div
          className="text-dark-pink w-[10%] flex items-center justify-center absolute right-0 h-full hover:cursor-pointer"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;
