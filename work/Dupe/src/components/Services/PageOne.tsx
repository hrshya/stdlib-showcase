import backgroundImage from '../../assets/Images/Background.png'
import Button from '../ui/Button'
import Model from '../../assets/Images/Services/ServiceM.png'


function PageOne() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="h-screen overflow-hidden w-full font-['Inter'] px-8 md:px-28 py-4 absolute top-[24vh] flex flex-col md:flow-row">
        <div>
            <h1 className="text-[7vw] md:text-[5vw] font-bold ">Services</h1>
            <div className="text-[2vw] md:text-[1vw] font-light flex flex-col items-center gap-2 md:gap-4 mt-4 md:mt-8 md:w-1/2">
                <p>Are you an aspiring model looking to kickstart your career in the fashion industry? The world of modelling can be exciting and rewarding, but it can also be overwhelming and difficult to navigate without the right guidance and connections. That's where Dupe Model comes in.</p>
                <p>At Dupe Model, our experienced team of professionals and model management specialists are dedicated to helping you achieve success in the industry. From professional guidance and advice to connections with top agencies and studios, we offer a comprehensive range of services to help you launch and grow your modeling career. From creating a standout portfolio that showcases your unique strengths, to providing opportunities for real-world work experience, we're here to help you every step of the way. So why wait? Let us help you unlock your full potential as a model, and take your career to the next level today.</p>
                <p className='mt-4'>At Dupe model, we understand that it takes more than just good looks to be a successful model. That's why we work with you to identify your unique strengths and potential, and help you build a career that is tailored to your goals and aspirations</p>
            </div>
            <div>
                <Button backColor='dark-pink' />
            </div>
        </div>
        <div className="md:absolute scale-[1.2] pb-[150vw] md:pb-0 md:scale-75 right-[-8vw] md:bottom-[-12vw]">
            <img src={Model} alt="Not Available" />
        </div>
    </div>
  )
}

export default PageOne