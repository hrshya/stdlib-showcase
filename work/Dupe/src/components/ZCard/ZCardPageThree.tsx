import Button from '../ui/Button'
import Model from '../../assets/Images/ZCard/ZCardModel3.png'

function ZCardPageThree() {
  return (
    <div className='bg-[#FDF2F5] min-h-screen w-full px-8 py-12 md:px-28 md:py-28 font-["Inter"] flex flex-col gap-28'>
        <div className="flex flex-col gap-4 md:gap-16">
            <h1 className="text-[8vw] md:text-[5vw] font-extrabold leading-none text-[#242037]">A Visual And <br /> Aesthetic Appeal</h1>
            <div className="text-[2vw] md:text-[1.1vw] font-medium flex flex-col gap-6">
                <p className="font-extrabold">A Z card is nothing but a professional, focused and detailed profile of your work, showcasing your craft and versatility in the form of a business card. Even though it is a concise card, it must appeal and leave a lasting impression. Just by passing around your Z card at an event, you can market your skills to varied directors, casting agents, photographers, art directors or even stylists. Hence, you must ensure that your card is not only compelling enough for them to read it but also to save it and call you for work. A Z card can form your first or last impression with someone, so invest in creating a unique one to make their impression last worth a while.</p>
                <div className='flex items-center gap-4 md:gap-8 flex-col xl:flex-row'>
                    <div className="flex flex-col gap-4 md:gap-8 xl:w-[50vw]">
                            <div className="flex gap-8 w-full">
                                <div className=" md:h-[21px] md:w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="black"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold md:text-[1.3vw]'>Layout :</span> By now, you must have gauged how essential it is to make sure that you stand out in the model industry. Thus, your Z card must be crisp and clear. Messy and illegible information will only put your impression down. You do not have to print all your details but only what may be required by agencies and directors to refer to. Make sure the colour scheme and font colour and size are clear without straining the eyes. Your Z Card must be user friendly and a visual treat for all.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="black"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold md:text-[1.3vw]'>Information :</span> A Z card must include all your details such as Name, work experience, height, weight, dress and shoe size. You must also include your email address and contact number for agencies and directors to connect with you for opportunities.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="black"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold md:text-[1.3vw]'>High-quality Images :</span> A selfie or a low-quality image is a big no-no for your Z card. You must only print high-quality standard professional photographs. A blurry or pixelated image will not allow the agencies to understand your work. Also, do not choose more than five to six shots. Have your pictures neatly presented, showing your work in front of the camera and also targetting your niche.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="black"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold md:text-[1.3vw]'>Extras :</span> You can always be creative with your Z card to stand out. You can add fancy finishes to your Z card, whether you want a soft lamination, shiny or matte finish on your card. You can also work on the thickness of the paper. Ensure that the details on the card are not jumbled and you stick to only the basic information. Also, the size of the card shouldn't be huge but enough to slide into the pocket.</p>
                                </div>
                            </div>
                        <div>
                            <Button backColor={"dark-pink"} content={"Become a Model"} />
                        </div>
                    </div>
                    <div>
                        <img src={Model} alt="Not Available" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZCardPageThree