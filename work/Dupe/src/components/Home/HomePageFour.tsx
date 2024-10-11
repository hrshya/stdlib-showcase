import Button from "../ui/Button"


function HomePageFour() {
  return (
    <div className="w-full h-[40vh] md:h-screen font-['Inter'] flex flex-col items-center justify-center bg-[#FDF2F5]">
        <div className="text-[6vw] md:text-[4vw] font-bold">
            Can I become a model?
        </div>
        <div className="flex gap-12 mt-8 md:mt-16">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-[10vw] w-[10vw] text-[5vw] font-bold bg-[#FBE5EC] rounded-full flex items-center justify-center">
                    1
                </div>
                <div className="text-[1.6vw] md:text-[1.5vw] w-[18vw] flex flex-col items-center justify-center">
                    <div>
                        TAKE A PICTURE, EVEN
                    </div>
                    <div>
                        A SELFIE WILL DO!
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-[10vw] w-[10vw] text-[5vw] font-bold bg-[#FBE5EC] rounded-full flex items-center justify-center">
                    2
                </div>
                <div className="text-[1.6vw] md:text-[1.5vw] w-[18vw] flex flex-col items-center justify-center">
                    <div>
                        FILL IN OUR SIMPLE 
                    </div>
                    <div>
                        FORM!
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-[10vw] w-[10vw] text-[5vw] font-bold bg-[#FBE5EC] rounded-full flex items-center justify-center">
                    3
                </div>
                <div className="text-[1.6vw] md:text-[1.5vw] w-[18vw] flex flex-col items-center justify-center">
                    <div>
                        SUBMIT THE FORM AND 
                    </div>
                    <div>
                        WAIT FOR A REPLY
                    </div>
                </div>
            </div>

        </div>
        <div className="mt-0 md:mt-8">
            <Button backColor="dark-pink" />
        </div>
    </div>
  )
}

export default HomePageFour