import { useState } from "react";
import { FAQ } from "../../Data/FAQ";

function FAQPageOne() {
  const [openIndexes, setOpenIndexes] = useState(Array(FAQ.length).fill(false));

  const toggleAccordion = (index:number) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
  };

  return (
    <div className="px-8 md:px-28 md:py-20 w-full min-h-screen font-['Inter'] mb-52">
      <h1 className="text-[#242037] text-[10vw] md:text-[5vw] font-bold">FAQ's</h1>
      <div className="flex flex-col gap-4 md:gap-6 mt-12">
        {FAQ.length > 0 &&
          FAQ.map((item, index) => (
            <div key={index} className="border-gray-200 bg-[#FBE5EC] flex items-center flex-col">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 md:px-10 md:py-5 text-slate-800"
              >
                <div className="flex justify-center items-center gap-2 md:gap-8">
                  <svg className="scale-[.5] md:scale-[1]" width="30" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.0607 12.5607C39.6464 11.9749 39.6464 11.0251 39.0607 10.4393L29.5147 0.893398C28.9289 0.307611 27.9792 0.307611 27.3934 0.893398C26.8076 1.47919 26.8076 2.42893 27.3934 3.01472L35.8787 11.5L27.3934 19.9853C26.8076 20.5711 26.8076 21.5208 27.3934 22.1066C27.9792 22.6924 28.9289 22.6924 29.5147 22.1066L39.0607 12.5607ZM0 13H38V10H0V13Z" fill="black"/>
                  </svg>
                  <span className="text-[2.5vw] md:text-[1.5vw] font-bold">{item.title}</span>
                </div>
                <span
                  className={`text-slate-800 transition-transform duration-300 ${
                    openIndexes[index] ? "rotate-180" : ""
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                </span>
              </button>
              <div className={`py-4 px-10 flex flex-col bg-white gap-4 text-gray-600 ${openIndexes[index] ? "block" : "hidden"}`}>
                <p>{item.description1}</p>
                <p>{item.description2}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FAQPageOne;
