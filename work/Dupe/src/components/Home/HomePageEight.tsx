import Model from '../../assets/Images/HomeModel4.png'
import Button from '../ui/Button'

function HomePageEight() {
  return (
    <div className="w-full md:h-[140vh] bg-[#242037] font-['Inter'] px-8 py-20 md:px-28 md:py-36">
        <div className="">
            <h1 className="text-[6.5vw] md:text-[5vw] xl:text-[4.5vw] text-[#F38EAC] font-bold leading-none">We Help You Find The Right <br /> Modelling Agency</h1>
            <div className="flex md:h-[70vh]">
                <div className="text-white font-light flex flex-col gap-2 md:gap-4 mt-4 md:mt-12 text-[1.5vw] md:text-[1vw] md:w-[44vw]">
                    <p>At Dupe Model, we understand that becoming a successful model takes time and effort, and that's why we're here to offer you more than just a sneak peek at the industry. We want to ensure that you have a full understanding of the competition, going rates, and what it takes to grow in this industry.</p>
                    <p>Our experienced team specialises in supporting a wide range of models, from UK glamour models to child models and plus-size modelling. We have years of industry knowledge and expertise, so you can trust that you're in safe hands when you choose Dupe Model to help you on your way.</p>
                    <p>We want to help models of all types find their place in the industry and succeed on their career path. From managing a great portfolio to finding the most appropriate agencies and representatives for your unique profile, we'll make sure you're well-prepared for what lies ahead.</p>
                    <p>Whether your dream is to become one of the top glamour models in the UK, or one of the most influential fitness models on social media, let us give you more than just a handful of helpful advice.</p>
                    <p>Apply now and let Dupe Model help you find your place in the modeling industry.</p>
                </div>
                <div className="xl:scale-75 xl:mt-[-10vw]">
                    <img src={Model} alt='Not Available' />
                </div>
            </div>
            <div className="xl:mt-[-2vw]">
                <Button backColor='dark-pink' />
            </div>
        </div>
    </div>
  )
}

export default HomePageEight