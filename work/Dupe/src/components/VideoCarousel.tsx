import { useEffect, useState } from 'react';
import { VideoTestimonial } from '../Data/VideoTestimonial';

function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VideoTestimonial.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [VideoTestimonial.length]);


  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? VideoTestimonial.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % VideoTestimonial.length);
  };

  return (
    <div className="relative w-full xl:min-h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="relative">
        {/* Left arrow (Previous) */}
        <div
          className="text-dark-pink w-[5vw] flex items-center justify-center absolute left-0 h-full xl:h-[100vh] hover:cursor-pointer"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        {/* Slide content */}
        {VideoTestimonial.map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
            data-carousel-item={currentSlide === index ? 'active' : ''}
          >
            <div>
                <div className="flex gap-8 scale-75 mt-[4vw] items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img src={item.video1} alt="Not Available" />
                        <h1 className="text-[#242037] text-[2vw] font-semibold">{item.name1}</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img src={item.video2} alt="Not Available" />
                        <h1 className="text-[#242037] text-[2vw] font-semibold">{item.name2}</h1>
                    </div>
                </div>
            </div>
          </div>
        ))}

        {/* Right arrow (Next) */}
        <div
          className="text-dark-pink w-[5vw] flex items-center justify-center absolute right-0 top-0 h-full xl:h-[100vh] hover:cursor-pointer"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12"
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
  )}

  export default VideoCarousel;