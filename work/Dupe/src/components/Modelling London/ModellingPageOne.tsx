import backgroundImage from '../../assets/Images/Background.png'
import Button from '../ui/Button'
import Model from '../../assets/Images/Modelling/Ml-Model2.png'

function ModellingPageOne() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="min-h-screen overflow-hidden w-full font-['Inter'] px-8 md:px-24 py-12 flex">
        <div className='z-[9]'>
            <h1 className="font-bold text-[7vw] md:text-[5vw] text-[#242037] leading-none">Begin Your Modeling Journey Now</h1>
            <div className='mt-2 md:mt-8 text-[2vw] md:text-[1.1vw] flex flex-col gap-2 md:gap-4 items-center justify-center md:w-[50vw]'>
                <p>Are you looking to break into the competitive world of modelling? At Dupe Model, we understand the challenges that aspiring models face and we are here to help. We specialises in identifying and nurturing aspiring models, equipping them with the tools and resources they need to succeed in the industry. Whether you're a beginner or a seasoned pro, our expert team will work with you to build a strong portfolio, secure top gigs, and develop the skills necessary to thrive in the modelling scene.</p>
                <p>Our team of experienced professionals will provide you with personalized coaching and mentorship, to ensure that you have the necessary skills to succeed in the modelling industry. This includes training in areas such as runway walking, posing, and confidence building, as well as providing you with access to industry-leading photographers, stylists, and other professionals who can help you create a portfolio that showcases your unique talents and abilities.</p>
                <p>In addition to coaching and mentorship, we also provide our models with access to a wide range of opportunities, such as casting calls, photoshoots, and other events that can help you gain visibility and exposure in the industry. Our team will work with you to identify and pursue the opportunities that align with your goals and aspirations.</p>
                <p>Don't let the fierce competition hold you back from achieving your dreams. With Dupe Model, you'll have the support and guidance needed to rise above the rest and make a name for yourself as a top model in the industry. </p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
        <div className='absolute right-[-2vw] xl:right-[-2vw] bottom-[-60vw] md:right-[-20vw] md:bottom-[-44.4vw] xl:bottom-[-23.5vw] scale-[.9] md:scale-50 xl:scale-[.9]'>
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default ModellingPageOne