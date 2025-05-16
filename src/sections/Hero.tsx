import Navbar from "./Navbar";
import centerVid from "../assets/noise_800.mp4"
import { MdOutlineArrowOutward } from "react-icons/md";


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#c3c3c3] overflow-hidden">
      <img
        src="/img/floor.webp"
        alt="floor"
        className="absolute bottom-0 left-1/2 translate-x-[-50%] object-cover"
        style={{
          height: "50vh",
          transform: "perspective(1000px) rotateX(70deg) scale(20) translateY(80%)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
        }}
      />
      <Navbar />

      <div className="relative bottom-10 z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase font-bold absolute z-15 text-white font-travels-medium text-2xl md:text-4xl lg:text-6xl xl:text-[10rem] transform">We create</h1>
          <div className="relative h-[40vh] w-[45vw] rounded-4xl overflow-hidden top-35">
            {/* Color overlay ON TOP of video */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 mix-blend-multiply z-10 pointer-events-none" />
              <video
                src={centerVid}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover z-0"
              />
          </div>
        </div>
      </div>
        <div className="relative top-35 z-[15] px-6">
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
        </div>
    </section>
  );
};

export default Hero;
