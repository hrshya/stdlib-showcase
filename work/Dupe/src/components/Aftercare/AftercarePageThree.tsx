import Button from "../ui/Button"
import Model from '../../assets/Images/Aftercare/AftercareModel3.png'


function AftercarePageThree() {
  return (
    <div className="min-h-screen w-full font-['Inter'] px-8 py-12 md:px-28 bg-[#F6F8FA] md:py-24 relative overflow-hidden flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="md:scale-150 scale-[2] md:mt-20 md:w-[50vw] md:ml-0 ml-28 mt-12">
            <img src={Model} alt="Not Available" />
        </div>
        <div className="md:w-2/3 z-[9999]">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">New <br /> Idol Models</h1>
            <div className="flex flex-col font-medium gap-2 md:gap-4 items-center text-[2vw] mt-2 md:text-[1.1vw] md:mt-12">
                <p>New Idol Model’s consultants are here to guide you. Right from the first photoshoot and up until you are signed by an agency or casting agency, we will keep supporting you. From simple everyday questions, insightful tips and hacks, and helping you with casting calls, our expert yet friendly and dedicated aftercare team of modelling consultants will assist you in every aspect possible. Our team will provide incredible and comfortable aftercare services under our Platinum After Care Services.</p>
                <p>At New Idol Models, you can trust and depend on us entirely. We want to ensure that you enter the industry safely. For this purpose, we have collaborated with various leading and prominent modelling agencies across the UK so that you are secure and not misguided in the industry.</p>
                <p>We guide you all from photoshoots to creating a portfolio, eBook or a Z card, and finally having you on board with leading agencies. For more details and queries regarding our Platinum After Care Services for models, you can fill in our web form or call us on 02081068243, and one of our experts will get in touch with you.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} content={"Become a Model"} />
            </div>
        </div>
    </div>
  )
}

export default AftercarePageThree