import Model from '../../assets/Images/Webfolio/WebfolioModel4.png'
import Button from '../ui/Button'

function WebfolioPageFour() {
  return (
    <div className="min-h-screen w-full font-['Inter'] px-8 py-12 md:px-28 bg-[#F6F8FA] md:py-32 relative overflow-hidden flex items-center justify-center gap-8 md:gap-36 flex-col md:flex-row">
        <div className="xl:w-2/3 z-[9999]">
            <h1 className="text-[10vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Digital <br /> Portfolio</h1>
            <div className="flex flex-col font-medium gap-2 md:gap-4 items-center text-[2vw] mt-4 md:text-[1.1vw] md:mt-12">
                <p>Just like a printed portfolio, a digital portfolio is also a compilation of images on a disk. The disk contains all the selected and chosen shots from your shoot. Unlike printed portfolios, you can easily carry the digital portfolio and share it with as many agencies or casting directors without the hassle of printing one or numerous copies.</p>
                <p>Not only this, in a digital portfolio, you can always edit, re-touch, resize, crop or discard and re-update your portfolio, as per the requirements of the agency. This makes your work easy without the worry of re-printing the whole book. It also gives you the benefit of sharing it via emails to multiple people over and over again.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} content={"Become a Model"} />
            </div>
        </div>
        <div className="">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default WebfolioPageFour