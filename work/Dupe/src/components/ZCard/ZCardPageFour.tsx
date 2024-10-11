import Button from '../ui/Button'
import background from '../../assets/Images/ZCard/ZCardModel4.png'
import Mask1 from '../../assets/Images/ZCard/Mask group-1.png'
import Mask2 from '../../assets/Images/ZCard/Mask group-2.png'
import Mask3 from '../../assets/Images/ZCard/Mask group.png'
import Alexa from '../../assets/Images/ZCard/Alexa James.png'
import text from '../../assets/Images/ZCard/5’-9” B32 W32 B35 Shoe 8.5 Hair Blond Eyes Blue.png'

function ZCardPageFour() {
  return (
    <div className='bg-[#242037] min-h-screen w-full px-8 py-12 md:p-28 text-white font-["Inter"] flex flex-col gap-28'>
        <div className="flex flex-col gap-4 xl:gap-16">
            <h1 className="text-[7vw] xl:text-[5vw] font-extrabold leading-none">Perks Of Z Card</h1>
            <div className="text-[2vw] xl:text-[1.1vw] font-medium flex flex-col gap-4 md:gap-12">
                <p className="font-extrabold">The industry is fast-moving, with tight-neck competition and options to choose from. In such a scenario, agencies and directors do not have the time to pen down your information when you bump into them at an event. Even if they note your information, they may lose the piece of paper, as it is not attractive. A Z card instead allows you to hand over vital information at an instant's notice.</p>
                <div className='flex items-center gap-8 flex-col xl:flex-row'>
                    <div className='h-[52vw] py-12 md:py-0'>
                        <div style={{backgroundImage: `url(${background})`}} className=' bg-white h-[35vh] w-[22vh] md:w-[35vw] px-1 py-2 xl:px-6 xl:py-8 md:h-full flex flex-col gap-1 xl:gap-4'>
                            <div>
                                <img src={Mask2} alt="Not Available" />
                            </div>
                            <div className='flex justify-between md:gap-5 items-center'>
                                <img className='w-[20vw] md:w-[15vw]' src={Mask1} alt="Not Available" />
                                <img className='w-[20vw] md:w-[15vw]'  src={Mask3} alt="Not Available" />
                            </div>
                            <div>
                                <img src={Alexa} alt="Not Available" />
                                <img className='mt-2' src={text} alt="Not Available" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 mt-28 md:mt-0 xl:w-[50vw]">
                            <div className="flex gap-4 md:gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#F26C92"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold xl:text-[1.3vw]'>Networking :</span> Whether you are an established professional model or a beginner, it would be advisable not to attend any networking events, shows, shoots or exhibitions without your Z cards, as you never know who you might bump into for work opportunities. All you have to do is store them handy in your bag to reach out to them effortlessly when needed. With a Z card, it becomes easier to build connections and links in the industry.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#F26C92"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold xl:text-[1.3vw]'>Information :</span> Yes, you may have the attitude and poise of a model, but to get work and be hired by leading agencies, it is essential to have a professional approach as well. A Z card leaves a professional and lasting impression about you. If your Z card is beautifully designed, attractive and sleek, it may help you strike a conversation with your future employer or perhaps land you a casting role you dreamt of!</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:gap-8 w-full">
                                <div className="h-[21px] w-[21px] mt-2">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.5" cy="10.5" r="10.5" fill="#F26C92"/>
                                    </svg>
                                </div>
                                <div className='flex'>
                                    <p> <span className='font-extrabold xl:text-[1.3vw]'>High-quality Images :</span> One of the incredible features of a Z card is that it allows you to talk about your work briefly. Your past work experience and profile specifications help talk about you and capture your work essence on a card. This makes it easier to target your niche and reach out to the accurate casting agencies and directors looking for someone like you suitable for the role.</p>
                                </div>
                            </div>
                
                        <div className='xl:mt-12'>
                            <Button backColor={"dark-pink"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZCardPageFour