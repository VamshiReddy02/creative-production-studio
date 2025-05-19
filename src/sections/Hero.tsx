import Navbar from "./Navbar";
import centerVid from "../assets/noise_800.mp4"
import { MdOutlineArrowOutward } from "react-icons/md";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Colloboration from "./Colloboration";
import Facilities from "./Facilities";
import Equipment from "./Equipment";
import Footer from "./Footer";
import Services from "./Services";


const Hero = () => {
  const scrollTarget = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['2rem', '0rem']);
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-6vh']);
  const revealStart =  0.86;
  const topSplitY = useTransform(scrollYProgress, [revealStart, 1], ['0%', '-100%']);
  const bottomSplitY = useTransform(scrollYProgress, [revealStart, 1], ['0%', '100%']);

  const navbarOpacity = useTransform(scrollYProgress, [revealStart, revealStart + 0.01], [1, 0]);
  const bottomOpacity = useTransform(scrollYProgress, [revealStart, revealStart + 0.01], [1, 0]);



  const headingY = useTransform(scrollYProgress, [0, 0.6], ['20vh', '-150vh']);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const floorOpacity = useTransform(scrollYProgress, [revealStart, 1], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#c3c3c3]">
      <div className="sticky top-0 overflow-x-clip">
        <motion.img
          src="/img/floor.webp"
          alt="floor"
          className="absolute bottom-0 left-1/2 translate-x-[-50%] object-cover"
          style={{
            opacity: floorOpacity,
            height: "50vh",
            transform: "perspective(1000px) rotateX(70deg) scale(20) translateY(80%)",
            transformOrigin: "bottom",
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          }}
        />
        <motion.div style={{ opacity: navbarOpacity }}>
          <Navbar />
        </motion.div>

        <div className="relative bottom-10 z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <motion.h1 style={{ y: headingY, opacity: headingOpacity }}
              className="uppercase font-bold absolute z-15 text-white font-travels-medium text-2xl md:text-4xl lg:text-6xl xl:text-[10rem] transform">
                We create
            </motion.h1>
          <motion.div style={{ scale, borderRadius, y }} className="relative h-[40vh] w-[45vw] overflow-hidden top-35">
                {/*Split Top Half*/}
              <motion.div
                style={{ y: topSplitY }}
                className="absolute top-0 left-0 w-full h-full z-20 clip-top"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 mix-blend-multiply z-10" />
                  <video
                    src={centerVid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              {/*Split Bottom Half*/}
              <motion.div
                style={{ y: bottomSplitY }}
                className="absolute top-0 left-0 w-full h-full z-10 clip-bottom"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 mix-blend-multiply z-10" />
                  <video
                    src={centerVid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
          <motion.div style={{ opacity: bottomOpacity }} className="relative top-35 z-[1] px-6">
            <div className="flex justify-between items-center w-full max-w-8xl mx-auto">
              <p className="font-travels-medium text-neutral-500">
                @2025 VR Studios
              </p>
              <div className="flex flex-col gap-[6px] text-md leading-none items-end text-right">
                <div className="flex items-center gap-[4px]">
                  <span className="font-travels-medium uppercase text-[16px] tracking-wide text-black ">
                    INSTAGRAM
                  </span>
                  <MdOutlineArrowOutward className="text-[16px] text-black ml-3" />
                </div>
                <div className="flex items-center gap-[4px]">
                  <span className="font-travels-medium uppercase text-[16px] tracking-wide text-black">
                    LINKEDIN
                  </span>
                  <MdOutlineArrowOutward className="text-[16px] text-black ml-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='h-[400vh]' ref={scrollTarget} ></div>
        <div className="bg-[#1a1a1a]">
        <Navbar />
        <Services />
        <Colloboration />
        <Facilities />
        <Equipment />
        <Footer />
        </div>
    </section>
  );
};

export default Hero;
