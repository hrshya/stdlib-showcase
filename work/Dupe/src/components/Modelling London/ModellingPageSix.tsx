import Button from "../ui/Button"
import Model from "../../assets/Images/Modelling/Ml-Model5.png"


function ModellingPageSix() {
  return (
    <div className="md:min-h-screen w-full bg-[#F6F8FA] font-['Inter'] px-8 py-12 md:px-28 md:py-32 pb-52 md:pb-[72vw] xl:pb-80 relative overflow-hidden">
        <div className="xl:w-1/2">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Apply Now For Dupe Modelling</h1>
            <div className="flex flex-col gap-4 items-center text-[2vw] md:text-[1.5vw] xl:text-[1.1vw] mt-4 md:mt-12">
                <p>Are you ready to take the first step in your modelling career in London? At Ventura Models, we believe that anyone with confidence and the right skillset can succeed in the modelling industry. That's why we make it easy for you to apply for modelling opportunities in London.</p>
                <p>You can apply for modelling by filling out the application form on our website or by contacting us directly. We'll work with you to explore your talents and capabilities and create a professional portfolio that showcases your unique look and strengths. Even if you don't have a professional portfolio yet, you can still apply, simple as a selfie is enough for the starters.</p>
                <p>Don't let lack of experience or resources hold you back from pursuing your modelling dreams. Apply now and let Ventura Models guide you on your journey to becoming a successful model in London.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className="absolute scale-[.8] -right-[10vw] -bottom-[13vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default ModellingPageSix