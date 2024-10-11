import Button from "../ui/Button"
import Model from '../../assets/Images/Modelling/Ml-Model4.png'

function ModellingPageFour() {
  return (
    <div className="min-h-screen w-full px-8 py-12 md:px-28 md:py-20 font-['Inter']">
        <div className="flex flex-col gap-16">
            <div>
                <h1 className="text-[7vw] md:text-[5vw] text-[#242037] font-extrabold leading-none">Our Modelling <br /> 
                Experts Will Guide You</h1>
            </div>
            <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={Model} alt="Not Available" />
                </div>
                <div className="md:w-1/2">
                    <div className="text-[2vw] md:text-[1.2vw] flex flex-col gap-2 md:gap-8 items-center">
                        <p>Are you interested in becoming a model? Whether you're interested in female or plus-size modeling, our team at Dupe Model can guide you on your journey to success. We offer a wide range of options, including body parts modeling, fitness modeling, fashion modeling, and commercial modeling.</p>
                        <p>Our experienced and professional modeling experts in London will provide you with the knowledge and resources you need to get started. We'll help you identify your key strengths and prepare a portfolio that showcases your talents. Additionally, our team will help you choose modeling jobs that align with your career goals and will help you grow as a model.</p>
                        <p>So, if you're serious about becoming a top model, join us at Dupe Model today. We'll provide you with the support and guidance you need to take your modeling career to the next level. Don't settle for less, explore your options and become a model with us.</p>
                    </div>
                    <div>
                        <Button backColor={"dark-pink"} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModellingPageFour