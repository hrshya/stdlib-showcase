import Button from '../ui/Button'
import Model from '../../assets/Images/Aftercare/AftercareModel.png'
import backgroundImage from '../../assets/Images/Background.png'

function AftercarePageOne() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="min-h-screen w-full font-['Inter'] px-8 py-12 xl:px-28 md:py-32 relative overflow-hidden">
        <div className="md:w-2/3 z-[9999]">
            <h1 className="text-[9vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Dedicated <br /> Aftercare Team</h1>
            <div className="flex flex-col font-medium gap-2 md:gap-4 md:w-[40vw] xl:w-full items-center text-[2.5vw] mt-2 md:text-[1.1vw] md:mt-12">
                <p>From the outside world, the fashion industry may look all about glints and glamour. Still, to tap into the industry from within, you will need mentoring from people who have years of experience and expertise in the functioning industry.</p>
                <p>The first and foremost important step as a beginner is to get a photoshoot done. A high-quality photoshoot done in a focused and detailed manner by professional photographers is a must. It is the first stepping stone to build a strong foundation in the modelling industry. Professional-looking photos help make your portfolio or eBook, which in turn helps shape your career.</p>
                <p>If you feel that a photoshoot and portfolio are sufficient enough for you to grab an opportunity in the modelling field, then you are certainly mistaken. There are many steps to be taken, and with New Idol Model by your side, we would not let you walk the road yourself.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className="absolute z-[-1] md:top-[4vw] scale-75 md:scale-90 top-[65vw] right-[-15vw] md:right-[-11vw] xl:right-[-4vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default AftercarePageOne