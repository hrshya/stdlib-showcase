import image from '../assets/Images/dp.jpg'


function About() {
  return (
    <div className="w-full -mt-10 px-4 py-8 xl:p-20 bg-[#CDEA68] rounded-t-3xl text-black">
        <h1 className="font-['Neue_Montreal'] text-[8vw] xl:text-[4vw] leading-[8vw] xl:leading-[4.5vw]">
        I’m Harsh Yadav, a web developer specializing in building scalable web apps. I create efficient, user-focused solutions for startups and dynamic teams.
        </h1>
        <div className="w-full flex gap-5 flex-col xl:flex-row border-t mt-10 xl:mt-20 pt-10 border-[#a1b562]">
            <div className="xl:w-1/2 ">
                <h1 className="text-7xl">About me:</h1>
                <a target='_blank' href="https://linkedin.com/in/hrshya">
                    <button className="px-10 py-6 flex items-center gap-5 bg-zinc-900 mt-10 rounded-full uppercase text-white">Read More
                        <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                    </button>
                </a>
            </div>
            <div style={{backgroundImage: `url(${image})`}} className="xl:w-1/2 h-[70vh] rounded-3xl bg-cover">

            </div>
        </div>
    </div>
  )
}

export default About