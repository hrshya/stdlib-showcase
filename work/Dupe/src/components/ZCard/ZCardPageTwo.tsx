import Button from '../ui/Button'
import Model from '../../assets/Images/ZCard/ZCardModel2.png'

function ZCardPageTwo() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F6F8FA] w-full font-['Inter'] px-8 py-12 md:p-20 flex">
        <div className='flex border-[1.2vw] border-dark-pink md:py-12 px-8 md:px-0 flex-col-reverse md:flex-row overflow-hidden'>
            <div className='md:w-1/2 scale-[2.5] xl:scale-150 mt-[20vh] md:scale-[2.5] md:mt-[29vw] md:mb-[-5vw] xl:mt-[10.5vw] ml-[6vw] pl-[2vw]'>
                <img src={Model} alt="Not Available" />
            </div>
            <div className='flex flex-col md:w-2/3 gap-2 md:gap-8'>
                <h1 className='text-[7vw] md:text-[5vw] font-extrabold leading-none'>Do you want to <br /> become a Model?</h1>
                <div className="rotate-[180deg] leading-none scale-[.4] md:scale-[1] ml-[-50vh] md:ml-[10vw] xl:ml-0 md:w-[8vw]">
                    <svg width="120" height="73" viewBox="0 0 120 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.8888 0.00166118C85.7987 -0.0911428 78.9566 2.60871 73.8393 7.51843C68.722 12.4282 65.7398 19.1539 65.5369 26.2438C65.3341 33.3337 67.9269 40.219 72.7552 45.4134C77.5834 50.6078 84.2599 53.6947 91.3437 54.0076C89.7079 61.0386 86.0943 67.4542 80.9293 72.4961C95.8646 72.4961 119.898 52.1473 119.898 27.0475C119.902 23.4971 119.206 19.9809 117.851 16.6997C116.495 13.4185 114.506 10.4367 111.997 7.92492C109.489 5.4131 106.51 3.42044 103.232 2.0609C99.9528 0.701376 96.4382 0.00166118 92.8888 0.00166118Z" fill="#F26C92"/>
                        <path d="M27.3665 0.00166118C20.2764 -0.0911428 13.4342 2.60871 8.31688 7.51843C3.19952 12.4282 0.21731 19.1539 0.0144753 26.2438C-0.188356 33.3337 2.40446 40.219 7.23276 45.4134C12.0611 50.6078 18.7375 53.6947 25.8214 54.0076C24.1722 61.0334 20.5602 67.4454 15.4066 72.4961C30.3134 72.4961 54.376 52.1473 54.376 27.0475C54.376 19.8795 51.5313 13.0046 46.4668 7.9333C41.4024 2.86203 34.5326 0.0092448 27.3665 0.00166118Z" fill="#F26C92"/>
                    </svg>
                </div>
                <p className="font-extralight text-[3.5vw] md:text-[2.5vw] leading-none">“Achieve success in the modeling industry with the help of Dupe Model - the UK's leading provider of model development services”</p>
                <div className="md:mt-[-3vw]">
                    <Button backColor={"dark-pink"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZCardPageTwo
