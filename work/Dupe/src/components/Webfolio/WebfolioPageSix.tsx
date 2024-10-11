import Model from '../../assets/Images/Webfolio/WebfolioModel5.png'
import Button from '../ui/Button'

function WebfolioPageSix() {
  return (
    <div className="min-h-screen w-full bg-[#242037] font-['Inter'] text-white px-8 py-12 md:px-28 md:py-52 pb-96 relative overflow-hidden">
        <div className="md:w-2/3">
            <h1 className="text-[10vw] md:text-[5vw] font-extrabold leading-none">How can New Idol <br /> Models help?</h1>
            <div className="flex flex-col gap-2 md:gap-4 text-[2vw] md:text-[1.1vw] mt-4 md:mt-12">
                <p>Are you an aspiring model unaware of the nitty-gritty involved in the modelling biz? Well, there are certainly no ladders to reach the top in one go, but with our help, you will undoubtedly scale up swiftly. Welcome to New Idol Models UK, a model management support service, an ally you need to make you reach accurate clients and work in this fast-moving modelling industry.</p>
                <p>It is easy to get a photoshoot done, but the challenging part is to get it in a focused and professional manner. By this, we mean that your portfolio shall represent you. It should reveal how you carry yourself, your attitude, personality, and versatility in front of the camera. From photoshoots to choosing the most accurate images, building your portfolio, to finally connecting you with opportunities, we manage it all for you.</p>
                <p>If you want to establish an impressive start for your modelling career, then we are here to give you the boost. All you have to do is connect with our consultants about our portfolio services, and we will guide you through all details.</p>
                <p>Connect with us on 02081068243 or fill in our website form - Let's get you started!</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className="absolute xl:scale-[.8] md:scale-[.5] -right-[10vw] -bottom-[5vw] md:-right-[35vw] md:-bottom-[20vw]  xl:-right-[10vw] xl:-bottom-[5vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default WebfolioPageSix