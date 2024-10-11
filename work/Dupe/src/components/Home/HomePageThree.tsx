import Model from '../../assets/Images/HomeModel2.png'
import Button from '../ui/Button'


function HomePageThree() {
  return (
    <div className="w-full md:h-screen bg-[#F6F8FA]">
        <div className="flex md:justify-between items-center flex-col md:flex-row h-[80vh] md:h-screen">
            <div className="md:h-screen w-1/2 mt-40 md:mt-0 scale-[2] md:scale-[1] flex justify-center items-center">
                <img src={Model} alt='Not Available' className="w-[36vw]" />
            </div>
            <div className="flex flex-col w-2/3 md:w-1/2 md:items-start relative mt-28 md:mt-0">
                <h1 className="text-[6vw] leading-none font-bold text-[#242037]">Discover our Specialised Model Service Today!</h1>
                <Button backColor='dark-pink' />
                <div className="flex gap-4 md:gap-2 ml-[55vw] mt-[40vw] md:ml-[35vw] md:mt-[35vw] absolute">
                    <div className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] hover:cursor-pointer rounded-full bg-[#FDF2F5] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                    </div>
                    <div className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] hover:cursor-pointer rounded-full bg-[#FDF2F5] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default HomePageThree