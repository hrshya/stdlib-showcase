import FooterBoy from '../assets/Images/FooterBoy.png'
import FooterGirl from '../assets/Images/FooterGirl.png'
import Logo from '../assets/Logo.svg'
import Button from './ui/Button'

function Footer() {
  return (
    <div className="w-full relative flex flex-col items-center font-['Inter'] justify-center">
        <div className="h-[45vw] md:h-[40vw] xl:h-[26vw] w-[90vw] absolute top-[-12.5%]  md:top-[-25%] bg-[#FBE5EC] rounded-xl overflow-hidden">
            <div className="flex relative">
                <div className="flex flex-col absolute top-[6vw] left-[4vw]">
                    <h1 className="text-[6vw] xl:text-[4vw] text-[#F26C92] w-[60vw] xl:w-[45vw] font-bold leading-none">Would you like to have a career in modelling?</h1>
                    <Button backColor={"dark-blue"} />
                </div>
                <img src={FooterBoy} alt='Not Available' className="absolute top-[-30vw] right-[-1vw] md:right-[10vw] md:top-[-15vw] xl:right-[9vw] z-[2] xl:top-[-10vw] scale-[0.7]" />
                <img src={FooterGirl} alt='Not Available' className="absolute right-[-25vw] top-[-8vw] xl:right-[-15vw] xl:top-[-4vw] scale-[0.7]" />
            </div>
        </div>
        <div className="w-full md:min-h-screen bg-dark-pink py-10 px-8 pt-32 md:px-20 xl:px-44 md:py-20 md:pt-60">
            <div className="flex flex-col md:flex-row gap-12">
                <div className='flex items-center justify-center xl:gap-12'>
                    <div className="flex items-center">
                        <img className="md:scale-[2.6]" src={Logo} alt='Logo' />
                    </div>
                    <p className="text-white text-[2vw] md:text-[1vw] flex flex-col mt-4 gap-2 xl:gap-8 w-[40vw] md:w-[20vw] xl:w-[16.5vw] ml-8 md:ml-16">
                        <div>Dupe Model is the leading model support service in the UK, helping aspiring models turn their passion into a successful career. </div>
                        <div>We specialize in identifying and nurturing new talent, providing individuals of all ages, sizes, and types with the guidance, resources, and support they need to succeed in the modeling industry.</div>
                    </p>
                </div>

                <div className='flex items-center justify-center'>
                    <div className="flex md:gap-4">
                        <div className="text-white">
                            <h1 className="font-bold text-[2.2vw] md:text-[2vw] md:mt-10 xl:mt-0 xl:text-[1.7vw] mb-1 md:w-[12vw] xl:mb-3">Quick Links</h1>
                            <div className="flex flex-col">
                                <a href="/services"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">Our Services</a>
                                <a href="/blogs"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">Blogs</a>
                                <a href="/faqs"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">FAQs</a>
                                <a href="/testimonial"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">Testimonials</a>
                                <a href="modelling-london"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">Modelling London</a>
                                <a href="/advice-for-parents"  className="md:mb-3 mb-1 text-[2vw] md:text-[1.2vw] font-extralight">Advice For Parents</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-white ml-8">
                            
                                <h1 className="text-[2.2vw] md:text-[2vw] md:mt-10 xl:mt-0 xl:text-[1.7vw] font-semibold">Contact</h1>
                                <h1 className='leading-none'>For booking inquiries, please contact us :</h1>
                                <div className="flex gap-3 md:gap-6 items-center text-white">
                                    <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1161 12.114C10.0378 14.1906 7.6299 16.178 6.67803 15.2263C5.31654 13.8651 4.47628 12.6784 1.47233 15.0924C-1.53031 17.5051 0.776482 19.1144 2.09596 20.4323C3.61894 21.9549 9.29599 20.5137 14.9074 14.9047C20.5175 9.29444 21.9551 3.61854 20.4308 2.09586C19.1113 0.775338 17.5096 -1.52968 15.0964 1.47236C12.682 4.47439 13.8676 5.31448 15.2317 6.67701C16.1796 7.62868 14.1932 10.0361 12.1161 12.114Z" fill="white"/>
                                    </svg>
                                    <div className="text-[3vw] md:text-[1.5vw]">
                                        0330 133 6343
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-6 items-center text-white">
                                    <svg width="15" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.41524 6.5L0 10.5775V2.4225L6.41524 6.5ZM14.5848 6.5L21 10.5775V2.4225L14.5848 6.5ZM13.6474 7.0975L10.7791 8.92C10.6946 8.9725 10.5973 9 10.5 9C10.4027 9 10.3054 8.9725 10.2209 8.92L7.35256 7.0975L0.425122 11.5L0.0230488 11.755C0.148537 12.46 0.778537 13 1.53659 13H19.4634C20.2215 13 20.8515 12.4625 20.977 11.755L20.5723 11.5L13.6474 7.0975ZM10.5 7.9025L20.5723 1.5L20.977 1.245C20.8515 0.5375 20.2215 0 19.4634 0H1.53659C0.778537 0 0.148537 0.54 0.0230488 1.245L0.425122 1.5L10.5 7.9025Z" fill="white"/>
                                    </svg>
                                    <div className="text-[2.5vw] md:text-[1.2vw] font-light">
                                        info@newidolmodel.co.uk
                                    </div>
                                </div>

                                <div className="flex gap-8">
                                    <a href="" className="bg-[#F8B0C8] flex items-center justify-center h-[30px] w-[30px] xl:h-[2.5vw] xl:w-[2.5vw] rounded-full">
                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4824 3.68424C14.2667 3.68424 14.0558 3.75247 13.8765 3.88029C13.6971 4.00812 13.5573 4.1898 13.4748 4.40236C13.3923 4.61493 13.3707 4.84883 13.4127 5.07448C13.4548 5.30014 13.5587 5.50742 13.7112 5.67011C13.8637 5.8328 14.0581 5.94359 14.2696 5.98848C14.4812 6.03336 14.7004 6.01033 14.8997 5.92228C15.099 5.83423 15.2693 5.68513 15.3892 5.49383C15.509 5.30253 15.573 5.07761 15.573 4.84754C15.573 4.53901 15.4581 4.24312 15.2535 4.02496C15.049 3.8068 14.7716 3.68424 14.4824 3.68424ZM18.663 6.03022C18.6453 5.2259 18.5041 4.43011 18.2449 3.67455C18.0138 3.02808 17.6541 2.4427 17.1907 1.95869C16.7406 1.46179 16.1906 1.08057 15.582 0.843866C14.8756 0.559015 14.1287 0.404926 13.3736 0.388243C12.4103 0.330078 12.1013 0.330078 9.62925 0.330078C7.15725 0.330078 6.84825 0.330078 5.8849 0.388243C5.1298 0.404926 4.38292 0.559015 3.67646 0.843866C3.06907 1.08297 2.51946 1.46386 2.06784 1.95869C1.602 2.43872 1.24461 3.02547 1.02269 3.67455C0.755644 4.42811 0.611186 5.22479 0.595545 6.03022C0.541016 7.0578 0.541016 7.3874 0.541016 10.0242C0.541016 12.661 0.541016 12.9906 0.595545 14.0182C0.611186 14.8236 0.755644 15.6203 1.02269 16.3738C1.24461 17.0229 1.602 17.6097 2.06784 18.0897C2.51946 18.5845 3.06907 18.9654 3.67646 19.2045C4.38292 19.4894 5.1298 19.6435 5.8849 19.6601C6.84825 19.7183 7.15725 19.7183 9.62925 19.7183C12.1013 19.7183 12.4103 19.7183 13.3736 19.6601C14.1287 19.6435 14.8756 19.4894 15.582 19.2045C16.1906 18.9678 16.7406 18.5866 17.1907 18.0897C17.6562 17.6075 18.0162 17.0216 18.2449 16.3738C18.5041 15.6183 18.6453 14.8225 18.663 14.0182C18.663 12.9906 18.7175 12.661 18.7175 10.0242C18.7175 7.3874 18.7175 7.0578 18.663 6.03022ZM17.0271 13.9018C17.0205 14.5172 16.916 15.1269 16.7181 15.7049C16.573 16.1268 16.3399 16.508 16.0365 16.8198C15.7417 17.1402 15.385 17.3883 14.9913 17.5468C14.4494 17.7579 13.8778 17.8694 13.3009 17.8764C12.3921 17.9249 12.0558 17.9346 9.6656 17.9346C7.2754 17.9346 6.93913 17.9346 6.03031 17.8764C5.4313 17.8884 4.83484 17.79 4.26719 17.5856C3.89074 17.4189 3.55045 17.1715 3.26749 16.8585C2.96584 16.5471 2.73568 16.1656 2.59496 15.7437C2.37307 15.1574 2.25001 14.5338 2.23143 13.9018C2.23143 12.9324 2.1769 12.5737 2.1769 10.0242C2.1769 7.47464 2.1769 7.11596 2.23143 6.14655C2.2355 5.51745 2.34317 4.89402 2.54952 4.30467C2.70951 3.89549 2.95509 3.53074 3.26749 3.23831C3.5436 2.905 3.88484 2.64028 4.26719 2.46278C4.82117 2.24956 5.40504 2.13811 5.99396 2.13318C6.90278 2.13318 7.23904 2.07502 9.62925 2.07502C12.0195 2.07502 12.3557 2.07502 13.2645 2.13318C13.8414 2.14024 14.413 2.25169 14.955 2.46278C15.368 2.62628 15.7386 2.89208 16.0365 3.23831C16.3343 3.5361 16.567 3.90016 16.7181 4.30467C16.9201 4.89497 17.0246 5.51816 17.0271 6.14655C17.0725 7.11596 17.0816 7.47464 17.0816 10.0242C17.0816 12.5737 17.0725 12.9324 17.0271 13.9018ZM9.62925 5.05111C8.70753 5.05303 7.80702 5.34632 7.04152 5.89394C6.27601 6.44155 5.67985 7.21891 5.32836 8.12779C4.97688 9.03667 4.88585 10.0363 5.06677 11.0003C5.24769 11.9644 5.69244 12.8496 6.34483 13.5441C6.99722 14.2386 7.82797 14.7113 8.73211 14.9024C9.63626 15.0935 10.5732 14.9945 11.4246 14.6178C12.276 14.2411 13.0036 13.6037 13.5155 12.7861C14.0274 11.9685 14.3006 11.0074 14.3006 10.0242C14.3018 9.36994 14.1817 8.72189 13.9473 8.11732C13.7128 7.51275 13.3687 6.96358 12.9345 6.5014C12.5004 6.03923 11.9849 5.67316 11.4176 5.42427C10.8504 5.17537 10.2426 5.04856 9.62925 5.05111ZM9.62925 13.2523C9.03069 13.2523 8.44557 13.063 7.94788 12.7083C7.4502 12.3536 7.0623 11.8494 6.83324 11.2596C6.60418 10.6697 6.54425 10.0206 6.66102 9.39442C6.77779 8.76822 7.06603 8.19302 7.48927 7.74155C7.91252 7.29009 8.45177 6.98264 9.03883 6.85808C9.62589 6.73352 10.2344 6.79745 10.7874 7.04178C11.3404 7.28611 11.8131 7.69987 12.1456 8.23074C12.4781 8.7616 12.6556 9.38573 12.6556 10.0242C12.6556 10.4481 12.5774 10.8679 12.4253 11.2596C12.2732 11.6512 12.0503 12.0071 11.7692 12.3068C11.4882 12.6066 11.1546 12.8444 10.7874 13.0066C10.4202 13.1688 10.0267 13.2523 9.62925 13.2523Z" fill="white"/>
                                        </svg>
                                    </a>
                                    <a href="" className="bg-[#F8B0C8] flex items-center justify-center h-[30px] w-[30px] xl:h-[2.5vw] xl:w-[2.5vw] rounded-full">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.1242 11.9206L15.1169 11.9814C13.3354 11.0935 13.1491 10.9752 12.9191 11.3203C12.7595 11.5593 12.2945 12.1013 12.1543 12.2617C12.0125 12.4197 11.8716 12.4318 11.631 12.3224C11.388 12.2009 10.6078 11.9457 9.68431 11.1194C8.96494 10.4754 8.48212 9.68556 8.33954 9.44253C8.10218 9.03261 8.59878 8.97429 9.05081 8.11882C9.13182 7.9487 9.09051 7.81503 9.03056 7.69432C8.9698 7.57281 8.48617 6.38196 8.28365 5.90724C8.08922 5.43414 7.88913 5.49409 7.73926 5.49409C7.27264 5.45358 6.93158 5.46006 6.63104 5.77276C5.32353 7.20988 5.65324 8.69237 6.77199 10.2688C8.97061 13.1463 10.142 13.6761 12.2839 14.4117C12.8623 14.5956 13.3897 14.5697 13.8069 14.5097C14.2719 14.436 15.2384 13.9256 15.4401 13.3545C15.6467 12.7834 15.6467 12.3095 15.5859 12.2001C15.526 12.0908 15.3672 12.03 15.1242 11.9206Z" fill="white"/>
                                            <path d="M17.5647 3.12447C11.3358 -2.89702 1.02728 1.47024 1.02323 9.96498C1.02323 11.663 1.46797 13.3188 2.31534 14.781L0.941406 19.7729L6.07341 18.4346C12.4773 21.8937 20.3806 17.3005 20.3839 9.96984C20.3839 7.39695 19.3793 4.97556 17.5526 3.15607L17.5647 3.12447ZM18.7653 9.9431C18.7604 16.1266 11.9726 19.9884 6.60402 16.8322L6.31239 16.6589L3.2745 17.4487L4.08865 14.4959L3.89504 14.1921C0.554177 8.87377 4.39244 1.92309 10.721 1.92309C12.871 1.92309 14.8889 2.76155 16.4087 4.28049C17.9276 5.78647 18.7653 7.80443 18.7653 9.9431Z" fill="white"/>
                                        </svg>
                                    </a>
                                    <a href="" className="bg-[#F8B0C8] flex items-center justify-center h-[30px] w-[30px] xl:h-[2.5vw] xl:w-[2.5vw] rounded-full">
                                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.08129 19.7729V10.9048H11.3335L11.8214 7.44767H8.08129V5.24082C8.08129 4.24022 8.38375 3.55833 9.95383 3.55833L11.9531 3.55758V0.465429C11.6073 0.424323 10.4205 0.330078 9.0392 0.330078C6.15478 0.330078 4.18005 1.94088 4.18005 4.89843V7.44767H0.917969V10.9048H4.18005V19.7729H8.08129Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="text-[3vw] md:text-[1.2vw] font-light">
                                        Sign up for Dupe Model Newsletter
                                    </div>
                                    <div className="w-full max-w-sm min-w-[200px] md:min-w-[250px]">
                                        <div className="flex">
                                            <input type="email" className="w-full bg-transparent placeholder:text-white text-slate-700 text-sm border border-slate-300 pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-sm" placeholder="Your email" />
                                            <button
                                            className="bg-gray-900 py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700"
                                            type="button"
                                            >
                                            Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[2.2vw] md:text-[1vw] text-white xl:ml-[33vw] mt-4">
                Owned and Operated By Dupe Photography, 6-16 Arbutus, London, England, E8 4DT
            </div>
        </div>
        <div className="flex justify-between items-center  text-white h-[4vw] bg-[#F38EAC] w-full px-8 py-2">
            <a href="" className="text-[1.5vw] xl:text-[.9vw]">
                Copyright 2023 dupe modle | All Rights Reserved | T&C's
            </a>
            <a href="" className="font-bold">
                DMCA.COM
            </a>
        </div>
    </div>
  )
}

export default Footer