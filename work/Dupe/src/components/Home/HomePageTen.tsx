import Model from '../../assets/Images/HomeMode8.png'
import Button from '../ui/Button'

function HomePageTen() {
  return (
    <div className="bg-[#F6F8FA] md:h-[180vh] xl:h-[150vh] overflow-hidden w-full font-['Inter'] relative pb-52 xl:pb-0 py-20 px-8 md:px-20 flex">
        <div className="flex flex-col z-[9] ">
            <h1 className="text-[9vw] xl:text-[5vw] font-bold text-[#242037] leading-none">Apply Now With <br /> Dupe Model</h1>
            <div className="mt-4 md:mt-8">
                <div className="text-[2vw] md:text-[1.5vw] xl:text-[1vw] font-light flex flex-col w-[80vw] md:w-[45vw] xl:w-[35vw] gap-2 xl:gap-4">
                    <p>Are you ready to take your first steps into the modeling industry but unsure of where to begin?</p>
                    <p>Let Dupe Model, a leading modelling support service, point you in the right direction.</p>
                    <p>Our team of experts is dedicated to helping aspiring high-end fashion models find the opportunities, agency contracts, and guidance they need to succeed.</p>
                    <p>From teen modelling to body part modelling and more, we have the knowledge and connections to help you build your profile and start your career.</p>
                    <p>We understand that in the world of fashion and modelling, it takes more than just a great look and passion to succeed. That's why we strive to provide practical and common-sense career guidance.</p>
                    <p>Contact us directly on 0330 133 6343 or fill out our web form to get in touch with our experts and start building your career today.</p>
                </div>
            </div>
            <div>
                <Button backColor='dark-pink' />
            </div>
        </div>
        <div className="absolute z-[0] scale-[.7] right-[-15vw] bottom-[5vw] xl:right-[-30vw] xl:bottom-0 w-full md:right-[-20vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default HomePageTen