import backgroundImage from '../../assets/Images/Background.png'
import modelImage from '../../assets/Images/Dupe Model.png'
import Button from '../ui/Button'

function HomePageTwo() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className={`flex w-full font-['Inter'] bg-cover font-bold md:screen xl:h-screen px-8 xl:px-28 pt-8 mt-[-39vh] md:-mt-0 xl:mt-[-39vh]`}>
        <div>
            <div className="text-[8vw] xl:text-[5vw] text-[#242037]">
                Dupe Model
            </div>
            
            <div className="font-light flex flex-col gap-1 md:gap-4 xl:gap-4 w-[50vw] text-[1.7vw] md:text-[1.1vw] xl:text-[1.1vw] ">
                <p>At Dupe model, we are dedicated to helping aspiring models achieve their dreams. We understand that the modeling industry can be competitive and challenging, but our team of experts is here to provide you with the tools you need to stand out and succeed</p>
                <p>Our model talent management services offer personalized guidance, advice and support to help you build your portfolio and find the right agencies that align with your needs and passions</p>
                <p>Even if you're new to the industry or don't have a portfolio yet, we're here to help.</p>
                <p>Our team is always happy to give you an introduction to the world of modeling and provide you with the skills and confidence to pursue your goals. However, success in the modern world of fashion and specialist modeling requires more than just a great look, it requires drive, passion, and commitment.</p>
                <p>So, whether you're an experienced model looking to take your career to the next level, or just starting out, Dupe Model is here to help.</p>
                <p>With us, you can be sure of realistic, straightforward advice and guidance that will help you navigate the industry and take your first steps to becoming a model.</p>           
            </div>

            <div className="mb-[3vw] mt-[-3vw] md:mb-0 md:mt-0">
                <Button backColor='dark-pink' />
            </div>
        </div>
        <div>
            <img src={modelImage} alt='Not available' className="h-full" />
        </div>
    </div>
  )
}

export default HomePageTwo