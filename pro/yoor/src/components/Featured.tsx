import { AnimationControls, motion, TargetAndTransition, useAnimation, VariantLabels } from "framer-motion"
import { projects } from "../Data/projects"

function Featured() {
    const cards: (boolean | AnimationControls | VariantLabels | TargetAndTransition | undefined)[] = []
    for (let i = 0; i < projects.length; i++) {
        cards[i] = useAnimation();    
    }
    const handleHover = (index: number) => {
        // @ts-ignore
        cards[index].start({y: "0"})
    }

    const handleHoverEnd = (index: number) => {
        // @ts-ignore
        cards[index].start({y: "100%"})
    }


  return (
    <div className="w-full py-20 overflow-hidden">
        <div className="w-full px-4 xl:px-20 border-b border-zinc-700 pb-20">
            <h1 className="text-7xl font-bold xl:font-light font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
        </div>
        <div className="px-4 xl:px-20">
            <div className="cards w-full grid xl:grid-cols-2 grid-cols-1 gap-20 xl:gap-10 mt-10">
                {projects.length > 0 && projects.map((project, ind)=>(
                <div>
                    <div className="flex items-center justify-between gap-2 mb-4 px-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                            <div className="uppercase text-md">
                                {project.name}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a target="_blank" href={project.githubLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                            </a>
                            <a target="blank" className="flex items-center gap-2 px-3 text-white hover:scale-[1.1] transition ease-in-out bg-zinc-900 py-1 border border-zinc-700 rounded-full" href={project.liveLink}>
                                <div className="text-md">
                                    Live
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                    <motion.div 
                    key={ind}
                    onHoverStart={()=>handleHover(ind)}
                    onHoverEnd={()=> handleHoverEnd(ind)}
                    className="cardcontainer relative xl:w-full h-[70vw] xl:h-[75vh]">
                            <h1 className={`absolute flex overflow-hidden text-[#CDEA68] ${ind%2===0 ? "right-0" : "right-full"} translate-x-1/2 top-1/2 font-semibold -translate-y-1/2 z-[9] leading-none tracking-tighter text-[10vw]`}>
                                {project.name.split("").map((item, index) => (
                                    <motion.span 
                                    initial={{y: "100%"}}
                                    //@ts-ignore
                                    animate={cards[ind]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.05}}
                                    className="inline-block translate-y-full">{item}</motion.span>
                                ))}
                            </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden  hover:cursor-pointer hover:scale-[.95] transition ease-in-out">
                            <a target="_blank" href={project.liveLink}>
                                <img className="w-full h-full bg-cover object-cover hover:scale-[1.1] transition ease-in-out" src={project.coverImg} alt={project.name} />
                            </a>
                        </div>
                    </motion.div>
                    <div className="w-full">
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((techno) => (
                                <div className="px-4 py-1 border border-zinc-700 rounded-full text-black">
                                    {techno}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Featured