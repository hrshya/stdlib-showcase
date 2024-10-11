import Button from "../ui/Button"
import Model1 from '../../assets/Images/Services/ServiceM1.png'
import Model2 from '../../assets/Images/Services/ServiceM2.png'
import Model3 from '../../assets/Images/Services/ServiceM3.png'


function PageTwo() {
  return (
    <div className="absolute top-[100vh] bg-white xl:top-[120vh] font-['Inter'] w-full px-8 min-h-screen">
        <div className="flex flex-col justify-center items-center gap-16 md:gap-28">
            <h1 className="text-[#242037] text-[5vw] font-bold mt-12">Our Services</h1>
            <div className="bg-[#FDF2F5] md:h-[35vw] md:w-[75vw] flex items-center justify-center gap-2 px-10 flex-col md:flex-row">
                <div className="md:w-1/2 md:ml-[-6vw]">
                    <img src={Model2} alt="Not Available" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-[5vw] md:text-[3vw] text-[#242037] font-bold">Webfolio</h1>
                    <div className="flex flex-col gap-2 md:gap-4 text-[1.5vw] md:text-[1vw] mt-2 md:mt-4">
                        <p>Modelling can be very enticing and lucrative but, at the same time, can get overwhelming when you do not know from where to begin and have no connections to guide you. It could take years to earn recognition and the reputation of a leading model in this industry. But, it gets easier with the help and guidance of professionals.</p>
                        <p>If you are an aspiring model and want to kickstart your career with a blare, then you are at the right place. At New Idol Model, with years of industry expertise and experience backed by an in-house team of professional and fashion specialists, we guarantee an incredible start to your career with compelling opportunities and genuine work exposure.</p>
                    </div>
                    <div className="pb-[4vw] mt-[-4vw] md:pb-0 md:pt-2 xl:pt-6">
                        <Button backColor="dark-pink" content={"See More"} />
                    </div>
                </div>
            </div>
            <div className="bg-[#FDF2F5] md:h-[35vw] md:w-[75vw] flex items-center justify-center gap-2 pt-8 md:pt-0 px-10 flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="text-[5vw] md:text-[3vw] text-[#242037] font-bold">Z-Cards</h1>
                    <div className="flex flex-col gap-2 md:gap-4 text-[1.5vw] md:text-[1vw] mt-2 md:mt-4">
                        <p>Modelling can be very enticing and lucrative but, at the same time, can get overwhelming when you do not know from where to begin and have no connections to guide you. It could take years to earn recognition and the reputation of a leading model in this industry. But, it gets easier with the help and guidance of professionals.</p>
                        <p>If you are an aspiring model and want to kickstart your career with a blare, then you are at the right place. At New Idol Model, with years of industry expertise and experience backed by an in-house team of professional and fashion specialists, we guarantee an incredible start to your career with compelling opportunities and genuine work exposure.</p>
                    </div>
                    <div className="pb-[4vw] mt-[-4vw] md:pb-0 md:pt-2 xl:pt-6">
                        <Button backColor="dark-pink" content={"See More"} />
                    </div>
                </div>
                <div className="md:w-1/2 md:mr-[-6vw]">
                    <img src={Model1} alt="Not Available" />
                </div>
            </div>
            <div className="bg-[#FDF2F5] md:h-[35vw] overflow-hidden md:w-[75vw] flex items-center justify-center gap-2 pt-8 md:pt-0 px-10 flex-col-reverse md:flex-row">
                <div className="md:w-1/2 scale-[1] md:scale-[.9] md:ml-[-6vw]">
                    <img src={Model3} alt="Not Available" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-[5vw] md:text-[3vw] text-[#242037] font-bold">Aftercare</h1>
                    <div className="flex flex-col gap-2 md:gap-4 text-[1.5vw] md:text-[1vw] mt-2 md:mt-4">
                        <p>Modelling can be very enticing and lucrative but, at the same time, can get overwhelming when you do not know from where to begin and have no connections to guide you. It could take years to earn recognition and the reputation of a leading model in this industry. But, it gets easier with the help and guidance of professionals.</p>
                        <p>If you are an aspiring model and want to kickstart your career with a blare, then you are at the right place. At New Idol Model, with years of industry expertise and experience backed by an in-house team of professional and fashion specialists, we guarantee an incredible start to your career with compelling opportunities and genuine work exposure.</p>
                    </div>
                    <div className="pb-[4vw] mt-[-4vw] md:pb-0 md:pt-2 xl:pt-6">
                        <Button backColor="dark-pink" content={"See More"} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageTwo