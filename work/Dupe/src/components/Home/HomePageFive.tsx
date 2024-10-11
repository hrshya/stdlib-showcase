import Model from '../../assets/Images/HomeModel3.png'
import Button from '../ui/Button'

function HomePageFive() {
  return (
    <div className="w-full h-[42.45vh] md:h-[117.8vh] xl:h-[165.4vh] flex font-['Inter'] mt-12 md:mt-20">
        <div className="absolute md:block leading-none">
            <img src={Model} alt='Not Available' className="h-full w-full" />
        </div>
        <div className="absolute right-4 md:block md:right-0 flex flex-col w-1/2">
            <h1 className="text-[4.5vw] text-[#242037] font-extrabold leading-none">Dupe Model <br /> High Fashion Modeling Support</h1>
            <div className="text-[1.5vw] md:text-[1vw] font-normal md:font-light md:w-[45vw] text-[#242037] flex flex-col gap-2 md:gap-4 mt-4 md:mt-10">
                <p>Looking to break into the high-end fashion modeling industry? It's a competitive world, but with the help of Dupe Model, you can increase your chances of success. Our leading model management support service offers realistic advice and assistance for models looking to make it in the fashion industry</p>
                <p>Whether you're interested in fashion modeling tips and tools, or looking to join the ranks of high-end male models, our team of experts can help you identify your potential and find the best routes to the career you want. Whether you're going freelance or looking to sign with an agency, we'll provide you with the guidance you need to make it to the top.</p>
                <p>We understand that the journey to becoming a high fashion model isn't easy, and we can't make any guarantees, but with Dupe Models, you'll have the support you need to turn your aspirations into reality.</p>
                <p>Apply Now and let us help you take the first step towards achieving high fashion success</p>
            </div>
            <Button backColor='dark-pink' />
        </div>
    </div>
  )
}

export default HomePageFive