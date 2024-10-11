import Model1 from '../../assets/Images/HomeModel5.png'
import Model2 from '../../assets/Images/HomeModel6.png'
import Model3 from '../../assets/Images/HomeModel7.png'

function HomePageNine() {
  return (
    <div className="md:h-[120vh] w-full font-['Inter'] font-bold flex flex-col py-12 md:py-0 items-center gap-4 md:gap-0 justify-center bg-[#FBE5EC]">
        <div className="text-[7vw] md:text-[5vw]">
            Trending Models
        </div>
        <div>
            <div className="flex gap-4 scale-[.8] md:scale-[.7]">
                <div className="flex flex-col gap-4 items-center">
                    <img src={Model3} alt="Not Available" />
                    <h1 className="text-[#242037] text-[3vw] font-bold">Barbara Valente</h1>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img src={Model2} alt="Not Available" />
                    <h1 className="text-[#242037] text-[3vw] font-bold">Georgia Palmer</h1>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img src={Model1} alt="Not Available" />
                    <h1 className="text-[#242037] text-[3vw] font-bold">Jade Nguyen</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageNine