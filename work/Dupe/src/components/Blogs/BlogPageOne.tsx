import Model1 from '../../assets/Images/Blogs/BlogModel1.png'
import Model2 from '../../assets/Images/Blogs/BlogModel2.png'
import Model3 from '../../assets/Images/Blogs/BlogModel3.png'

function BlogPageOne() {
  return (
    <div className="w-full min-h-screen font-['Inter'] bg-[#FDF2F5] px-8 py-12 md:py-20 md:px-28">
        <h1 className="text-[10vw] md:text-[5vw] font-extrabold">Recent Blogs</h1>
        <div className="h-[35vw] w-full flex items-center justify-center gap-2 md:gap-4 xl:gap-8 flex-col md:flex-row md:mt-0 mt-56">
            <div className="relative">
                <img src={Model1} alt="Not Available" />
                <div className="absolute bottom-0 text-white text-[2vw] bg-black w-full bg-opacity-60 flex flex-col font-bold py-2 items-center justify-center">
                    <h1>Modelling for Beginners – <br /></h1>
                    <h1>UK Edition</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-8">
                <div className="relative">
                    <img src={Model2} alt="Not Available" />
                    <div className="absolute bottom-0 text-white text-[2vw] bg-black w-full bg-opacity-60 flex flex-col font-bold py-2 items-center justify-center">
                        <h1>Modelling for Beginners – <br /></h1>
                        <h1>UK Edition</h1>
                    </div>
                </div>
                <div className="relative">
                    <img src={Model3} alt="Not Available" />
                    <div className="absolute bottom-0 text-white text-[2vw] bg-black w-full bg-opacity-60 flex flex-col font-bold py-2 items-center justify-center">
                        <h1>Modelling for Beginners – <br /></h1>
                        <h1>UK Edition</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPageOne