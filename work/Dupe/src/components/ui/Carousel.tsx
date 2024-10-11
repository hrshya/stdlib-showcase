import React, { useEffect, useState } from 'react';
import Hero1 from '../../assets/Images/Hero1.jfif';
import Hero2 from '../../assets/Images/Hero2.jfif'; 
import Hero3 from '../../assets/Images/Hero3.jfif';
import Hero4 from '../../assets/Images/Hero4.jfif';
import Form from '../Form';

interface LandingProps {
  title: String;
  description: String;
}

function Carousel({ title, description }: LandingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Hero1, Hero2, Hero3, Hero4]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-screen xl:w-full overflow-hidden">
        <div className="bg-[#1C2333] w-full h-[160vh] md:h-[200vh] xl:h-[160vh] absolute z-[99] pointer-events-none opacity-70">

        </div>
        <div className="absolute flex gap-8 xl:gap-0 xl:justify-between flex-col xl:flex-row top-[20vw] z-[999] px-8 xl:px-28 w-full h-screen font-['Inter'] text-white">
          <div className='mt-32 md:mt-0 xl:mt-0'>
              <div className="text-[10vw] xl:text-[5.8vw] leading-none font-bold">
                  {title}
              </div>
              <div className="text-[5vw] xl:text-[2vw] md:leading-none pt-4">
                  {description}
              </div>
          </div>
          <div className=''>
            <Form />
          </div>
        </div>
        <div className="relative h-[200vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
              data-carousel-item={currentSlide === index ? 'active' : ''}
            >
              <img
                src={slide}
                className="absolute block w-full h-full md:scale-[1.6] xl:scale-[1] object-cover -translate-x-1/2 -translate-y-1/2 top-[60vh] left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          </div>

          <div className="absolute z-[99999] md:hidden xl:block flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-[-55vh] md:bottom-[-115vh] xl:bottom-[-55vh] left-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-6 h-2 ${currentSlide === index ? 'bg-dark-pink' : 'bg-gray-300'}`}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
    </div>
  );
}

export default Carousel;

