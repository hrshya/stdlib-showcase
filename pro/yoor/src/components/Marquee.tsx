import { motion } from "framer-motion"

function Marquee() {
  return (
    <div  className="w-full py-20 rounded-t-3xl bg-[#004D43]">
        <div className="text flex items-center border-b-2 border-t-2 text-white border-zinc-300 overflow-hidden whitespace-nowrap">
            <motion.h1 
            initial={{x: 0}}
            animate={{x: "-100%"}}
            transition={{repeat: Infinity, ease: "linear", duration: 16}}
            className="text-[36vw] xl:text-[24vw] leading-none uppercase xl:pt-10 tracking-tight xl:-mb-[6.5vw] font-['Founders_Grotesk'] font-bold xl:font-semibold pr-20">FULL STACK DEVELOPER</motion.h1>
            <motion.h1 
            initial={{x: 0}}
            animate={{x: "-100%"}}
            transition={{repeat: Infinity, ease: "linear", duration: 16}}
            className="text-[36vw] xl:text-[24vw] leading-none uppercase xl:pt-10 tracking-tight xl:-mb-[6.5vw] font-['Founders_Grotesk'] font-bold xl:font-semibold pr-20">FULL STACK DEVELOPER</motion.h1>
        </div>
    </div>
  )
}

export default Marquee