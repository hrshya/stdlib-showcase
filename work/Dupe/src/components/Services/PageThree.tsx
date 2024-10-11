import Button from '../ui/Button'
import Model from '../../assets/Images/Services/ServiceM4.png'

function PageThree() {
  return (
    <div className="bg-[#242037] w-full md:min-h-screen font-['Inter'] text-white absolute px-8 md:px-0 top-[315vh] md:top-[245vw] xl:top-[205vw] flex items-center justify-center overflow-hidden">
        <div className='mt-28 flex justify-center items-center mb-44 flex-col md:flex-row'>
                <div className="">
                    <h1 className="text-[7vw] md:text-[5vw] leading-none  font-bold">Top 5 reasons to <br /> choose us</h1>
                    <div className="flex flex-col gap-2 text-[3vw] md:gap-6 md:text-[1vw] mt-4 md:mt-20">
                        <div className="flex gap-3 md:gap-8 items-center md:w-[40vw]">
                            <h1 className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full flex justify-center items-center bg-[#F26C92]">1</h1>
                            <p className="text-[2vw] md:text-[1vw]">Safe and secure entry into the modelling industry through agency collaboration.</p>
                        </div>
                        <div className="flex gap-3 md:gap-8 items-center md:w-[40vw]">
                            <h1 className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full flex justify-center items-center bg-[#F26C92]">2</h1>
                            <p className="text-[2vw] md:text-[1vw]">Professional photoshoot with experienced hair and makeup stylists.</p>
                        </div>

                        <div className="flex gap-3 md:gap-8 items-center md:w-[40vw]">
                            <h1 className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full flex justify-center items-center bg-[#F26C92]">3</h1>
                            <p className="text-[2vw] md:text-[1vw]">Confidence-boosting guidance and tips from our team throughout the shoot.</p>
                        </div>

                        <div className="flex gap-3 md:gap-8 items-center md:w-[40vw]">
                            <h1 className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full flex justify-center items-center bg-[#F26C92]">4</h1>
                            <p className="text-[2vw] md:text-[1vw]">Platinum Aftercare service includes representation by reputable model agencies.</p>
                        </div>

                        <div className="flex gap-3 md:gap-8 items-center md:w-[40vw]">
                            <h1 className="h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw] rounded-full flex justify-center items-center bg-[#F26C92]">5</h1>
                            <p className="text-[2vw] md:text-[1vw]">High-quality images, portfolio, eBook and Z card design services.</p>
                        </div>
                    </div>
                    <div className='md:mt-16'>
                        <Button backColor="dark-pink" />
                    </div>
                </div>
                <div className="md:w-1/2 w-2/3 mr-[6vw]">
                    <img src={Model} alt="Not Available" />
                </div>
        </div>
    </div>
  )
}

export default PageThree