import { Blogs } from "../../Data/Blog"
import Button from "../ui/Button"


function BlogPageTwo() {
  return (
    <div className="w-full min-h-screen font-['Inter'] px-8 py-12 md:px-28 md:py-20 mb-44 flex flex-col items-center justify-center">
        <h1 className="text-[10vw] xl:text-[5vw] font-extrabold">Recent Blogs</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-12">
            {Blogs.length > 0 && Blogs.map((item, index) => (
                <div key={index} className="xl:w-[36vw] xl:h-[54vw] mt-12 md:mt-24">
                    <img src={item.Image} alt="Not Available" />
                    <h1 className="text-[7vw] md:text-[4vw] xl:text-[2.5vw] leading-none font-bold mt-4">{item.title}</h1>
                    <div className="mt-4 text-[3vw] md:text-[1.5vw] xl:text-[1vw] flex flex-col gap-4">
                        <p>{item.description1}</p>
                        <p>{item.description2}</p>
                    </div>
                    <div className="mt-[-2vw]">
                        <Button backColor={"dark-pink"} content={"See More"} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogPageTwo