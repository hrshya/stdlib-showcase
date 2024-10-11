import Model from '../../assets/Images/Apply/ApplyModel4.png'
import Button from '../ui/Button'

function ApplyPageThree() {
  return (
    <div className="flex md:h-[60vw] relative w-full bg-[#F6F8FA] px-8 pt-8 md:px-28 md:pt-24 xl:pt-36 overflow-hidden">
        <div className="flex w-full scale-[1.1] mr-8 md:mr-0 bottom-0">
            <img src={Model} alt="Not Available" />
        </div>
        <div className="w-1/2 absolute right-0">
            <h1 className="text-[5vw] md:text-[4vw] text-[#242037] leading-none font-bold">Apply Now To <br /> Be A Model</h1>
            <div className="text-[1.3vw] md:text-[1vw] flex flex-col mt-1 md:mt-8 gap-1 md:gap-4 w-[40vw]">
                <p>Are you interested in modelling in London? Looking for a leading UK Model support service to help propel your modelling career? New Idol Models is here to provide you with our expert advice, guidance, and support to make sure you stand out as a model in the modern age. We want to help manage and push your talent in front of potential agencies.</p>
                <p>Do you have the look, the passion and the commitment that a career in modelling demands? Have you tried getting in touch with top UK model management and support services but haven't found one that fits your needs? It's time you get in touch with the New Idol Models team of experts who can give you the tools you need to start taking your portfolio to the next level.</p>
                <p>But what if you don't have a portfolio yet? What if you're entirely new to the idea of modelling and just want to see what it's all about? That’s no problem at all. Our expert team at New Idol Models are always happy to show you the ropes. However, remember that to succeed in the modern world of fashion and specialist modelling, you're going to need that killer drive and instinct.</p>
            </div>
            <div className='mt-[-8vw] md:mt-[-2vw] xl:mt-0'>
              <Button backColor="dark-pink" />
            </div>
        </div>
    </div>
  )
}

export default ApplyPageThree