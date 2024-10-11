import Model from '../../assets/Images/Webfolio/WebfolioiModel3.jpg'
import Button from '../ui/Button'

function WebfolioPageThree() {
  return (
    <div className="min-h-screen w-full font-['Inter'] px-8 py-12 md:px-28 bg-[#FDF2F5] md:py-32 relative overflow-hidden flex items-center justify-center gap-2 flex-col md:flex-row md:gap-8">
        <div className="scale-90">
            <img src={Model} alt="Not Available" />
        </div>
        <div className="xl:w-2/3 z-[9999]">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">Printed <br /> Portfolio</h1>
            <div className="flex flex-col font-medium gap-2 md:gap-4 items-center text-[2vw] md:text-[1.1vw] mt-4 md:mt-12">
                <p>A printed or a physical portfolio is more like a book or a magazine with your collection of professional shot photographs. Depending on your niche and modelling type, a printed booklet should cover all sorts of requirements such as a balance of headshots, full-length images and three-quarter images. You can also add a page including all necessary information such as height, weight, dress and shoe sizes and measurements, further clarifying and augmenting your portfolio.</p>
                <p>Your printed portfolio must be as precise and crisp as possible, covering all possible details about you. It shall portray your work and shall be updated yearly. You can easily carry this collection of photographs for your casting interviews or to model agencies and hand it over to the concerned authorities allowing them to flick through the images, elucidating your work better.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} content={"Become a Model"} />
            </div>
        </div>
    </div>
  )
}

export default WebfolioPageThree