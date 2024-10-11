import Button from '../ui/Button';
import Model from '../../assets/Images/ZCard/ZCardModel1.png'
import backgroundImage from '../../assets/Images/Background.png'

function ZCardPageOne() {
      return (
        <div style={{backgroundImage: `url(${backgroundImage})`}} className="min-h-screen w-full font-['Inter'] px-8 py-12 xl:px-28 md:py-32 relative overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/3 z-[9999]">
                <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Dedicated <br /> Aftercare Team</h1>
                <div className="flex flex-col font-medium gap-2 md:gap-4 items-center text-[2vw] md:text-[1.1vw] mt-4 md:mt-12 md:w-[40vw]">
                    <p>From the outside world, the fashion industry may look all about glints and glamour. Still, to tap into the industry from within, you will need mentoring from people who have years of experience and expertise in the functioning industry.</p>
                    <p>The first and foremost important step as a beginner is to get a photoshoot done. A high-quality photoshoot done in a focused and detailed manner by professional photographers is a must. It is the first stepping stone to build a strong foundation in the modelling industry. Professional-looking photos help make your portfolio or eBook, which in turn helps shape your career.</p>
                    <p>If you feel that a photoshoot and portfolio are sufficient enough for you to grab an opportunity in the modelling field, then you are certainly mistaken. There are many steps to be taken, and with New Idol Model by your side, we would not let you walk the road yourself.</p>
                </div>
                <div>
                    <Button backColor={"dark-pink"} />
                </div>
            </div>
            <div className="md:absolute z-[-1] top-[-8vw] scale-[1.5] md:scale-90 md:right-[-8vw]">
                <img src={Model} alt="Not Available" />
            </div>
        </div>
      );
    
}

export default ZCardPageOne