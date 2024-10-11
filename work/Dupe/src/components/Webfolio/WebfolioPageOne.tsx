import Model from '../../assets/Images/Webfolio/WebfolioModel.png'
import Button from '../ui/Button'

function WebfolioPageOne() {
  return (
    <div className="min-h-screen w-full font-['Inter'] px-8 py-12 xl:px-28 md:py-32 relative overflow-hidden flex flex-col-reverse">
        <div className="md:w-2/3 z-[9999]">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Why do you need a Portfolio?</h1>
            <div className="flex flex-col font-medium gap-4 items-center text-[3vw] md:text-[1.1vw] mt-4 md:mt-12">
                <p>If you are new to the world of fashion and modelling and looking to kickstart your career, then an essential thing as a beginner is to create your portfolio. How else would you market and advertise your skills to potential agencies and clients without a portfolio in place? Have you heard or tried the recruitment process in the corporate field, which requires the submission of a CV? Well, the same goes for the model industry as well.</p>
                <p>A portfolio is nothing but your Model CV. A portfolio or a CV is a collection of your photographs or previous work done, professionally showcasing your skills and versatility in front of the camera. As the model industry is highly lucrative, it involves fierce competition as well. In such a scenario, a portfolio helps agencies screen from the crowd and shortlist you based entirely on a judgement framed by assessing your portfolio.</p>
                <p>Therefore, one should create a compelling portfolio, setting you apart and convincing and attracting incredible work opportunities! There are many ways to make your portfolio, presenting your talents and outshining others. Let us guide you through a few!</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className="md:absolute w-full z-[-1] top-[-4vw] right-[-16vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default WebfolioPageOne