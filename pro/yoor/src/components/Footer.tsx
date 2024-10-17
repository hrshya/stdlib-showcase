import { Socials } from "../Data/Socials"


function Footer() {
  return (
    <div className="w-full xl:h-screen px-4 xl:px-20 pt-32 xl:pt-20 bg-[#CDEA68]">
        <div className="xl:w-1/2 font-[Founders_Grotesk]">
            <div className="heading">
                <h1 className="text-[16vw] xl:text-[10vw] uppercase leading-[13vw] font-bold xl:font-semibold xl:leading-[9vw]">Let's Work Together</h1>
                <div className="flex flex-col xl:flex-row gap-8">
                  <button onClick={(e) => {window.location.href ='mailto:harshyadav6078@gmail.com';}} className="px-6 py-2 w-48 xl:w-full xl:px-10 xl:py-6 flex items-center gap-5 bg-zinc-900 hover:bg-black transition-all ease-in-out mt-10 rounded-full uppercase text-white">Get In Touch
                    <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                  </button>
                  <button onClick={(e) => {window.location.href ='mailto:harshyadav6078@gmail.com';}} className="px-6 py-2 w-72 xl:w-full xl:px-10 xl:py-6 flex items-center gap-5 border border-zinc-900 xl:mt-10 rounded-full">harshyadav6078@gmail.com
                    <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
                  </button>
                </div>
            </div>
            <h3></h3>
        </div>
        <div className="flex flex-col xl:flex-row justify-between mt-28 xl:mt-10 py-4 xl:py-0">
          <div></div>
          <div className="flex justify-evenly xl:gap-12">
            {Socials.length > 0 && Socials.map((item) => (
              <a target="_blank" className="group transition-all duration-300 ease-in-out" href={item.link}>
                  <span className="capitalize bg-left-bottom bg-gradient-to-r from-zinc-900 to-zinc-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    {item.social}
                  </span>
              </a>
            ))}
          </div>
        
          
        </div>
    </div>
  )
}

export default Footer