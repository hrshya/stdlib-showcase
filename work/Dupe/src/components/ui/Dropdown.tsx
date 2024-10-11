import { useState } from 'react';

function Dropdown({ content }: { content: string[] }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      {content.length > 0 && (
        <button
          id="dropdownHoverButton"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-white hover:bg-light-blue hover:bg-opacity-50 text-[5vw] xl:text-[1vw] px-5 py-2.5 text-center inline-flex items-center w-full"
          type="button"
        >
          {content[0]}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      )}

      {isHovered && content.length > 1 && (
        <div
          id="dropdownHover"
          className="absolute left-0 top-full z-10 bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 w-full" // Ensure width matches parent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-[2vw] xl:text-[.9vw] font-['Inter'] bg-[#FDF2F5F2] bg-opacity-95 text-black dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            {content.slice(1).map((item, index) => (
              <li key={index}>
                <a href="#" className={`block px-4 py-2 capitalize hover:bg-gray-100 ${index < 2 ? "border-b" : "border-t"}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
