
function Landing() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] pt-1">
        <div className="textstructure mt-36 px-4 xl:mt-40 xl:px-20">
            {["Hi My", "Name Is", "Harsh Yadav"].map((item, index)=>{
                return <div className="masker">
                    <div className="w-fit flex items-center">
                        <h1 key={index} className="uppercase text-[14vw] leading-none xl:text-[11vw] xl:leading-[7.7vw] tracking-tighter font-['Founders_Grotesk'] font-semibold">
                            {item}
                        </h1>
                    </div>
            </div>
            })}
        </div>
        <div className="border-t border-zinc-400 gap-8 mt-32 xl:mt-20 flex flex-col xl:flex-row xl:justify-between xl:items-center px-4 xl:px-20 py-5">
            {["Freelancer", "Open Source Contributor"].map((item, index) => (
                <p key={index} className="text-lg xl:text-md font-light tracking-tight leading-none">{item}</p>
            ))}
            <div onClick={(e)=>window.location.href = 'mailto:harshyadav6078@gmail.com'} className="group start flex items-center hover:cursor-pointer gap-2">
                <div className="px-5 py-2 border xl:text-md uppercase group-hover:bg-black group-hover:text-white font-light border-zinc-500 rounded-full">
                    get in touch
                </div>
                <div className="w-10 h-10 border border-zinc-500 group-hover:bg-black group-hover:text-white rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing