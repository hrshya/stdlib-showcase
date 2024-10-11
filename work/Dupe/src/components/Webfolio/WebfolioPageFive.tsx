import Button from '../ui/Button'

function WebfolioPageFive() {
  return (
    <div className="md:min-h-screen w-full font-['Inter'] px-8 py-12 md:px-28 bg-[#FBE5EC] md:py-32 relative overflow-hidden flex items-center justify-center gap-36">
        <div className="flex flex-col">
            <h1 className="text-[7vw] md:text-[5vw] font-extrabold text-[#242037] leading-none">eBook Folio</h1>
            <div className="flex flex-col font-medium gap-2 md:gap-4 items-center text-[2vw] md:text-[1.1vw] mt-4 md:mt-12">
                <p>If you haven't thought of launching your work online, then it is about time that you spur open this thought. Skip the idea of having an ordinary portfolio as we cannot stress how important it is to build an online presence. With social media booming and everyone connecting through the tip of their fingers, by creating a charismatic ebook, you can avail yourself of global opportunities and manage your portfolio without a modelling agency.</p>
                <p>Choose an online platform, select your niche and target audience, select your theme, upload your pictures and manage your online portfolio - that's all it takes to self-market and promote your craft. You need to ensure that your profile is uncluttered and maintained up to date. With the help of high-quality images and a dedicated professional online portfolio, you can also target freelance modelling jobs. Also, mention your contact and email address for casting directors or agencies to contact you quickly.</p>
            </div>
            <div>
                <Button backColor={"dark-pink"} />
            </div>
        </div>
    </div>
  )
}

export default WebfolioPageFive