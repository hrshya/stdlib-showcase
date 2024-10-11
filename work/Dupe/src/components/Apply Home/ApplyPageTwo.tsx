import VideoCarousel from '../VideoCarousel'

function ApplyPageTwo() {
  return (
    <div className="w-full xl:h-[60vw] font-['Inter'] bg-[#FBE5EC] py-12 md:py-20 mt-[-40vh] md:mt-0 xl:mt-[-20vw]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#242037] text-[8vw] md:text-[5vw] font-bold">Video Testimonials</h1>
        <div className='xl:mt-[-5vw]'>
          <VideoCarousel />
        </div>
      </div>
    </div>
  )
}

export default ApplyPageTwo