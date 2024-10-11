import Button from "../ui/Button"


function ModellingPageFive() {
  return (
    <div className="md:min-h-screen w-full font-['Inter'] px-8 py-12 md:px-28 md:py-32 bg-[#F3D7DC]">
        <div className="flex flex-col">
            <h1 className="text-[7vw] md:text-[5vw] leading-none font-extrabold text-[#242037]">Professional Modelling Support Near You With Dupe Model</h1>
            <div className="text-[2vw] md:text-[1.5vw] xl:text-[1.1vw] flex flex-col gap-2 md:gap-8 items-center mt-4 md:mt-12">
                <p>Looking for professional modelling support near you? Look no further than Dupe Model. We offer a wide range of modelling opportunities, covering everything from beginner to commercial modelling. Whether you're a male or female model, we have something for you.</p>
                <p>We understand that it can be difficult to navigate the world of modelling on your own, which is why we are here to help. We offer expert guidance and resources to help you find the best modelling opportunities near you. From connecting you with the top modelling studios in your area to helping you prepare your portfolio, we've got you covered.</p>
                <p>Don't let distance hold you back from pursuing your modelling dreams. Dupe Model is available nationwide and is ready to help you discover the best opportunities in your area. Give us a call on 0330 133 6343 or apply today to get started on your journey to becoming a model.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} content={"Become a Model"} />
            </div>
        </div>
    </div>
  )
}

export default ModellingPageFive