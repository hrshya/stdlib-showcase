import Button from "../ui/Button"
import Model from '../../assets/Images/Modelling/Ml-Model3.png'

function ModellingPageThree() {
  return (
    <div className="font-['Inter'] relative overflow-hidden md:min-h-screen w-full bg-[#242037] text-[white] px-8 py-12 md:px-28 md:py-20 flex flex-col">
        <div className="z-[9]">
            <h1 className="text-[6vw] md:text-[5vw] font-extrabold leading-none">Improve Your Modeling Career with a Professional Portfolio from Dupe Model</h1>
            <div className="text-[1.8vw] md:text-[1vw] font-medium flex gap-4 flex-col mt-4 md:mt-12 md:w-[50vw]">
                <p>Having a professional modeling portfolio is essential for making a great first impression and landing successful gigs in the industry. A collection of selfies and amateur photos just won't cut it.</p> 
                <p>To truly showcase your potential as a model, you need the help of a professional photographer and guidance on how to pose, express yourself and put your best foot forward.</p>
                <p>At Dupe Model, we understand the importance of a strong portfolio, which is why we offer comprehensive portfolio building services that are tailored to your specific needs. Our team of experts will provide you with reliable feedback, giving you the insight and guidance you need to improve your portfolio and take your modeling career to the next level.</p>
                <p>As a complete hub for modelling management, consultation, and support, we are dedicated to helping you succeed in the competitive world of modeling. Whether you're just starting out or looking to take your career to the next level, we have the tools and expertise to get you where you want to be.</p>
                <p>Apply now and let us help you build a professional portfolio that will take your modeling career to new heights.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className="md:absolute scale-[1.5] mb-[-25vw] md:scale-[.85] md:mb-0 md:right-[-3vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default ModellingPageThree