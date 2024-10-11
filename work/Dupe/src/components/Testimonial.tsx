import { Carousel } from "@material-tailwind/react"
import { Testimonials } from "../Data/Testimonail"


function Testimonial() {
  return (
    // @ts-ignore
    <Carousel navigation={false} loop autoplay>
        {Testimonials.length>0 && Testimonials.map((item) => (
            <div>
                <div className="md:h-screen w-full bg-[#FBE5EC] relative flex justify-center flex-col items-center gap-16 overflow-hidden py-44 md:py-0">
                    <div className="absolute left-[25vw] top-[21vh] md:top-[20vw] xl:top-[7vw] z-[99] w-[11vw] p-1 xl:p-0 h-[11vw] md:w-[7vw] md:h-[7vw] bg-[#F26C92] rounded-full flex justify-center items-center">
                        <svg width="67" height="41" viewBox="0 0 67 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1211 40.6064C19.0648 40.658 22.8705 39.1563 25.7169 36.4253C28.5632 33.6944 30.222 29.9534 30.3348 26.0098C30.4477 22.0663 29.0055 18.2365 26.3199 15.3473C23.6343 12.458 19.9207 10.741 15.9805 10.567C16.8904 6.65612 18.9003 3.08761 21.7732 0.283203C13.4658 0.283203 0.0976647 11.6017 0.0976647 25.5628C0.0955733 27.5376 0.482608 29.4934 1.23666 31.3185C1.99072 33.1436 3.09716 34.8021 4.49241 36.1992C5.88766 37.5964 7.54443 38.7047 9.36817 39.461C11.1919 40.2172 13.1468 40.6064 15.1211 40.6064Z" fill="white"/>
                            <path d="M51.5682 40.6064C55.5119 40.658 59.3177 39.1563 62.1641 36.4253C65.0105 33.6944 66.6693 29.9534 66.7821 26.0098C66.8949 22.0663 65.4527 18.2365 62.7671 15.3473C60.0815 12.458 56.3679 10.741 52.4277 10.567C53.345 6.65903 55.3541 3.0925 58.2206 0.283203C49.9291 0.283203 36.5449 11.6017 36.5449 25.5628C36.5449 29.5499 38.1272 33.3738 40.9442 36.1946C43.7611 39.0153 47.5823 40.6021 51.5682 40.6064Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="bg-[#f7eef1] w-[40vh] h-[20vh] md:w-[60vw] md:h-[25vw] rounded-xl rotate-[-6deg]">
                        <div className="bg-[#FDF2F5] w-[40vh] h-[20vh] md:w-[60vw] md:h-[25vw] rounded-xl rotate-[6deg] p-8 md:p-28 gap-4 flex flex-col leading-[2] justify-center items-center">
                            <p className="font-semibold flex justify-center items-center text-[2vw] md:text-[1.1vw]">{item.testimony}</p>
                            <h1 className="text-[#F26C92] text-[3vw] font-bold">{item.name}</h1>
                        </div>
                    </div>
                    <div className="absolute left-[65vw] top-[84vw] md:top-[49vw] xl:top-[32vw] rotate-[180deg] z-[99] w-[11vw] p-1 xl:p-0 h-[11vw] md:w-[7vw] md:h-[7vw] bg-[#F26C92] rounded-full flex justify-center items-center">
                        <svg width="67" height="41" viewBox="0 0 67 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1211 40.6064C19.0648 40.658 22.8705 39.1563 25.7169 36.4253C28.5632 33.6944 30.222 29.9534 30.3348 26.0098C30.4477 22.0663 29.0055 18.2365 26.3199 15.3473C23.6343 12.458 19.9207 10.741 15.9805 10.567C16.8904 6.65612 18.9003 3.08761 21.7732 0.283203C13.4658 0.283203 0.0976647 11.6017 0.0976647 25.5628C0.0955733 27.5376 0.482608 29.4934 1.23666 31.3185C1.99072 33.1436 3.09716 34.8021 4.49241 36.1992C5.88766 37.5964 7.54443 38.7047 9.36817 39.461C11.1919 40.2172 13.1468 40.6064 15.1211 40.6064Z" fill="white"/>
                            <path d="M51.5682 40.6064C55.5119 40.658 59.3177 39.1563 62.1641 36.4253C65.0105 33.6944 66.6693 29.9534 66.7821 26.0098C66.8949 22.0663 65.4527 18.2365 62.7671 15.3473C60.0815 12.458 56.3679 10.741 52.4277 10.567C53.345 6.65903 55.3541 3.0925 58.2206 0.283203C49.9291 0.283203 36.5449 11.6017 36.5449 25.5628C36.5449 29.5499 38.1272 33.3738 40.9442 36.1946C43.7611 39.0153 47.5823 40.6021 51.5682 40.6064Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        ))}
    </Carousel>
  )
}

export default Testimonial