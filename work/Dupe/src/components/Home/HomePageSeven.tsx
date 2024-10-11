import Button from "../ui/Button"


function HomePageSeven() {
  return (
    <div className="flex flex-col md:flex-row font-['Inter']">
        <div className="bg-[#EBF5F5] md:h-screen md:w-[54vw]">
            <div className="flex flex-col items-center justify-center gap-8 md:h-screen py-12 md:py-0">
                <h1 className="text-[7vw] md:text-[4.5vw] text-[#242037] font-bold leading-none">Dupe Model Talent <br /> Management <br /> Service</h1>
                <div className="flex flex-col gap-2 md:gap-4 text-[2.5vw] md:text-[1vw] font-light w-[70vw] md:w-[40vw]">
                    <p>At Dupe Model, we don't just focus on looks. We offer a trusted talent management service for aspiring models and new faces who have the power to change the world</p>
                    <p>Whether you're interested in commercial modeling or exploring the best commercial management services has to offer, we have the industry experience and insider tips to help you succeed.</p>
                    <p>Our modeling professionals can help you build your portfolio from scratch and find unique, appropriate opportunities to make you stand out from the crowd. </p>
                    <p>Whether you're looking for UK glamour model or commercial male model opportunities, we'll help you power up your career and achieve your aspirations</p>
                    <p>If you're aspiring to join the ranks of the most famous high-fashion models, it's going to take more than just a pretty face. And that's where Dupe Model comes in, we'll give you the tools to pave your way to the top of the industry and establish your unique brand and presence.</p>
                    <p>Apply now and let us help you take the first step toward an iconic modelling career.</p>
                </div>
            </div>
        </div>
        <div className="bg-[#FDF2F5] md:w-[46vw] md:h-screen md:px-10 py-12 flex justify-center">
            <div className="border-[8px] md:border-[8px] xl:border-[16px] border-[#F26C92] md:w-[35] xl:w-[32vw] py-10 px-10 flex flex-col items-start">
                <h1 className="text-[5vw] md:text-[3vw] text-[#000000] leading-none md:leading-[4vw] font-bold w-[25vw]">Boost your <br /> modelling <br /> prospects with <br /> a high-quality <br /> portfolio <br /> photoshoot.</h1>
                <div className="">
                    <Button backColor="dark-pink" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageSeven